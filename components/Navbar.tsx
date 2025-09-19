// src/components/Navbar.tsx
"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-gray-900">SoftDef</div>
          <div className="text-sm text-gray-500">Product Listing</div>
        </div>

        <div className="flex items-center space-x-4">
          <input
            aria-label="Search"
            placeholder="Search products..."
            className="border rounded-md px-3 py-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="text-sm px-3 py-2 rounded-md border hover:bg-gray-50">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
