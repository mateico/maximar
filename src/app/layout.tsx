import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Maxymar Kiteschool — Escuela de kitesurf en Playa Malvin, Montevideo",
	description:
		"Aprendé a volar sobre el agua en Playa Malvin, Montevideo. Clases individuales y grupales, alquiler de equipos e instructores certificados para todos los niveles.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" data-scroll-behavior="smooth">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
				<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
				<WhatsAppFloatingButton />
			</body>
		</html>
	);
}
