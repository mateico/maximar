import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
	title: "Contacto — Maxymar Kiteschool",
	description: "Escribinos para reservar tu clase de kitesurf en Playa Malvin, Montevideo.",
};

const CONTACT_ITEMS = [
	{
		icon: MapPinIcon,
		label: "Ubicación",
		value: "Playa Malvin, Montevideo, Uruguay",
		href: undefined,
	},
	{
		icon: MailIcon,
		label: "Email",
		value: "hola@maxymar.uy",
		href: "mailto:hola@maxymar.uy",
	},
	{
		icon: PhoneIcon,
		label: "WhatsApp",
		value: "+598 00 000 000",
		href: "tel:+59800000000",
	},
	{
		icon: InstagramIcon,
		label: "Instagram",
		value: "@maxymar.uy",
		href: "https://instagram.com/maxymar.uy",
	},
];

export default function ContactoPage() {
	return (
		<>
			<section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-16 sm:py-20">
				<Container>
					<SectionHeading
						eyebrow="Contacto"
						title="Coordinemos tu próxima clase"
						subtitle="Contanos tu nivel y tu disponibilidad, y te respondemos con los mejores horarios según el viento en Playa Malvin."
					/>
				</Container>
			</section>

			<section className="bg-white py-16 sm:py-20">
				<Container className="grid gap-12 lg:grid-cols-5">
					<div className="lg:col-span-3">
						<div className="rounded-3xl border border-ink-900/8 p-6 shadow-sm sm:p-8">
							<ContactForm />
						</div>
					</div>

					<div className="lg:col-span-2">
						<ul className="space-y-5">
							{CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
								<li key={label} className="flex items-start gap-4 rounded-2xl bg-brand-yellow-50 p-5">
									<span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-secondary shadow-sm">
										<Icon className="h-5 w-5" />
									</span>
									<div>
										<p className="text-xs font-bold uppercase tracking-wide text-ink-500">{label}</p>
										{href ? (
											<a
												href={href}
												target={href.startsWith("http") ? "_blank" : undefined}
												rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
												className="mt-0.5 block font-semibold text-ink-950 hover:text-secondary"
											>
												{value}
											</a>
										) : (
											<p className="mt-0.5 font-semibold text-ink-950">{value}</p>
										)}
									</div>
								</li>
							))}
						</ul>

						<div className="mt-6 overflow-hidden rounded-2xl">
							<div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-yellow-300 via-sunset-orange-400 to-brand-blue-500 text-center text-white">
								<MapPinIcon className="h-10 w-10" />
								<p className="font-heading text-lg font-bold drop-shadow">Playa Malvin</p>
								<p className="text-sm text-white/80">Montevideo, Uruguay</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
