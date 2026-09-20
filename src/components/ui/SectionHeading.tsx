type Props = {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	align?: "left" | "center";
	tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left", tone = "dark" }: Props) {
	const isCenter = align === "center";
	const isLight = tone === "light";

	return (
		<div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
			{eyebrow && (
				<span className={`text-xs font-bold uppercase tracking-[0.2em] ${isLight ? "text-brand-yellow-400" : "text-secondary"}`}>
					{eyebrow}
				</span>
			)}
			<h2 className={`mt-3 font-heading text-3xl font-bold sm:text-4xl ${isLight ? "text-white" : "text-ink-950"}`}>{title}</h2>
			{subtitle && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isLight ? "text-ink-200" : "text-ink-600"}`}>{subtitle}</p>}
		</div>
	);
}
