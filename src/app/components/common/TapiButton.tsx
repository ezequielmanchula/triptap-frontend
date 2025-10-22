
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import Image from "next/image";

export default function TapiButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! 👋 Soy Tapi, tu asistente virtual de TRIPTAP. ¿En qué puedo ayudarte hoy? 🚌",
    },
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll automático al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simular respuesta del bot
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Recibí tu mensaje 😊. En breve te ayudo con eso.",
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat flotante */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="relative w-[340px] md:w-[400px] h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image src="/images/TapiBtn.png" alt="Tapi" width={50} height={50} />
                <span className="Noto text-base font-medium text-gray-700">Tapi Asistente Virtual</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition cursor-pointer "
              >
                <IoClose size={20} />
              </button>
            </div>

            {/* Contenido del chat */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((msg, index) =>
                msg.sender === "bot" ? (
                  <div
                    key={index}
                    className="Noto font-normal text-sm self-start bg-[#ED7A1C] text-white px-4 py-3 rounded-xl rounded-bl-none shadow-sm max-w-[85%]">
                    {msg.text}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="Noto font-normal text-sm self-end bg-[#E5E5E5] text-[#333333] px-4 py-3 rounded-xl rounded-br-none shadow-sm max-w-[85%]">
                    {msg.text}
                  </div>
                )
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input del chat */}
            <div className="p-3 bg-[#F5F5F5] rounded-2xl flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribí tu mensaje aquí..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="Title-Small flex-1 p-2 text-sm rounded-lg border border-none outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-[#ED7A1C] hover:bg-orange-500 text-white p-3 rounded-full transition cursor-pointer">
                <LuSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-30 h-30 flex items-center justify-center cursor-pointer"
      >
        <Image src="/images/TapiBtn.png" alt="Abrir chat" width={100} height={80} className="rounded-full" />
      </motion.button>
    </div>
  );
}

