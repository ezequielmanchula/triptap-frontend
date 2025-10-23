"use client"
import React from 'react';
import Image from 'next/image';

import heroBus from "@/assets/images/headAboutUs.jpeg";
import panel from "@/assets/images/panelAboutUs.jpeg";

import { Step }  from "@/utils/types";
import { FaMedal, FaStar, FaLock, FaSmile } from "react-icons/fa"; 
import { StepCard } from '@/app/components/common/StepCard';
import Link from 'next/link';
import { ReviewSection } from '@app/components/common/Review';
import Panel from '@/app/components/common/Panel';


const steps: Step[] = [
  {
    icon: <FaMedal size={24} color="#ED7A1C" />,
    title: "Compromiso",
    description: "Cada viaje importa, y cada pasajero también."
  },
  {
    icon: <FaStar size={24} color="#ED7A1C" />,
    title: "Innovación",
    description: "Apostamos a la tecnología para mejorar cada detalle del recorrido."
  },
  {
    icon: <FaLock size={24} color="#ED7A1C" />,
    title: "Seguridad",
    description: "Nuestros conductores y unidades cumplen los más altos estándares."
  },
  {
    icon: <FaSmile size={24} color="#ED7A1C" />,
    title: "Cercanía",
    description: "Estamos siempre disponibles para ayudarte, en cada etapa del viaje."
  }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <header className="relative h-[600px] flex items-center justify-start text-white overflow-hidden">
                <Image
                    src={heroBus} 
                    alt="Autobús de Triptap viajando"
                    fill
                    className="object-cover"
                    priority
                />
          
                <div className="absolute inset-0 bg-black opacity-30"></div> 
                
                <div className="relative m-10 md:m-20  xl:mx-35 p-8 pt-20 z-10">
                    <h1 className="Rubik text-3xl md:text-3xl xl:text-5xl font-bold max-w-xl leading-tight">Conectate con tu destino de una manera ágil, sencilla y confiable</h1>
                    <p className="Rubik text-lg md:text-lg xl:text-xl max-w-2xl mt-4 mb-8 leading-8">
                        Nacimos con una idea clara: facilitar los trayectos diarios entre<br />
                        Cañuelas y Capital Federal, ofreciendo una forma moderna, rápida y<br />
                        segura de reservar pasajes.
                    </p>
        
                    <button>
                        <Link
                            href="./reservations"
                            className="bg-[#ED7A1C] hover:bg-[#d96c17] Noto text-white font-normal text-base py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg cursor-pointer">
                            Reservar ahora
                        </Link>
                    </button>
                </div>
            </header>
            <section className="py-20 bg-white">
                <div className="xl:mx-20 px-8">
                    <div className="flex flex-col justify-center md:flex-row mb-12 items-start md:space-x-12 px-10 min-h-[320px]">
                        <h2 className=" Rubik font-normal text-3xl md:text-3xl xl:text-5xl text-[#171717] xl:leading-[64px]">Más que un viaje, una  conexión entre  ciudades.</h2>
                        <p className="Rubik text-[#171717] font-normal text-base leading-[32px] mt-4 md:mt-0 max-w-lg">
                            Nacimos con un propósito claro: hacer que viajar en micro vuelva a ser 
                            una experiencia cómoda, accesible y humana. 
                            Desde nuestros primeros recorridos, conectamos a miles de pasajeros 
                            que buscan puntualidad, seguridad y una atención cercana. 
                            Hoy, TRIPTAP combina la tradición del transporte regional con la tecnología
                            de una plataforma moderna y fácil de usar.
                        </p>
                    </div>

                    <div className="text-center mb-12 w-full">
                        <h2 className="Rubik text-4xl font-semibold text-[#171717] mb-10">Una experiencia simple y transparente de principio a fin.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {steps.map((step, index) => (
                                <StepCard
                                    key={index}
                                    icon={step.icon}
                                    title={step.title}
                                    description={step.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Panel
                image={panel.src} 
                title="¿Listo para viajar con nosotros?"
                description="Explorá nuestros horarios, elegí tu asiento y descubrí lo simple que es viajar con TRIPTAP."
                buttonText="Ver horarios"
            />
            <ReviewSection  />
        </main>
    );
}