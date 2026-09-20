import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/contact";

export function WhatsAppFloatingButton() {
	return (
		<a
			href={WHATSAPP_LINK}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Escribinos por WhatsApp"
			className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
		>
			<Image src="/whatsapp.png" alt="WhatsApp" width={56} height={56} className="h-full w-full drop-shadow-lg" />
		</a>
	);
}
