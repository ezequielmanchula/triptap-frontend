"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Reservas", href: "/reservations" },
    { name: "Sobre Nosotros", href: "/about-us" },
    { name: "Login", href: "/login" },
    { name: "Registro", href: "/register" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">TripTap</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800 transition"
          onClick={toggleMenu}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 p-4 bg-gray-800 md:hidden">
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
        </ul>
      )}
    </header>
  );
}
