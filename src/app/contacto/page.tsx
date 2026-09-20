import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Maxymar Kiteschool",
  description:
    "Escribinos para reservar tu clase de kitesurf en Playa Malvín, Montevideo.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-6 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contacto"
            title="Coordinemos tu clase"
            subtitle="Contanos tu nivel y tu disponibilidad, y te respondemos con los mejores horarios según el viento en Playa Malvín."
          />
        </Container>
      </section>

      <section className="bg-white py-6 sm:py-20">
        <Container className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-ink-900/8 p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
