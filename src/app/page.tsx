import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRightIcon,
  MapPinIcon,
  MedalIcon,
  ShieldCheckIcon,
  UsersIcon,
  WaveIcon,
  WindIcon,
} from "@/components/icons";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/posts";

const ICON_STYLES = [
  { text: "text-brand-blue-600" },
  { text: "text-sunset-orange-600" },
  { text: "text-brand-yellow-700" },
  { text: "text-sunset-red-600" },
];

const HIGHLIGHTS = [
  {
    icon: MedalIcon,
    title: "Instructores certificados IKO",
    description:
      "Equipo con certificación internacional IKO, enfocado en tu seguridad y tu progreso.",
  },
  {
    icon: WindIcon,
    title: "El mejor spot de Montevideo",
    description:
      "Clases en Playa Malvin, con viento constante y un fondo de arena ideal para aprender.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Seguridad primero",
    description:
      "Equipos revisados, radios y protocolos claros en cada salida al agua.",
  },
  {
    icon: UsersIcon,
    title: "Para todos los niveles",
    description:
      "Desde tu primera clase hasta perfeccionar tus saltos y transiciones.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-red-500">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50" />
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-yellow-400/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-blue-300/40 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid gap-6 sm:gap-12 py-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink-700 shadow-sm ring-1 ring-ink-900/5">
              <MapPinIcon className="h-4 w-4 text-secondary" />
              Playa Malvin
            </span>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl">
              Sentí el viento.
              <br />
              <span className="text-secondary">Volá sobre el agua.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
              Escuela de kitesurf en la mejor playa. Instructores certificados
              para que te subas a la tabla con confianza, sin importar tu nivel.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contacto" variant="primary">
                Reservá tu clase
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button href="/servicios" variant="outline">
                Ver servicios
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="relative aspect-square w-full max-w-sm p-6 sm:max-w-md sm:p-10">
              <Image
                src="/main-logo.png"
                alt="Maxymar Kiteschool"
                width={500}
                height={500}
                priority
                className="h-full w-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <dl className="mx-auto grid max-w-md grid-cols-2 gap-6 border-t border-ink-900/10 pt-8 text-center lg:col-start-1 lg:mx-0 lg:text-left">
            <div>
              <dt className="sr-only">Alumnos por temporada</dt>
              <dd className="font-heading text-2xl font-bold text-ink-950">
                +100
              </dd>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">
                Alumnos por temporada
              </p>
            </div>
            <div>
              <dt className="sr-only">Meses de viento</dt>
              <dd className="font-heading text-2xl font-bold text-ink-950">
                10
              </dd>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">
                Años de escuela
              </p>
            </div>
          </dl>
        </Container>

        <div className="relative" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="h-10 w-full text-brand-blue-300 sm:h-14"
          >
            <path
              d="M0 30c50 15 100 15 150 0s100-15 150 0 100 15 150 0 100-15 150 0 100 15 150 0 100-15 150 0 100 15 150 0 100-15 150 0v30H0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-brand-blue-300 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Por qué elegirnos"
            eyebrowClassName="!text-ink-950"
            title="Una escuela pensada para que aprendas rápido y seguro"
            subtitle="Combinamos el mejor spot de la ciudad con instructores certificados y equipos de primera calidad."
            subtitleClassName="!text-ink-950"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, title }, index) => {
              const style = ICON_STYLES[index % ICON_STYLES.length];
              return (
                <div
                  key={title}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
                >
                  <Icon className={`h-8 w-8 shrink-0 ${style.text}`} />
                  <h3 className="font-heading text-lg font-normal text-ink-950">
                    {title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="bg-brand-yellow-50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Servicios"
              title="Elegí la forma de subirte a la tabla"
              subtitle="Clases, cursos y alquiler de equipo adaptados a tu ritmo y objetivos."
            />
            <Button
              href="/servicios"
              variant="ghost"
              className="!px-0 hover:!bg-transparent"
            >
              Ver todos los servicios
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((service) => service.slug !== "clases-grupales")
              .slice(0, 3)
              .map((service, index) => {
                const style = ICON_STYLES[index % ICON_STYLES.length];
                return (
                  <div
                    key={service.slug}
                    className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink-900/5 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <service.icon
                        className={`h-8 w-8 shrink-0 ${style.text}`}
                      />
                      <h3 className="font-heading text-lg font-normal text-ink-950">
                        {service.title}
                      </h3>
                    </div>
                    <Link
                      href="/servicios"
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-brand-blue-700"
                    >
                      Ver más
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>

      {/* Spot highlight */}
      <section className="relative overflow-hidden bg-ink-950 py-16 text-white sm:py-24">
        <div className="absolute inset-0 opacity-90" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-sunset-orange-600/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-blue-800/60 to-transparent" />
        </div>

        <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow-300">
              <WaveIcon className="h-4 w-4" />
              Nuestro spot
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              Playa Malvin, el mejor lugar para aprender
            </h2>
            <p className="mt-5 max-w-lg text-ink-200">
              Poca profundidad y viento constante gran parte del año: las
              condiciones ideales para dar tus primeros pasos en el kitesurf con
              seguridad.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <WindIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-400" />
                <span className="text-sm text-ink-200">
                  Viento térmico y sudeste predecible, ideal para planificar tu
                  clase.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-400" />
                <span className="text-sm text-ink-200">
                  Zona de agua controlada y supervisada por tu instructor.
                </span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/playa-malvin.jpg"
              alt="Playa Malvín, Montevideo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow-400/60 via-sunset-orange-500/50 to-brand-blue-600/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <WaveIcon className="h-14 w-14 text-white/90" />
              <p className="font-heading text-2xl font-bold text-white drop-shadow">
                Playa Malvin
              </p>
              <p className="text-sm font-medium text-white/80">
                Montevideo, Uruguay
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog preview */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Blog"
              title="Tips, guías y novedades"
              subtitle="Todo lo que necesitás saber antes de tu próxima salida."
            />
            <Button
              href="/blog"
              variant="ghost"
              className="!px-0 hover:!bg-transparent"
            >
              Ver todo el blog
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-ink-900/8 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue-700">
                  {post.tag}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-ink-950">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-400">
                  {post.date}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="bg-brand-yellow-50 pb-16 sm:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-14 text-center shadow-xl sm:px-16">
            <div
              className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand-yellow-400/30 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="relative font-heading text-3xl font-bold text-white sm:text-4xl">
              ¿Lista, listo para tu primera clase?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-brand-blue-50">
              Contanos tu nivel y coordinamos el mejor horario según el viento
              en Playa Malvin.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contacto" variant="primary">
                Escribinos ahora
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
