"use client";

import Hero from "./components/ui/Hero";
import InfoSection from "./components/ui/InfoSection";
import Panel from "./components/common/Panel";
import Steps from "./components/ui/Steps";
import panelImg from "@/assets/images/panelImg.webp";
import { ReviewSection } from "./components/common/Review";


export default function Home() {
  return (
    <>
      <Hero height="min-h-[780px]" />
      <Steps />
      <InfoSection />
      <Panel 
        image={panelImg.src} 
        title="¿Listo para tu próximo viaje?"
        description="Reservá tu asiento ahora y viajá sin complicaciones."
      />
      <ReviewSection />
    </>
    
  );
}
