import Header from "@/components/layout/headers";
import { DoaInfoItem } from "@/types/DoaInfo";
import doaInfo from "@/data/doa-info.json";
import { makeTitle } from "@/lib/utils";
import React from "react";
import CardDoa from "@/feature/doa/card-doa";

export async function generateStaticParams() {
	return doaInfo.doa_info.map((item: any) => ({
		slug: item.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	return {
		title: `${makeTitle(slug)} - Quranku`,
	};
}

export default async function DoaHarianPage({
	params,
}: Readonly<{
	params: Promise<{ slug: string }>;
}>) {
	const { slug } = await params;
	const res = await import(`@/data/doa-harian/${slug}.json`);
	const doa: DoaInfoItem[] = res.data;

	return (
		<>
			<Header isFixed={true} isBack={true} title={makeTitle(slug)} />
			<CardDoa data={doa}/>			
		</>
	);
}
