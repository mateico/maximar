import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const base =
	"group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]";

const variants: Record<Variant, string> = {
	primary: "bg-primary text-primary-foreground hover:bg-brand-yellow-400",
	secondary: "bg-secondary text-secondary-foreground hover:bg-brand-blue-600",
	outline: "border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white",
	ghost: "text-ink-900 hover:bg-ink-900/5",
};

type CommonProps = {
	variant?: Variant;
	className?: string;
	children: ReactNode;
};

type ButtonAsLink = CommonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string;
	};

type ButtonAsButton = CommonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined;
	};

type Props = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className = "", children, ...props }: Props) {
	const classes = `${base} ${variants[variant]} ${className}`;

	if ("href" in props && props.href) {
		const { href, ...anchorProps } = props;
		const isExternal = href.startsWith("http");
		return (
			<Link
				href={href}
				className={classes}
				{...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
				{...anchorProps}
			>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
			{children}
		</button>
	);
}
