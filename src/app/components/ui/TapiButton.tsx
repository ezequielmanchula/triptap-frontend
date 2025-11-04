"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TapiButton() {
  const telegramBotUrl = "https://t.me/tapi_ok_bot";
  const [showReminder, setShowReminder] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Verificar si ya interactuó al cargar el componente
  useEffect(() => {
    const interacted = localStorage.getItem("tapiChatInteracted");
    if (interacted === "true") {
      setHasInteracted(true);
    }
  }, []);

  // Mostrar recordatorio después de 1 minuto si no ha interactuado
  useEffect(() => {
    if (hasInteracted) return;

    const timer = setTimeout(() => {
      setShowReminder(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClick = () => {
    // Marcar como interactuado en localStorage
    localStorage.setItem("tapiChatInteracted", "true");
    setHasInteracted(true);
    setShowReminder(false);
    
    window.open(telegramBotUrl, "_blank", "noopener,noreferrer");
  };

  const handleCloseReminder = () => {
    setShowReminder(false);
    // guardar que cerró el recordatorio para no mostrarlo nuevamente
    localStorage.setItem("tapiReminderClosed", "true");
  };

  // Verificar si ya cerró el recordatorio anteriormente
  useEffect(() => {
    const reminderClosed = localStorage.getItem("tapiReminderClosed");
    if (reminderClosed === "true") {
      setShowReminder(false);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Recordatorio */}
      <AnimatePresence>
        {showReminder && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200"
          >
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
            <div className="flex items-start justify-between gap-3 w-40">  
              <div className="flex-col min-w-0">
                <h3 className="Rubik font-medium text-gray-900 text-sm mb-1">¿Necesitas ayuda?</h3> 
                <div>
                  <button
                    onClick={handleClick}
                    className="bg-[#ED7A1C] hover:bg-[#d96a15] Noto text-white text-xs font-medium py-1.5 px-8 rounded-lg transition-colors duration-200 flex items-center gap-1 cursor-pointer"><span>¡Charlemos!</span>
                    </button>
                </div>
              </div>
              <button
                onClick={handleCloseReminder}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative w-30 h-30 flex items-center justify-center cursor-pointer group"
        title="Chatear con Tapi en Telegram">
        <Image 
          src="/images/TapiBtn.png" 
          alt="Chatear con Tapi" 
          width={100} 
          height={80} 
          className="rounded-full transition-all duration-300"
        />
        
        {/* Tooltip a la izquierda */}
        <div className="Noto absolute top-1/2 right-full mr-2 transform -translate-y-1/2 bg-[#ED7A1C] text-white text-sm font-normal py-3 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
          <p>¡Hola! 👋 Soy Tapi.</p>
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-3 border-t-transparent border-b-3 border-b-transparent border-l-3 border-l-[#ED7A1C]"></div>
        </div>
      </motion.button>
    </div>
  );
}