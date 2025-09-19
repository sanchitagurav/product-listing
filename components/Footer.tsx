// src/components/Footer.tsx
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">
        <div>© {new Date().getFullYear()} SoftDef. All rights reserved.</div>
        <div className="space-x-4">
          <a className="hover:underline" href="#">Terms</a>
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Help</a>
        </div>
      </div>
    </footer>
  );
}
