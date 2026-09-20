"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "./icons";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const NAV_LINKS = [
	{ href: "/", label: "Inicio" },
	{ href: "/servicios", label: "Servicios" },
	{ href: "/blog", label: "Blog" },
	{ href: "/galeria", label: "Galería" },
	{ href: "/nosotros", label: "Nosotros" },
	{ href: "/contacto", label: "Contacto" },
];

type PillRect = { left: number; top: number; width: number; height: number; opacity: number };

export function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const mobileButtonRef = useRef<HTMLButtonElement>(null);

	const navRef = useRef<HTMLElement>(null);
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const [pillRect, setPillRect] = useState<PillRect>({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

	const activeIndex = NAV_LINKS.findIndex((link) =>
		link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
	);
	const displayIndex = hoverIndex ?? activeIndex;

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!open) return;

		const handlePointerDown = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node;
			if (mobileMenuRef.current?.contains(target) || mobileButtonRef.current?.contains(target)) {
				return;
			}
			setOpen(false);
		};

		document.addEventListener("mousedown", handlePointerDown);
		document.addEventListener("touchstart", handlePointerDown);
		return () => {
			document.removeEventListener("mousedown", handlePointerDown);
			document.removeEventListener("touchstart", handlePointerDown);
		};
	}, [open]);

	useEffect(() => {
		const measure = () => {
			const nav = navRef.current;
			const el = linkRefs.current[displayIndex];
			if (!nav || !el) {
				setPillRect((rect) => ({ ...rect, opacity: 0 }));
				return;
			}
			const navRect = nav.getBoundingClientRect();
			const elRect = el.getBoundingClientRect();
			setPillRect({
				left: elRect.left - navRect.left,
				top: elRect.top - navRect.top,
				width: elRect.width,
				height: elRect.height,
				opacity: 1,
			});
		};

		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [displayIndex]);

	return (
		<header className="sticky top-0 z-50 bg-brand-yellow-100/85 backdrop-blur-md">
			<Container className="flex items-center justify-between py-3">
				<Link href="/" className="flex items-center gap-2.5" aria-label="Maxymar Kiteschool — inicio">
					<Image src="/main-logo-modified.png" alt="Maxymar Kiteschool" width={56} height={56} className="h-14 w-14 shrink-0" priority />
				</Link>

				<nav ref={navRef} className="relative hidden items-center gap-1 md:flex">
					<span
						aria-hidden="true"
						className="pointer-events-none absolute rounded-full bg-ink-900 transition-all duration-300 ease-out"
						style={{
							left: pillRect.left,
							top: pillRect.top,
							width: pillRect.width,
							height: pillRect.height,
							opacity: pillRect.opacity,
						}}
					/>
					{NAV_LINKS.map((link, index) => {
						const displayed = index === displayIndex;
						return (
							<Link
								key={link.href}
								href={link.href}
								ref={(el) => {
									linkRefs.current[index] = el;
								}}
								className={`relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:font-bold ${
									displayed ? "text-white" : "text-ink-800"
								}`}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>

				<div className="hidden md:block">
					<Button href="/contacto" variant="secondary" className="!py-2.5 !px-5 text-sm">
						Reservá tu clase
						<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Button>
				</div>

				<button
					ref={mobileButtonRef}
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-900/5 md:hidden"
					aria-label={open ? "Cerrar menú" : "Abrir menú"}
					aria-expanded={open}
				>
					<span className="relative block h-5 w-6" aria-hidden="true">
						<span
							className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
								open ? "top-[9px] rotate-45" : "top-0 rotate-0"
							}`}
						/>
						<span
							className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
								open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
							}`}
						/>
						<span
							className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
								open ? "top-[9px] -rotate-45" : "top-[18px] rotate-0"
							}`}
						/>
					</span>
				</button>
			</Container>

			{open && (
				<div ref={mobileMenuRef} className="border-t border-ink-900/10 bg-brand-yellow-100 md:hidden">
					<Container className="flex flex-col gap-1 py-4">
						{NAV_LINKS.map((link) => {
							const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
							return (
								<Link
									key={link.href}
									href={link.href}
									className={`rounded-xl px-4 py-3 text-base font-semibold ${
										active ? "bg-ink-900 text-white" : "text-ink-800 hover:bg-ink-900/5"
									}`}
								>
									{link.label}
								</Link>
							);
						})}
						<Button href="/contacto" variant="secondary" className="mt-2 w-full">
							Reservá tu clase
							<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
						</Button>
					</Container>
				</div>
			)}
		</header>
	);
}
