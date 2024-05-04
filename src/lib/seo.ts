import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Azmeen Kausar';
	const description = "Hey 👋 I'm Azmeen Kausar, a Software Engineer";

	return {
		title,
		description,
		canonical: `https://azmeenkausar.me/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'azmeen-kausar',
			url: `https://azmeenkausar.me/${router.asPath}`,
			type: 'website',
		},
		...props,
	};
}
