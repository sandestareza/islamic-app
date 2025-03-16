"use client";

import Card from '@/components/ui/card';
import InputSearch from '@/components/ui/input-search';
import { TeksArabItem } from '@/types/DoaInfo';
import React, { useState } from 'react'


export default function CardKamus({ data }: Readonly<{ data: TeksArabItem[] }>) {
  const [query, setQuery] = useState("");
	return (
		<>
			<InputSearch
				handleChange={(event) => setQuery(event.target.value)}
				placeholder="Cari teks"
			/>
			{data
				.filter((item: TeksArabItem) => {
					if (query === "") {
						return item;
					} else if (
						item.latin
							.toLowerCase()
							.includes(query.toLowerCase()) ||
						item.translation
							.toLowerCase()
							.includes(query.toLowerCase())
					) {
						return item;
					}
				})
				.map((item: TeksArabItem, index: number) => (
					<Card key={index} title={item.latin} arabic={item.arabic} translation={item.translation} />
				))}
		</>
	);
}
