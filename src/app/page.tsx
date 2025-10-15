"use client";

import SearchForm from "./components/common/SearchForm";
import Hero from "./components/ui/Hero";
import InfoSection from "./components/ui/InfoSection";
import Panel from "./components/ui/Panel";
import Steps from "./components/ui/Steps";


export default function Home() {
  return (
    <>
      <div className="p-4">
        <Hero />
        <SearchForm />
      </div>
      <Steps />
      <InfoSection />
      <Panel />
    </>
    
  );
}
