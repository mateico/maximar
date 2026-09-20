import { MedalIcon, UsersIcon, WaveIcon, WindIcon, type IconProps } from "@/components/icons";
import { ComponentType } from "react";

export type GalleryItem = {
	slug: string;
	title: string;
	description: string;
	image?: string;
	icon: ComponentType<IconProps>;
};

export const GALLERY: GalleryItem[] = [
	{
		slug: "maxi-en-accion",
		title: "Maxi en acción",
		description: "Maximiliano navegando frente a Punta de los Pescadores.",
		image: "/gallery-1.webp",
		icon: WaveIcon,
	},
	{
		slug: "clase-individual",
		title: "Clase individual",
		description: "Instrucción personalizada en la orilla de Playa Malvín.",
		image: "/gallery-5.webp",
		icon: MedalIcon,
	},
	{
		slug: "salida-grupal",
		title: "Salida grupal",
		description: "Alumnos compartiendo una tarde de viento y aprendizaje.",
		image: "/gallery-3.webp",
		icon: UsersIcon,
	},
	{
		slug: "kitetrip-cumbuco",
		title: "Kitetrip a Cumbuco",
		description: "Viaje de perfeccionamiento en el nordeste brasilero.",
		image: "/gallery-1.webp",
		icon: WindIcon,
	},
	{
		slug: "primeros-saltos",
		title: "Primeros saltos",
		description: "Un alumno despegando por primera vez sobre el agua.",
		image: "/gallery-2.webp",
		icon: WaveIcon,
	},
	{
		slug: "atardecer-en-malvin",
		title: "Atardecer en Malvín",
		description: "Cierre de jornada con las cometas volviendo a la costa.",
		image: "/gallery-4.webp",
		icon: WindIcon,
	},
];
