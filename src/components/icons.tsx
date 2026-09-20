import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.75,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
};

export function WindIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M3 8h9.5a2.5 2.5 0 1 0-2.34-3.4" />
			<path d="M3 12.5h13a2.5 2.5 0 1 1-2.34 3.4" />
			<path d="M3 17h7.5a2 2 0 1 1-1.87 2.7" />
		</svg>
	);
}

export function WaveIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M2 17c1.5 1.4 3 1.4 4.5 0s3-1.4 4.5 0 3 1.4 4.5 0 3-1.4 4.5 0" />
			<path d="M2 11.5c1.5 1.4 3 1.4 4.5 0s3-1.4 4.5 0 3 1.4 4.5 0 3-1.4 4.5 0" />
		</svg>
	);
}

export function SunIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="4.5" />
			<path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
		</svg>
	);
}

export function MedalIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="14.5" r="6" />
			<path d="M9.5 9.2 7 3h3l2 4.2L14 3h3l-2.5 6.2" />
			<path d="M10.3 14.2 12 12.6l1.7 1.6-.5 2.3-1.2-.7-1.2.7z" />
		</svg>
	);
}

export function MapPinIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
			<circle cx="12" cy="9.5" r="2.3" />
		</svg>
	);
}

export function MailIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<rect x="3" y="5" width="18" height="14" rx="2.5" />
			<path d="m4 6.5 8 6.2 8-6.2" />
		</svg>
	);
}

export function PhoneIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M6.5 3.5h3L11 8l-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
		</svg>
	);
}

export function InstagramIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<rect x="3.5" y="3.5" width="17" height="17" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.2" cy="6.8" r="0.4" fill="currentColor" stroke="none" />
		</svg>
	);
}

export function FacebookIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<rect x="3.5" y="3.5" width="17" height="17" rx="5" />
			<path
				d="M13.8 20v-6.2h2.1l.3-2.4h-2.4v-1.5c0-.7.2-1.2 1.2-1.2h1.3V6.5c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.7H9v2.4h2.2V20"
				fill="currentColor"
				stroke="none"
			/>
		</svg>
	);
}

export function WhatsAppIcon(props: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
		</svg>
	);
}

export function ArrowRightIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M4 12h16M13 5l7 7-7 7" />
		</svg>
	);
}

export function UsersIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<circle cx="9" cy="8.5" r="3" />
			<path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
			<path d="M16 4.5a3 3 0 0 1 0 6" />
			<path d="M15 14c2.8.3 5 2.8 5 6" />
		</svg>
	);
}

export function ShieldCheckIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M12 3l7 3v5.5c0 4.6-3 8.4-7 9.5-4-1.1-7-4.9-7-9.5V6z" />
			<path d="m9 12 2 2 4-4.2" />
		</svg>
	);
}

export function CalendarIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
			<path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
		</svg>
	);
}

export function GraduationCapIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
			<path d="M6.5 11.6v4.2c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.2" />
			<path d="M20.5 9.5v5.5" />
		</svg>
	);
}
