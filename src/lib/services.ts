import { CalendarIcon, MedalIcon, ShieldCheckIcon, UsersIcon, WaveIcon, WindIcon, type IconProps } from "@/components/icons";
import { ComponentType } from "react";

export type Service = {
	slug: string;
	title: string;
	summary: string;
	description: string;
	details: string[];
	icon: ComponentType<IconProps>;
	accent: string;
};

export const SERVICES: Service[] = [
	{
		slug: "clases-individuales",
		title: "Clases individuales",
		summary: "Atención 100% personalizada para avanzar a tu ritmo, con feedback constante en el agua.",
		description:
			"La forma más rápida de progresar: un instructor dedicado exclusivamente a vos, que ajusta el plan de clase según tu nivel y tus objetivos en cada salida.",
		details: [
			"Instructor exclusivo durante toda la clase",
			"Plan de progresión adaptado a tu nivel",
			"Equipo incluido (tabla, cometa, arnés y radio)",
			"Ideal para acelerar tu curva de aprendizaje",
		],
		icon: MedalIcon,
		accent: "bg-brand-yellow-100 text-brand-yellow-700",
	},
	{
		slug: "clases-grupales",
		title: "Clases grupales",
		summary: "Aprendé en grupos reducidos, compartiendo la experiencia con otros alumnos en el agua.",
		description:
			"Grupos de hasta 3 personas de nivel similar, con toda la diversión de aprender en compañía y un instructor pendiente de cada alumno.",
		details: [
			"Grupos reducidos, máximo 3 alumnos por instructor",
			"Buena relación precio-progreso",
			"Excelente para iniciarse en el deporte",
			"Equipo incluido",
		],
		icon: UsersIcon,
		accent: "bg-brand-blue-100 text-brand-blue-700",
	},
	{
		slug: "curso-iniciacion",
		title: "Curso de iniciación",
		summary: "Un paquete de clases pensado para pasar de cero a volar tu primera cometa con autonomía.",
		description:
			"Varias clases encadenadas que cubren teoría de viento y seguridad, control de cometa en tierra, body drag y tus primeros intentos de waterstart.",
		details: [
			"Incluye teoría de viento, seguridad y armado de equipo",
			"Progresión completa: control en tierra, body drag y waterstart",
			"Seguimiento de tu evolución clase a clase",
			"Certificado de finalización del curso",
		],
		icon: CalendarIcon,
		accent: "bg-sunset-orange-100 text-sunset-orange-700",
	},
	{
		slug: "alquiler-de-equipos",
		title: "Alquiler de equipos",
		summary: "Para riders con experiencia que quieren salir a navegar por su cuenta en Playa Malvin.",
		description:
			"Equipos revisados y en buen estado (cometas, tablas y arneses) disponibles por hora, medio día o día completo, con asesoramiento sobre las condiciones del spot.",
		details: [
			"Cometas y tablas para distintos niveles y pesos",
			"Chequeo de equipo y condiciones antes de salir",
			"Alquiler por hora, medio día o día completo",
			"Requiere experiencia previa comprobable",
		],
		icon: WindIcon,
		accent: "bg-brand-yellow-100 text-brand-yellow-700",
	},
	{
		slug: "packs-y-bonos",
		title: "Packs y bonos",
		summary: "Bonos de clases con descuento para quienes quieren entrenar de forma constante.",
		description:
			"Comprá un bono de clases individuales o grupales y usalo durante la temporada, coordinando cada salida según el viento y tu disponibilidad.",
		details: [
			"Bonos de 5 o 10 clases con descuento",
			"Válidos durante toda la temporada",
			"Coordinación flexible por WhatsApp",
			"Ideal para alumnos frecuentes",
		],
		icon: ShieldCheckIcon,
		accent: "bg-brand-blue-100 text-brand-blue-700",
	},
	{
		slug: "eventos-y-salidas",
		title: "Eventos y salidas grupales",
		summary: "Jornadas de kitesurf para grupos de amigos, empresas o cumpleaños en Playa Malvin.",
		description:
			"Organizamos experiencias grupales con clases introductorias, exhibiciones y una tarde completa de viento y buena onda en la playa.",
		details: [
			"A medida para grupos, empresas y eventos especiales",
			"Incluye instructores y equipo para todo el grupo",
			"Actividad al aire libre, apta para principiantes",
			"Consultanos disponibilidad de fechas",
		],
		icon: WaveIcon,
		accent: "bg-sunset-orange-100 text-sunset-orange-700",
	},
];
