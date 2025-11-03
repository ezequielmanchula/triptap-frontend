"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TapiButton() {
  const telegramBotUrl = "https://t.me/tapi_ok_bot";

  const handleClick = () => {
    window.open(telegramBotUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative w-30 h-30 flex items-center justify-center cursor-pointer group"
        title="Chatear con Tapi en Telegram"
      >
        <Image 
          src="/images/TapiBtn.png" 
          alt="Chatear con Tapi" 
          width={100} 
          height={80} 
          className="rounded-full transition-all duration-300"
        />
        
        {/* Tooltip a la izquierda - distancia reducida */}
        <div className="Noto absolute top-1/2 right-full mr-2 transform -translate-y-1/2 bg-[#ED7A1C] text-white text-sm font-normal py-3 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
          <p>¡Hola! 👋 Soy Tapi.</p>
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-3 border-t-transparent border-b-3 border-b-transparent border-l-3 border-l-[#ED7A1C]"></div>
        </div>
      </motion.button>
    </div>
  );
}