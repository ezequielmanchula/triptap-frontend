import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  const socialIcons = [
    { icon: FaInstagram, link: 'https://www.instagram.com', label: 'Instagram' },
    { icon: FaYoutube, link: 'https://www.youtube.com', label: 'YouTube' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://twitter.com', label: 'Twitter' },
  ];

  const navLinks = [
    { name: "Inicio", href: "/" },                  
    { name: "Sobre Nosotros", href: "/about-us" },
    { name: "Reservas", href: "/reservations" }
  ];

  const sections = [
    {
      title: "Recursos",
      links: navLinks.map(l => ({ name: l.name, href: l.href })),
      type: "link",
    },
    {
      title: "Links",
      links: [
        { name: "Preguntas Frecuentes", href: "#" },
        { name: "Políticas de cancelación", href: "#" },
        { name: "Términos y condiciones", href: "#" },
        { name: "Privacidad", href: "#" },
      ],
      type: "link",
    },
    {
      title: "Contacto",
      links: [
        { name: "📍 Cañuelas, Buenos Aires, Argentina" },
        { name: "✉️ contacto@triptap.com.ar", href: "mailto:contacto@triptap.com.ar" },
      ],
      type: "text",
    },
  ];

  return (
    <footer className="bg-white text-gray-700 py-9 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start lg:justify-between md:items-baseline lg:items-baseline gap-8">
        
        {/* Logo y redes sociales */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
            <Image 
              src="/images/Logo.png" 
              alt="Logo"
              width={140}
              height={44} 
              className="h-auto w-auto"
              priority
            /> 
          </div>
          <div className="flex gap-4 text-[#1E1E1E]">
            {socialIcons.map(({ icon: IconComponent, link, label }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#ED7A1C] hover:scale-110 duration-300"
              >
                <IconComponent size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Secciones mapeadas */}
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col items-start gap-2">
            <h3 className="text-orange-500 font-semibold">{section.title}</h3>
            <ul className="flex flex-col gap-1 text-[#1E1E1E] text-base">
              {section.links.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className={`transition-colors duration-300 ${
                        section.type === "link"
                          ? "hover:text-[#ED7A1C]"
                          : ""
                      }`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span>{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Footer bottom */}
      <div className="mt-8 text-center text-gray-400 text-xs">
        © 2025 TRIPTAP. Todos los derechos reservados.
      </div>
    </footer>
  );
}
