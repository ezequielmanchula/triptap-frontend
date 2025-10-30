// src/components/UserProfile.tsx (Página de Perfil de Usuario - Versión Simplificada)

import React from 'react';
import Head from 'next/head'; 
import { ArrowLeftIcon, UserCircleIcon, HistoryIcon, MailIcon, PhoneIcon, UserIcon, MapPinIcon, ClockIcon } from 'lucide-react'; 

// --- MOCK DATA (Datos de ejemplo) ---
interface User {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    // La data de reservas ya no necesita el campo 'estado' para el renderizado
    reservas: { id: number; fecha: string; origen: string; destino: string; hora: string }[]; 
}

const mockUser: User = {
    id: "user-12345",
    nombre: "Juan",
    apellido: "Perez",
    email: "juan.perez@triptap.com",
    telefono: "+54 9 11 1234 5678",
    reservas: [
        { id: 1, fecha: '2025-10-25', origen: 'Cañuelas', destino: 'Capital', hora: '14:30' },
        { id: 2, fecha: '2025-10-10', origen: 'Capital', destino: 'Cañuelas', hora: '08:00' },
        { id: 3, fecha: '2025-09-01', origen: 'Cañuelas', destino: 'Capital', hora: '19:00' },
    ]
};
// ------------------------------------------------------------

const UserProfile: React.FC = () => {
    const user = mockUser; // Usamos mockUser para la demostración

    return (
        <>
            <Head>
                <title>Mi Perfil | Triptap</title>
            </Head>

            <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
                {/* Contenedor Principal */}
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10">
                    
                    {/* Botón de Volver */}
                    <button className="flex items-center text-orange-500 hover:text-orange-700 mb-6 font-semibold">
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Volver a Reservas
                    </button>

                    {/* Encabezado del Perfil */}
                    <div className="flex items-center border-b pb-4 mb-6">
                        <UserCircleIcon className="w-12 h-12 text-gray-700 mr-4" />
                        <h1 className="text-3xl font-bold text-gray-800">
                            Hola, {user.nombre}
                        </h1>
                    </div>

                    {/* SECCIÓN 1: Datos Personales y Contacto */}
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
                        Datos Personales y Contacto
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        
                        {/* Tarjeta de Nombre */}
                        <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                            <UserIcon className="w-5 h-5 text-orange-500 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Nombre</p>
                                <p className="font-medium text-gray-900">{user.nombre}</p>
                            </div>
                        </div>

                        {/* Tarjeta de Apellido */}
                        <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                            <UserIcon className="w-5 h-5 text-orange-500 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Apellido</p>
                                <p className="font-medium text-gray-900">{user.apellido}</p>
                            </div>
                        </div>

                        {/* Tarjeta de Email */}
                        <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                            <MailIcon className="w-5 h-5 text-orange-500 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-900">{user.email}</p>
                            </div>
                        </div>

                        {/* Tarjeta de Teléfono */}
                        <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-sm">
                            <PhoneIcon className="w-5 h-5 text-orange-500 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Teléfono</p>
                                <p className="font-medium text-gray-900">{user.telefono}</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Botón para editar (Si se implementa en el futuro) */}
                    <div className="text-right mb-8">
                        <button 
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-150 shadow-md"
                        >
                            Editar Información
                        </button>
                    </div>

                    {/* SECCIÓN 2: Historial de Reservas SIMPLIFICADO */}
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
                        <HistoryIcon className="w-5 h-5 inline mr-2" />
                        Historial de Reservas
                    </h2>
                    
                    <div className="space-y-4">
                        {user.reservas.map((reserva) => (
                            <div 
                                key={reserva.id} 
                                // Estilo base simple sin colores condicionales
                                className={`p-4 rounded-lg shadow-sm border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-150`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="font-semibold text-lg text-gray-800">
                                        <MapPinIcon className="w-4 h-4 inline mr-2 text-orange-500" />
                                        {reserva.origen} → {reserva.destino}
                                    </div>
                                    <p className="text-sm text-gray-600">ID: #{reserva.id}</p>
                                </div>
                                
                                <p className="text-sm text-gray-700 mt-1 flex items-center">
                                    <ClockIcon className="w-4 h-4 inline mr-2 text-gray-500" />
                                    {reserva.fecha} - {reserva.hora}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserProfile;