// src/components/ProductCard.tsx
"use client";
import React from "react";
import { Product } from "../types";
import Badge from "./Badge";
import Rating from "./Rating";
import { formatCurrency } from "../utils/helpers";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative">
        <img className="w-full h-48 object-cover rounded-t-md" src={product.imageUrl} alt={product.name} />
        {product.isHot && <div className="absolute top-3 left-3"><Badge>HOT</Badge></div>}
        <div className="absolute top-3 right-3 flex gap-2">
          <button aria-label="wishlist" title="Add to wishlist" className="p-1 bg-white/80 rounded-full shadow-sm">♡</button>
          <button aria-label="compare" title="Compare" className="p-1 bg-white/80 rounded-full shadow-sm">⇄</button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-sm mb-2">{product.name}</h3>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-base font-semibold">{formatCurrency(product.discountPrice)}</div>
          <div className="text-sm text-gray-400 line-through">{formatCurrency(product.price)}</div>
          <div className="text-sm text-green-600 font-semibold">-{product.discountPercent}%</div>
        </div>

        <div className="flex items-center justify-between">
          <Rating value={product.ratingValue} count={product.ratingCount} />
          <div className="flex items-center gap-1">
            {product.colors.map((c) => (
              <span key={c} title={c} style={{ backgroundColor: c }} className="w-5 h-5 rounded-full border" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
