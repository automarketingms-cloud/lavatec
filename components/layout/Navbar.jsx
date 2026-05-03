"use client";
import { useState } from "react";
import Image from "next/image";
import ScrollLink from "@/components/ScrollLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b text-(--blue) bg-black/90 backdrop-blur-md p-4 fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/log0.jpeg"
          alt="Logo Lavatec"
          width={140}
          height={80}
          className="h-16 w-auto border border-(--blue) p-1"
          priority
        />

        {/* Botón hamburguesa animado */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`block h-0.5 w-7 bg-(--blue) transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-(--blue) transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-(--blue) transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex gap-8 text-lg">
          <ScrollLink href="/#services">Servicios</ScrollLink>
          <ScrollLink href="/#gallery">Galería</ScrollLink>
          <ScrollLink href="/#contact">Contacto</ScrollLink>
        </div>
      </div>

      {/* Menú móvil con animación */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 text-center text-lg bg-black/95 py-6 rounded-lg border border-(--blue)">
          <ScrollLink href="/#services" onClick={() => setOpen(false)}>
            Servicios
          </ScrollLink>
          <ScrollLink href="/#gallery" onClick={() => setOpen(false)}>
            Galería
          </ScrollLink>
          <ScrollLink href="/#contact" onClick={() => setOpen(false)}>
            Contacto
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
