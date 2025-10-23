"use client";

import Hero from "./components/ui/Hero";
import InfoSection from "./components/ui/InfoSection";
import Panel from "./components/common/Panel";
import Steps from "./components/ui/Steps";
import panelImg from "@/assets/images/panelImg.jpeg";
import { Review as ReviewType } from '@/utils/types';


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
        buttonText="Reservar ahora"
      />
    </>
    
  );
}
