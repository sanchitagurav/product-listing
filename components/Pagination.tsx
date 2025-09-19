// src/components/Pagination.tsx
"use client";
import React from "react";

export default function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button onClick={() => onChange(Math.max(1, page - 1))} className="px-3 py-1 border rounded" disabled={page === 1}>Prev</button>
      {pages.map(p => (
        <button key={p} onClick={() => onChange(p)} className={`px-3 py-1 border rounded ${p === page ? "bg-gray-900 text-white" : ""}`}>{p}</button>
      ))}
      <button onClick={() => onChange(Math.min(totalPages, page + 1))} className="px-3 py-1 border rounded" disabled={page === totalPages}>Next</button>
    </nav>
  );
}
