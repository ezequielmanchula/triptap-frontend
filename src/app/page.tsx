"use client";

import Hero from "./components/ui/Hero";
import InfoSection from "./components/ui/InfoSection";
import Panel from "./components/ui/Panel";
import Steps from "./components/ui/Steps";


export default function Home({}) {
  return (
    <>
      <Hero height="min-h-[780px]" />
      <Steps />
      <InfoSection />
      <Panel />
    </>
    
  );
}
