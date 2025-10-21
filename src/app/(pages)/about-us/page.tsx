
import React from 'react';
import Image from 'next/image';

import heroBus from "@/assets/images/headAboutUs.jpeg";
import panel from "@/assets/images/panelAboutUs.jpeg";


const ValueCard = ({ title, icon, description }) => (
    <div className="flex flex-col items-center p-4 text-center">
   
        <div className="text-4xl text-orange-500 mb-3">{icon}</div> 
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);

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
                
                <div className="relative max-w-7xl mx-auto p-8 pt-20 z-10">
                    <h1 className="text-6xl font-Rubik max-w-xl leading-tight">
                        Conectate con tu destino de una manera ágil, sencilla y confiable
                    </h1>
                    <p className="text-lg max-w-lg mt-4 mb-8">
                        Nacimos con una idea clara: facilitar los trayectos diarios entre Cañuelas y Capital Federal, ofreciendo una forma moderna, rápida y segura de reservar pasajes.
                    </p>
        
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-lg">
                        Reservar ahora
                    </button>
                </div>
            </header>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row mb-12 items-start md:space-x-12">
                        <h2 className="text-4xl font-Rubik text-gray-900 md:w-1/2">
                            Más que un viaje, una conexión entre ciudades.
                        </h2>
                        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2">
                            Creemos firmemente en que viajar debe ser una experiencia sin estrés y accesible para todos. Nuestra plataforma simplifica la compleja tarea de reservar, planificar y pagar tus trayectos, garantizando la tranquilidad desde el origen hasta el destino.
                        </p>
                    </div>

                    <div className="text-center mb-12">
                         <p className="text-xl font-semibold text-gray-700 mb-10">
                            Una experiencia simple y transparente de principio a fin.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <ValueCard title="Compromiso" icon="🤝" description="Lideramos con ejemplo, integridad y ética." />
                            <ValueCard title="Innovación" icon="✨" description="Respuestas a la altura de tu demanda, siempre." />
                            <ValueCard title="Seguridad" icon="🔒" description="Trayectos controlados, transparentes y confiables." />
                            <ValueCard title="Cercanía" icon="📍" description="Servicio personalizado y atento en todo momento." />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">

                <Image
                    src={panel} 
                    alt="Interior de autobús con pasajeros"
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

                <div className="relative text-center z-10 p-4">
                    <h2 className="text-4xl font-bold mb-4">
                        ¿Listo para viajar con nosotros?
                    </h2>
                    <p className="text-lg mb-8">
                        Explora nuestros destinos hoy, y descubre lo simple que es viajar con Triptap.
                    </p>
    
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-lg">
                        Ver destinos
                    </button>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        Lo que dicen nuestros pasajeros
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-6 border border-gray-200 rounded-xl shadow-sm">
                                <div className="text-yellow-500 text-xl mb-3">
                                    ★★★★★
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    ¡Excelente servicio!
                                </h4>
                                <p className="text-gray-600 text-sm italic">
                                    "Todo fue claro y la reserva, muy simple. Lo recomiendo 100%."
                                </p>
                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                                    <span>Ricardo M.</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}