// src/components/Badge.tsx
"use client";
import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full">{children}</span>;
}
