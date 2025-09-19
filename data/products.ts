// src/data/products.ts
import { Product } from "../types";

const products: Product[] = [
  { id: "p1", name: "Aero Running Shoes", price: 4999, discountPrice: 2999, discountPercent: 40, ratingValue: 4.5, ratingCount: 124, isHot: true, colors: ["#F87171", "#60A5FA", "#34D399"], category: "Shoes", imageUrl: "https://picsum.photos/seed/p1/800/600" },
  { id: "p2", name: "Urban Leather Jacket", price: 7999, discountPrice: 5599, discountPercent: 30, ratingValue: 4.7, ratingCount: 87, isHot: true, colors: ["#111827", "#9CA3AF"], category: "Jackets", imageUrl: "https://picsum.photos/seed/p2/800/600" },
  { id: "p3", name: "Comfy Cotton Tee", price: 699, discountPrice: 499, discountPercent: 28, ratingValue: 4.2, ratingCount: 311, isHot: false, colors: ["#FBBF24", "#60A5FA", "#34D399"], category: "Tops", imageUrl: "https://picsum.photos/seed/p3/800/600" },
  { id: "p4", name: "Classic Watch", price: 12999, discountPrice: 9999, discountPercent: 23, ratingValue: 4.8, ratingCount: 42, isHot: false, colors: ["#111827", "#F87171"], category: "Accessories", imageUrl: "https://picsum.photos/seed/p4/800/600" },
  { id: "p5", name: "Trail Backpack 30L", price: 3499, discountPrice: 2499, discountPercent: 29, ratingValue: 4.4, ratingCount: 90, isHot: true, colors: ["#60A5FA", "#34D399", "#FBBF24"], category: "Bags", imageUrl: "https://picsum.photos/seed/p5/800/600" },
  { id: "p6", name: "Slim Fit Jeans", price: 1999, discountPrice: 1499, discountPercent: 25, ratingValue: 4.1, ratingCount: 211, isHot: false, colors: ["#3B82F6", "#374151"], category: "Bottoms", imageUrl: "https://picsum.photos/seed/p6/800/600" },
  { id: "p7", name: "Yoga Mat Pro", price: 1299, discountPrice: 999, discountPercent: 23, ratingValue: 4.0, ratingCount: 56, isHot: false, colors: ["#34D399", "#60A5FA"], category: "Fitness", imageUrl: "https://picsum.photos/seed/p7/800/600" },
  { id: "p8", name: "Wireless Earbuds", price: 5999, discountPrice: 3999, discountPercent: 33, ratingValue: 4.6, ratingCount: 320, isHot: true, colors: ["#111827", "#9CA3AF"], category: "Electronics", imageUrl: "https://picsum.photos/seed/p8/800/600" },
  { id: "p9", name: "Thermal Jacket", price: 3999, discountPrice: 2799, discountPercent: 30, ratingValue: 4.3, ratingCount: 72, isHot: false, colors: ["#374151", "#F87171"], category: "Jackets", imageUrl: "https://picsum.photos/seed/p9/800/600" },
  { id: "p10", name: "Canvas Sneakers", price: 2499, discountPrice: 1799, discountPercent: 28, ratingValue: 4.2, ratingCount: 140, isHot: true, colors: ["#FBBF24", "#F87171"], category: "Shoes", imageUrl: "https://picsum.photos/seed/p10/800/600" },
  { id: "p11", name: "Classic Polo", price: 1199, discountPrice: 899, discountPercent: 25, ratingValue: 4.1, ratingCount: 68, isHot: false, colors: ["#60A5FA", "#FBBF24"], category: "Tops", imageUrl: "https://picsum.photos/seed/p11/800/600" },
  { id: "p12", name: "Laptop Sleeve 13\"", price: 999, discountPrice: 799, discountPercent: 20, ratingValue: 4.4, ratingCount: 32, isHot: false, colors: ["#111827", "#9CA3AF"], category: "Accessories", imageUrl: "https://picsum.photos/seed/p12/800/600" },
  { id: "p13", name: "Sports Shorts", price: 899, discountPrice: 599, discountPercent: 33, ratingValue: 4.0, ratingCount: 85, isHot: false, colors: ["#34D399", "#3B82F6"], category: "Bottoms", imageUrl: "https://picsum.photos/seed/p13/800/600" },
  { id: "p14", name: "Insulated Bottle 1L", price: 699, discountPrice: 499, discountPercent: 28, ratingValue: 4.5, ratingCount: 205, isHot: true, colors: ["#60A5FA", "#FBBF24"], category: "Home", imageUrl: "https://picsum.photos/seed/p14/800/600" },
  { id: "p15", name: "Running Socks (3pk)", price: 399, discountPrice: 299, discountPercent: 25, ratingValue: 4.2, ratingCount: 44, isHot: false, colors: ["#111827", "#F87171"], category: "Accessories", imageUrl: "https://picsum.photos/seed/p15/800/600" },
  { id: "p16", name: "Cycling Helmet", price: 2499, discountPrice: 1999, discountPercent: 20, ratingValue: 4.3, ratingCount: 65, isHot: false, colors: ["#34D399", "#3B82F6"], category: "Fitness", imageUrl: "https://picsum.photos/seed/p16/800/600" },
  { id: "p17", name: "Beige Chinos", price: 2199, discountPrice: 1699, discountPercent: 23, ratingValue: 4.1, ratingCount: 95, isHot: false, colors: ["#F3F4F6", "#9CA3AF"], category: "Bottoms", imageUrl: "https://picsum.photos/seed/p17/800/600" },
  { id: "p18", name: "Hooded Sweatshirt", price: 2999, discountPrice: 1999, discountPercent: 33, ratingValue: 4.6, ratingCount: 150, isHot: true, colors: ["#111827", "#FBBF24"], category: "Tops", imageUrl: "https://picsum.photos/seed/p18/800/600" },
  { id: "p19", name: "Smartphone Case", price: 499, discountPrice: 299, discountPercent: 40, ratingValue: 4.2, ratingCount: 410, isHot: false, colors: ["#F87171", "#60A5FA"], category: "Electronics", imageUrl: "https://picsum.photos/seed/p19/800/600" },
  { id: "p20", name: "Minimalist Wallet", price: 1299, discountPrice: 999, discountPercent: 23, ratingValue: 4.5, ratingCount: 58, isHot: false, colors: ["#111827", "#9CA3AF"], category: "Accessories", imageUrl: "https://picsum.photos/seed/p20/800/600" },
  { id: "p21", name: "Flip Flop Sandals", price: 499, discountPrice: 349, discountPercent: 30, ratingValue: 3.9, ratingCount: 29, isHot: false, colors: ["#FBBF24", "#34D399"], category: "Shoes", imageUrl: "https://picsum.photos/seed/p21/800/600" },
  { id: "p22", name: "Bluetooth Speaker", price: 3499, discountPrice: 2499, discountPercent: 29, ratingValue: 4.4, ratingCount: 202, isHot: true, colors: ["#111827", "#60A5FA"], category: "Electronics", imageUrl: "https://picsum.photos/seed/p22/800/600" },
  { id: "p23", name: "Denim Jacket", price: 4999, discountPrice: 3499, discountPercent: 30, ratingValue: 4.3, ratingCount: 120, isHot: true, colors: ["#3B82F6", "#111827"], category: "Jackets", imageUrl: "https://picsum.photos/seed/p23/800/600" },
  { id: "p24", name: "Sleep Mask", price: 299, discountPrice: 199, discountPercent: 33, ratingValue: 4.0, ratingCount: 11, isHot: false, colors: ["#111827", "#FBBF24"], category: "Home", imageUrl: "https://picsum.photos/seed/p24/800/600" }
];

export default products;
