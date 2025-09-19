// src/app/page.tsx
"use client";
import React, { useMemo, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import FilterPanel from "../components/FilterPanel";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import productsData from "../data/products";
import { Product } from "../types";
import { paginate } from "../utils/helpers";

const PAGE_SIZE = 12;

export default function HomePage() {
  const [category, setCategory] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const categories = useMemo(() => Array.from(new Set(productsData.map(p => p.category))), []);
  const colors = useMemo(() => {
    const s = new Set<string>();
    productsData.forEach(p => p.colors.forEach(c => s.add(c)));
    return Array.from(s);
  }, []);

  useEffect(() => { setPage(1); }, [category, selectedColors, sort]);

  const toggleColor = (c: string) => {
    setSelectedColors(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const filtered = useMemo(() => {
    let arr = [...productsData] as Product[];
    if (category) arr = arr.filter(x => x.category === category);
    if (selectedColors.length) arr = arr.filter(x => selectedColors.some(c => x.colors.includes(c)));

    if (sort) {
      const [field, dir] = sort.split("_");
      arr.sort((a, b) => {
        if (field === "name") return dir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        if (field === "price") return dir === "asc" ? a.discountPrice - b.discountPrice : b.discountPrice - a.discountPrice;
        if (field === "popularity") return dir === "asc" ? a.ratingValue - b.ratingValue : b.ratingValue - a.ratingValue;
        return 0;
      });
    }

    return arr;
  }, [category, selectedColors, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = paginate(filtered, page, PAGE_SIZE);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="hidden lg:block w-64">
        <Sidebar categories={categories} selectedCategory={category} onSelectCategory={(c)=> setCategory(c)} />
      </div>

      <div className="flex-1">
        <FilterPanel colors={colors} selectedColors={selectedColors} onToggleColor={toggleColor} sort={sort} onChangeSort={setSort} />

        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600">{filtered.length} products</div>
            <div className="hidden md:block">
              <Pagination page={page} totalPages={totalPages} onChange={setPage} />
            </div>
          </div>

          {pageItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500 border rounded">
              No products match your filters.
              <button className="ml-2 underline" onClick={() => { setCategory(null); setSelectedColors([]); setSort(""); setPage(1); }}>
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {pageItems.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          <div className="mt-6 block md:hidden">
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
