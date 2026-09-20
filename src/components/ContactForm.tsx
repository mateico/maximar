"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon } from "./icons";

const LEVELS = ["Nunca probé", "Principiante", "Intermedio", "Avanzado"];

export function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<div className="rounded-2xl bg-brand-blue-50 p-8 text-center">
				<p className="font-heading text-xl font-bold text-ink-950">¡Gracias! 🪁</p>
				<p className="mt-2 text-sm text-ink-600">
					Recibimos tu mensaje. Te vamos a escribir a la brevedad para coordinar tu clase en Playa Malvín.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="grid gap-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-800">
					Nombre
					<input
						required
						type="text"
						name="nombre"
						placeholder="Tu nombre"
						className="rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
					/>
				</label>
				<label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-800">
					Email
					<input
						required
						type="email"
						name="email"
						placeholder="vos@email.com"
						className="rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
					/>
				</label>
			</div>

			<label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-800">
				¿Cuál es tu nivel?
				<select
					name="nivel"
					defaultValue={LEVELS[0]}
					className="rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
				>
					{LEVELS.map((level) => (
						<option key={level} value={level}>
							{level}
						</option>
					))}
				</select>
			</label>

			<label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-800">
				Mensaje
				<textarea
					required
					name="mensaje"
					rows={4}
					placeholder="Contanos qué día te gustaría venir y cualquier duda que tengas"
					className="resize-none rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
				/>
			</label>

			<button
				type="submit"
				className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-yellow-400 active:scale-[0.97]"
			>
				Enviar mensaje
				<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
			</button>
		</form>
	);
}
