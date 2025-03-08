"use client";

import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  rating?: number;
}

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductGrid;
