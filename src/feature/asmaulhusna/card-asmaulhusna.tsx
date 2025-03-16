import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { AsmaulhusnaItem } from "@/types/DoaInfo";
import React from "react";

export default function CardAsmaulHusna({
	data
}: Readonly<{ data: AsmaulhusnaItem[] }>) {
	return (
		<Container>
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col relative w-full">
					{data.map((item: AsmaulhusnaItem, index: number) => (
						<Card
							key={index}
							arabic={item.arabic}
							translation={item.translation_id}
              title={item.latin}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
