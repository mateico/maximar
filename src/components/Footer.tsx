import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";
import { PHONE_NUMBER_DISPLAY, WHATSAPP_LINK } from "@/lib/contact";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 text-ink-200">
      <Container className="grid gap-10 pt-6 sm:pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5"
            aria-label="Maxymar Kiteschool — inicio"
          >
            <Image
              src="/icon_on_dark.png"
              alt="Maxymar Kiteschool"
              width={52}
              height={52}
              className="h-13 w-13"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
            Escuela de kitesurf en Playa Malvín, Montevideo. Clases para todos
            los niveles, todo el año.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com/maxymar.uy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Maxymar Kiteschool"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand-yellow-500 hover:text-ink-950"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Maxymar Kiteschool"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand-yellow-500 hover:text-ink-950"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Maxymar Kiteschool"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand-yellow-500 hover:text-ink-950"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink-400 transition-colors hover:text-brand-yellow-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-400">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-blue-400" />
              Playa Malvín, Montevideo, Uruguay
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4.5 w-4.5 shrink-0 text-brand-blue-400" />
              <a
                href="mailto:hola@maxymar.uy"
                className="transition-colors hover:text-brand-yellow-400"
              >
                hola@maxymar.uy
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-brand-blue-400" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-yellow-400"
              >
                {PHONE_NUMBER_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Condiciones de hoy
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            ¿Viento a favor? Escribinos y coordinamos tu clase en Playa Malvín
            cuando las condiciones estén ideales.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-500 sm:flex-row">
          <p>© {year} Maxymar Kiteschool. Todos los derechos reservados.</p>
          <p>Hecho con viento y pasión en Montevideo.</p>
        </Container>
      </div>
    </footer>
  );
}
