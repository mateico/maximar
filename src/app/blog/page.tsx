import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
	title: "Blog — Maxymar Kiteschool",
	description: "Tips, guías y novedades sobre kitesurf en Playa Malvin, Montevideo.",
};

export default function BlogPage() {
	return (
		<>
			<section className="bg-gradient-to-br from-brand-yellow-100 via-brand-yellow-50 to-brand-blue-50 py-16 sm:py-20">
				<Container>
					<SectionHeading
						eyebrow="Blog"
						title="Tips, guías y novedades"
						subtitle="Todo lo que necesitás saber sobre viento, equipo y técnica para tu próxima salida a Playa Malvin."
					/>
				</Container>
			</section>

			<section className="bg-white py-16 sm:py-20">
				<Container>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{POSTS.map((post) => (
							<article
								key={post.slug}
								className="flex flex-col rounded-2xl border border-ink-900/8 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
							>
								<span className="inline-flex w-fit items-center rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue-700">
									{post.tag}
								</span>
								<h2 className="mt-4 font-heading text-lg font-bold text-ink-950">{post.title}</h2>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
								<p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-400">{post.date}</p>
							</article>
						))}
					</div>

					<p className="mt-12 text-center text-sm text-ink-500">Más artículos, muy pronto. 🪁</p>
				</Container>
			</section>
		</>
	);
}
