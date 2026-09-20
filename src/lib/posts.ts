export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	tag: string;
	date: string;
};

export const POSTS: Post[] = [
	{
		slug: "vientos-playa-malvin-guia-temporada",
		title: "Vientos en Playa Malvín: guía de temporada",
		excerpt:
			"Cuándo sopla mejor el viento en Montevideo y cómo leer el pronóstico antes de reservar tu clase de kitesurf.",
		tag: "Spot",
		date: "Marzo 2026",
	},
	{
		slug: "como-elegir-tu-primera-cometa",
		title: "Cómo elegir tu primera cometa",
		excerpt: "Tamaños, tipos de cometa y qué tener en cuenta según tu peso y el viento disponible en la playa.",
		tag: "Equipo",
		date: "Febrero 2026",
	},
	{
		slug: "5-consejos-primera-clase-kitesurf",
		title: "5 consejos para tu primera clase de kitesurf",
		excerpt: "Qué llevar, cómo vestirte y qué esperar de tu primer contacto con la cometa en el agua.",
		tag: "Principiantes",
		date: "Enero 2026",
	},
	{
		slug: "seguridad-en-el-agua-checklist",
		title: "Seguridad en el agua: checklist antes de salir",
		excerpt: "Los chequeos de equipo y las señales de viento que todo rider debería revisar antes de largar.",
		tag: "Seguridad",
		date: "Diciembre 2025",
	},
	{
		slug: "de-la-tabla-de-iniciacion-al-twintip",
		title: "De la tabla de iniciación al twintip",
		excerpt: "Cómo saber cuándo estás listo para dar el salto de equipo y qué cambia en tu técnica.",
		tag: "Progresión",
		date: "Noviembre 2025",
	},
	{
		slug: "que-ropa-usar-para-kitesurfear-en-uruguay",
		title: "Qué ropa usar para kitesurfear en Uruguay",
		excerpt: "Neoprenos, botitas y accesorios según la época del año en la costa de Montevideo.",
		tag: "Equipo",
		date: "Octubre 2025",
	},
];
