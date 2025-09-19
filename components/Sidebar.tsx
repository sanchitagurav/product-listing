// src/components/Sidebar.tsx
"use client";
import React, { useState } from "react";

type Props = {
  categories: string[];
  selectedCategory?: string | null;
  onSelectCategory: (cat: string | null) => void;
};

export default function Sidebar({ categories, selectedCategory, onSelectCategory }: Props) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (cat: string) => {
    setOpen((p) => ({ ...p, [cat]: !p[cat] }));
  };

  return (
    <aside className="w-full md:w-64 lg:w-72 p-4 border-r">
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="border rounded p-2">
              <button aria-expanded={!!open[cat]} onClick={() => toggle(cat)} className="w-full flex items-center justify-between">
                <span className={`text-sm ${cat === selectedCategory ? "text-blue-600 font-semibold" : ""}`}>{cat}</span>
                <span className="text-xs text-gray-500">{open[cat] ? "–" : "+"}</span>
              </button>

              <div className={`mt-2 ${open[cat] ? "block" : "hidden"}`}>
                <ul className="text-sm text-gray-600 space-y-1">
                  {[1, 2, 3].map((i) => (
                    <li key={i}>
                      <button
                        onClick={() => onSelectCategory(cat === selectedCategory ? null : cat)}
                        className="w-full text-left text-xs"
                      >
                        {cat} item {i}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
