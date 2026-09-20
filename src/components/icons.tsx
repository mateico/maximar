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
