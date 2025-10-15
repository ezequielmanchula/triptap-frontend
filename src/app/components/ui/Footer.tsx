import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
  { icon: FaInstagram, link: 'https://www.instagram.com' },
  { icon: FaYoutube, link: 'https://www.youtube.com' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com' },
  { icon: FaTwitter, link: 'https://twitter.com' },
  ];

  const navLinks = [
    { name: "Inicio", href: "/" },                  
    { name: "Sobre Nosotros", href: "/about-us" },
    { name: "Reservas", href: "/reservations" }
  ];

  return (
    <footer className="bg-white text-gray-700 py-9 px-4">
      {/* Mobile: todo en columna */}
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
            <Image 
              src="/images/Logo.png" 
              alt="Logo"
              width={140}
              height={44} 
              className="h-auto w-auto"
            /> 
          </div>
          <div className="flex gap-3 text-gray-500">
            <div className="flex gap-4">
              {socialIcons.map(({ icon: IconComponent, link }, index) => (
              <a 
                key={index} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1E1E1E] hover:text-gray-600 transition-colors">
                <IconComponent size={24} />
              </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-orange-500 font-semibold">Recursos</h3>
          <ul className="flex flex-col gap-1 text-gray-600 text-sm">
            {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#ED7A1C] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-orange-500 font-semibold">Links</h3>
          <ul className="flex flex-col gap-1 text-gray-600 text-sm">
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Políticas de cancelación</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Privacidad</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-orange-500 font-semibold">Contacto</h3>
          <ul className="flex flex-col gap-1 text-gray-600 text-sm">
            <li>📍 Cañuelas, Buenos Aires, Argentina</li>
            <li>✉️ contacto@triptap.com.ar</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-xs">
        © 2025 TRIPTAP. Todos los derechos reservados.
      </div>
    </footer>
  )
}
