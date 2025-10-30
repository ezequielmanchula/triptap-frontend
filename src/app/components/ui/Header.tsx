"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { useAuth } from "@app/context/AuthContext";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about-us" },
    { name: "Reservas", href: "/reservations" },
  ];

  return (
    <header className="bg-transparent relative">
      <nav className="container max-w-[70.25rem] mx-auto flex items-center justify-between p-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="Noto font-normal text-sm text-[#171717] hover:text-[#ED7A1C] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Botón o avatar según el estado */}
          
            {!isLoggedIn ? (
            <li>
              <Link
                href="/login"
                className="text-white bg-[#ED7A1C] py-2 px-5 rounded-lg hover:bg-[#d96c17]"
              >
                Ingresar
              </Link>
            </li>
          ) : (
            <li className="relative">
              <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 cursor-pointer">
                <Image src="https://ui-avatars.com/api/?name=Laura+G&background=random" alt="Perfil" width={38} height={38} className="rounded-full" />
                <Icon icon="mdi:chevron-down" width="20" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-40 border z-200">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-300 rounded-t-lg cursor-pointer transition-colors">Ir a mi perfil</Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-red-400 rounded-b-lg cursor-pointer transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Hamburger Menu (mobile) */}
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
                className="block hover:text-[#ED7A1C] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li>
              <Link
                href="/login"
                className="block text-center text-white bg-[#ED7A1C] py-3 rounded-lg hover:bg-[#d96c17] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Ingresar
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  href="/profile"
                  className="block text-center py-3 hover:text-[#ED7A1C]"
                  onClick={() => setIsOpen(false)}
                >
                  Ir a mi perfil
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="w-full text-center py-3 text-red-500 hover:bg-gray-100 rounded-lg"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </header>
  );
}
