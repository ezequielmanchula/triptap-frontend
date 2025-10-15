"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";

import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Inicio", href: "/" },                  
    { name: "Sobre Nosotros", href: "/about-us" },
    { name: "Reservas", href: "/reservations" }
  ];

  return (
    <header className="bg-transparent shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-8">
        <Image 
          src="/images/Logo.png" 
          alt="Logo"
          width={140}
          height={44} 
          className="h-auto w-auto"
        /> 

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#ED7A1C] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
                href={"/login"}
                className="bg-[#ED7A1C] text-white py-[10px] px-[28px] rounded-lg hover:bg-[#d96c17] transition-colors duration-300"
            >
              Ingresar 
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2 rounded hover:bg-[#ED7A1C] transition"
          onClick={toggleMenu}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-6 p-5 bg-gray-200 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
                href={"/login"}
                className="bg-[#ED7A1C] text-white py-[10px] px-[28px] rounded-lg hover:bg-[#d96c17] transition-colors duration-300"
            >
              Ingresar 
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
