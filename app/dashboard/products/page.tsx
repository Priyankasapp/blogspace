"use client";

import { useState } from "react";
import { CURATED_PRODUCTS, Product } from "@/public/assets";
import { ProductCreate } from "../components/ProductCreate";
import { ProductList } from "../components/ProductList";


export default function DashboardProductsPage() {
  const [products] = useState<Product[]>(CURATED_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [currentView, setCurrentView] = useState<'list' | 'create'>('list');

  const handleSelectProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map((p) => p.id));
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1400px] mx-auto w-full font-sans px-4 sm:px-8 py-12 transition-all duration-200">
      {currentView === 'list' ? (
        <ProductList 
          products={products}
          filteredProducts={filteredProducts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedProducts={selectedProducts}
          handleSelectProduct={handleSelectProduct}
          handleSelectAll={handleSelectAll}
          onCreateClick={() => setCurrentView('create')}
        />
      ) : (
        <ProductCreate onBack={() => setCurrentView('list')} />
      )}
    </div>
  );
}