import Header from "@/components/layout/headers";
import ButtonScrollTop from "@/components/ui/button-scroll-top";
import Container from "@/components/ui/container";
import CardDzikir from "@/feature/dzikir/card-dzikir";
import { DzikirItem } from "@/types/DoaInfo";
import React from "react";

export const metadata = {
	title: "Dzikir Pagi - Quranku",
};

export default async function DoaHarianPage() {
	const res = await import(`@/data/dzikir-pagi.json`);
	const dzikir_pagi: DzikirItem[] = res.dzikir_pagi;

	return (
		<>
			<Header isFixed={true} isBack={true} title="Dzikir Pagi" />
			<Container>
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col relative w-full">
						{dzikir_pagi.map((item: DzikirItem, index: number) => (
							<CardDzikir
								key={index}
								title={item.title}
								arabic={item.arabic}
								translation={item.translation}
								source={item.source}
							/>
						))}
					</div>
				</div>
			</Container>
			<ButtonScrollTop />
		</>
	);
}
