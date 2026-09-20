import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, MedalIcon, ShieldCheckIcon, UsersIcon, WaveIcon, WindIcon } from "@/components/icons";

export const metadata: Metadata = {
	title: "Nosotros — Maxymar Kiteschool",
	description: "Conocé la historia, la misión y los valores de Maxymar Kiteschool en Playa Malvin, Montevideo.",
};

const VALUES = [
	{
		icon: WindIcon,
		title: "Pasión",
		description: "Vivimos el kitesurf todos los días y lo transmitimos en cada clase.",
	},
	{
		icon: ShieldCheckIcon,
		title: "Seguridad",
		description: "Cada salida al agua sigue protocolos claros, sin atajos.",
	},
	{
		icon: UsersIcon,
		title: "Comunidad",
		description: "Construimos un grupo de alumnos y riders que se acompañan dentro y fuera del agua.",
	},
	{
		icon: WaveIcon,
		title: "Respeto por el mar",
		description: "Cuidamos la playa y el entorno natural que hace posible nuestro deporte.",
	},
];

export default function NosotrosPage() {
	return (
		<>
			<section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-16 sm:py-20">
				<Container>
					<SectionHeading
						eyebrow="Nosotros"
						title="Nacimos en la costa de Montevideo"
						subtitle="Maxymar Kiteschool nace de las ganas de compartir el kitesurf en el spot que más queremos: Playa Malvin."
					/>
				</Container>
			</section>

			<section className="bg-white py-16 sm:py-20">
				<Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
					<div>
						<h2 className="font-heading text-2xl font-bold text-ink-950 sm:text-3xl">Nuestra historia</h2>
						<p className="mt-4 leading-relaxed text-ink-600">
							Maxymar Kiteschool arrancó como un grupo de amigos navegando el viento de Playa Malvin, uno de los
							pocos spots de Montevideo con las condiciones ideales para aprender kitesurf: fondo de arena, poca
							profundidad cerca de la costa y viento constante gran parte del año.
						</p>
						<p className="mt-4 leading-relaxed text-ink-600">
							Con el tiempo, esa pasión se convirtió en una escuela: formamos instructores, sumamos equipo y
							armamos una metodología propia para que cualquier persona, sin experiencia previa, pueda subirse a
							una tabla con confianza.
						</p>
						<p className="mt-4 leading-relaxed text-ink-600">
							Hoy seguimos en la misma playa, con la misma idea de siempre: que aprender kitesurf sea seguro,
							divertido y accesible para toda la comunidad de Montevideo.
						</p>
					</div>

					<div className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-yellow-300 via-sunset-orange-400 to-brand-blue-500 shadow-xl">
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
							<MedalIcon className="h-14 w-14 text-white/90" />
							<p className="font-heading text-xl font-bold text-white drop-shadow">Escuela certificada</p>
							<p className="max-w-[220px] text-sm text-white/80">Instructores con certificación internacional IKO</p>
						</div>
					</div>
				</Container>
			</section>

			<section className="bg-brand-yellow-50 py-16 sm:py-20">
				<Container>
					<SectionHeading eyebrow="Nuestros valores" title="Lo que nos mueve dentro y fuera del agua" align="center" />

					<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{VALUES.map(({ icon: Icon, title, description }) => (
							<div key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-ink-900/5">
								<div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
									<Icon className="h-6 w-6" />
								</div>
								<h3 className="mt-4 font-heading text-lg font-bold text-ink-950">{title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section className="bg-white py-16 sm:py-20">
				<Container>
					<div className="grid gap-10 rounded-3xl bg-ink-950 p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
						<div>
							<h2 className="font-heading text-2xl font-bold sm:text-3xl">Nuestro equipo</h2>
							<p className="mt-4 leading-relaxed text-ink-300">
								Instructores certificados IKO, con horas de vuelo en Playa Malvin y foco en la seguridad y el
								disfrute de cada alumno. Adaptamos cada clase al ritmo de la persona que tenemos enfrente, sea su
								primera vez en el agua o esté puliendo sus saltos.
							</p>
						</div>
						<div className="flex justify-start lg:justify-end">
							<Button href="/contacto" variant="primary">
								Conocé a la escuela
								<ArrowRightIcon className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
