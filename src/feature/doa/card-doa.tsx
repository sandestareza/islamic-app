import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { DoaInfoItem } from "@/types/DoaInfo";
import React from "react";

export default function CardDoa({
	data
}: Readonly<{ data: DoaInfoItem[] }>) {
	return (
		<Container>
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col relative w-full">
					{data.map((item: DoaInfoItem, index: number) => (
						<Card
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
	);
}
