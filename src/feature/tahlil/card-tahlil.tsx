"use client";

import Card from "@/components/ui/card";
import InputSearch from "@/components/ui/input-search";
import { TahlilItem } from "@/types/DoaInfo";
import React, { useState } from "react";

export default function CardTahlil({ data }: Readonly<{ data: TahlilItem[] }>) {
	const [query, setQuery] = useState("");
	return (
		<>
			<InputSearch
				handleChange={(event) => setQuery(event.target.value)}
				placeholder="Cari teks"
			/>
			{data
				.filter((item: TahlilItem) => {
					if (query === "") {
						return item;
					} else if (
						item.title
							.toLowerCase()
							.includes(query.toLowerCase()) ||
						item.translation
							.toLowerCase()
							.includes(query.toLowerCase())
					) {
						return item;
					}
				})
				.map((item: TahlilItem, index: number) => (
					<Card key={index} title={item.title} arabic={item.arabic} translation={item.translation} />
				))}
		</>
	);
}
