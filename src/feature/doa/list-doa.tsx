"use client";

import CardLink from "@/components/ui/card-link";
import Container from "@/components/ui/container";
import InputSearch from "@/components/ui/input-search";
import { DoaInfo } from "@/types/DoaInfo";
import React, { useState } from "react";

export default function ListDoa({ data }: Readonly<{ data: DoaInfo[] }>) {
	const [query, setQuery] = useState("");
	return (
		<Container>
      <InputSearch handleChange={(event) => setQuery(event.target.value) } placeholder="Cari teks..." />
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col gap-3 w-full mb-6">
					{data
						.filter((item: DoaInfo) => {
							if (query === "") {
								return item;
							} else if (
								item.title
									.toLowerCase()
									.includes(query.toLowerCase())
							) {
								return item;
							}
						})
						.map((item: DoaInfo, i) => (
							<CardLink
								key={i}
								name={item.title}
								url={"/doa-harian/" + item.slug}
							/>
						))}
				</div>
			</div>
		</Container>
	);
}
