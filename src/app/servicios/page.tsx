import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { SERVICES } from "@/lib/services";

const ICON_STYLES = [
  { text: "text-brand-blue-600" },
  { text: "text-sunset-orange-600" },
  { text: "text-brand-yellow-700" },
  { text: "text-sunset-red-600" },
];

export const metadata: Metadata = {
  title: "Servicios — Maxymar Kiteschool",
  description:
    "Clases individuales, grupales, cursos de iniciación y alquiler de equipos de kitesurf en Playa Malvin, Montevideo.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-6 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title="Encontrá la forma perfecta de aprender"
            subtitle="Desde tu primera clase hasta salir a navegar por tu cuenta: tenemos una propuesta para cada momento de tu progresión en Playa Malvin."
          />
        </Container>
      </section>

      <section className="bg-white py-6 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES.map((service, index) => {
              const style = ICON_STYLES[index % ICON_STYLES.length];
              return (
              <div
                key={service.slug}
                id={service.slug}
                className="flex flex-col rounded-3xl border border-ink-900/8 p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <div className="flex items-center gap-3">
                  <service.icon
                    className={`h-8 w-8 shrink-0 ${style.text}`}
                  />
                  <h2 className="font-heading text-2xl font-bold text-ink-950">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-3 text-ink-600">{service.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-sm text-ink-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button
                    href="/contacto"
                    variant="secondary"
                    className="!px-5 !py-2.5 text-sm"
                  >
                    Consultar disponibilidad
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-yellow-50 py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-ink-950 px-8 py-14 text-center sm:px-16">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              ¿No sabés cuál elegir?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              Contanos tu experiencia previa y tus objetivos, y te recomendamos
              el mejor servicio para empezar.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contacto" variant="primary">
                Hablar con la escuela
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
