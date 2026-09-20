import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nosotros — Maxymar Kiteschool",
  description:
    "Conocé a Maximiliano Marenco, fundador e instructor principal de Maxymar Kiteschool en Playa Malvín, Montevideo.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-6 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nosotros"
            title="Nacimos en la costa de Montevideo"
            subtitle="Maxymar Kiteschool nace de las ganas de compartir el kitesurf en el spot que más queremos: Playa Malvín."
          />
        </Container>
      </section>

      <section className="bg-white py-6 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-950 sm:text-3xl">
              Maximiliano Marenco — Fundador e instructor principal
            </h2>
            <p className="mt-4 leading-relaxed text-ink-600">
              Guardavidas desde hace 20 años y técnico en natación,
              Maximiliano descubrió el kitesurf en 2016 en San José y, tras
              acumular experiencia dando clases en otras escuelas, en 2023 se
              independizó para fundar Maxymar en Playa Malvín. Su formación
              como instructor internacional certificado por la IKO le permite
              ofrecer un sistema de enseñanza que combina metodología
              profesional con un fuerte énfasis en la seguridad, tanto en los
              materiales como en las técnicas de navegación.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Malvín, y en particular la Punta de los Pescadores, ofrece
              condiciones ideales para el kitesurf gracias al reparo natural
              de la Isla de las Gaviotas y a los vientos del sur que
              predominan gran parte del año. En Maxymar reciben tanto a
              quienes se inician en el deporte como a alumnos que buscan
              perfeccionar su nivel, con un promedio de 8 a 10 horas de clases
              para alcanzar autonomía en el agua. Además de las clases
              locales, la escuela organiza kitetrips al nordeste brasilero
              (Cumbuco e Ilha do Guajirú), donde los alumnos disfrutan de
              condiciones paradisíacas mientras siguen progresando en su
              nivel.
            </p>
          </div>

          <div className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/maxi_image.jpeg"
              alt="Maximiliano Marenco, fundador de Maxymar"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 rounded-3xl bg-ink-950 p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Sumate a Maxymar
              </h2>
              <p className="mt-4 leading-relaxed text-ink-300">
                Aprendé kitesurf de la mano de un instructor certificado,
                en el spot que conoce mejor que nadie.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Button href="/contacto" variant="primary">
                Conocé a la escuela
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
