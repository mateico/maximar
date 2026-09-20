import { GraduationCapIcon, MedalIcon, WaveIcon, WindIcon, type IconProps } from "@/components/icons";
import { ComponentType } from "react";

export type Service = {
	slug: string;
	title: string;
	summary: string;
	description: string;
	details: string[];
	icon: ComponentType<IconProps>;
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
	},
	{
		slug: "cursos-para-instructores",
		title: "Cursos para instructores",
		summary: "Formación para quienes quieren certificarse y enseñar kitesurf de forma profesional.",
		description:
			"Programa de formación de instructores con base en la metodología IKO, pensado para riders con experiencia que quieren dar el salto a la enseñanza.",
		details: [
			"Metodología y estándares de enseñanza IKO",
			"Práctica de rescate y seguridad en el agua",
			"Prácticas supervisadas con alumnos reales",
			"Certificación de instructor al finalizar",
		],
		icon: GraduationCapIcon,
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
	},
];
