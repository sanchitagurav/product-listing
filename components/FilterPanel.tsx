// src/components/FilterPanel.tsx
"use client";
import React from "react";

type Props = {
  colors: string[];
  selectedColors: string[];
  onToggleColor: (color: string) => void;
  sort: string;
  onChangeSort: (s: string) => void;
};

export default function FilterPanel({ colors, selectedColors, onToggleColor, sort, onChangeSort }: Props) {
  return (
    <div className="p-4 border-b bg-white">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <label className="text-sm">Sort by:</label>
          <select value={sort} onChange={(e) => onChangeSort(e.target.value)} className="border rounded px-2 py-1 text-sm">
            <option value="">Default</option>
            <option value="name_asc">Name ↑</option>
            <option value="name_desc">Name ↓</option>
            <option value="price_asc">Price ↑</option>
            <option value="price_desc">Price ↓</option>
            <option value="popularity_desc">Popularity ↓</option>
            <option value="popularity_asc">Popularity ↑</option>
          </select>
        </div>

        <div>
          <span className="text-sm mr-2">Colors:</span>
          <div className="inline-flex items-center gap-2">
            {colors.map((c) => {
              const active = selectedColors.includes(c);
              return (
                <button key={c} onClick={() => onToggleColor(c)} aria-pressed={active} title={c}
                  className={`w-6 h-6 rounded-full border ${active ? "ring-2 ring-offset-1" : ""}`} style={{ backgroundColor: c }}>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
