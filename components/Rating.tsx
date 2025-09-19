// src/components/Rating.tsx
"use client";
import React from "react";

export default function Rating({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill={i <= Math.round(value) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" aria-hidden>
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.362 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L11.05 2.927z"></path>
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500">({count})</span>
    </div>
  );
}
