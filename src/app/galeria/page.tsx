import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { GALLERY } from "@/lib/gallery";

export const metadata: Metadata = {
	title: "Galería — Maxymar Kiteschool",
	description:
		"Fotos del instructor y de las clases y eventos de Maxymar Kiteschool en Playa Malvin, Montevideo.",
};

export default function GaleriaPage() {
	return (
		<>
			<section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-6 sm:py-20">
				<Container>
					<SectionHeading
						eyebrow="Galería"
						title="Momentos en el agua y en la playa"
						subtitle="Una selección de fotos del instructor, las clases y los eventos de Maxymar en Playa Malvin."
					/>
				</Container>
			</section>

			<section className="bg-white py-6 sm:py-20">
				<Container>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{GALLERY.map((item) => (
							<figure
								key={item.slug}
								className="group relative aspect-square overflow-hidden rounded-2xl border border-ink-900/8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
							>
								{item.image ? (
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								) : (
									<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-100">
										<item.icon className="h-10 w-10 text-secondary/50" />
									</div>
								)}
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 via-ink-950/40 to-transparent p-4 pt-10">
									<figcaption>
										<p className="font-heading text-sm font-bold text-white">
											{item.title}
										</p>
										<p className="mt-0.5 text-xs leading-snug text-ink-200">
											{item.description}
										</p>
									</figcaption>
								</div>
							</figure>
						))}
					</div>
				</Container>
			</section>

			<section className="bg-brand-yellow-50 py-16 sm:py-20">
				<Container>
					<div className="rounded-3xl bg-ink-950 px-8 py-14 text-center sm:px-16">
						<h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
							¿Querés ser parte de la próxima foto?
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-ink-300">
							Reservá tu clase y viví tu propia experiencia en Playa Malvin.
						</p>
						<div className="mt-8 flex justify-center">
							<Button href="/contacto" variant="primary">
								Reservá tu clase
								<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
