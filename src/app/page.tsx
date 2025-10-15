"use client";

import SearchForm from "./components/common/SearchForm";
import Hero from "./components/ui/Hero";


export default function Home() {
  return (
    <div className="p-4">
      <Hero />
      <SearchForm />
    </div>
  );
}
