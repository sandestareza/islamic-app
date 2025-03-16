import Header from "@/components/layout/headers";
import Container from "@/components/ui/container";
import CardDzikir from "@/feature/dzikir/card-dzikir";
import { DzikirItem } from "@/types/DoaInfo";
import React from "react";

export const metadata = {
	title: "Dzikir Petang - Quranku",
};

export default async function DoaHarianPage() {
	const res = await import(`@/data/dzikir-petang.json`);
	const dzikir_petang: DzikirItem[] = res.dzikir_petang;

	return (
		<>
			<Header isFixed={true} isBack={true} title="Dzikir Petang" />
			<Container>
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col relative w-full">
						{dzikir_petang.map((item: DzikirItem, index: number) => (
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
		</>
	);
}
