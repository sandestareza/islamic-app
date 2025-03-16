import Headers from "@/components/layout/headers";
import ButtonScrollTop from "@/components/ui/button-scroll-top";
import CardAsmaulHusna from "@/feature/asmaulhusna/card-asmaulhusna";
import React from "react";

export default async function PageAsmaulHusna() {
	const res = await import(`@/data/asmaulhusan.json`);
	return (
		<>
			<Headers isFixed={true} isBack={true} title="Asmaul Husna" />
			<CardAsmaulHusna data={res.data} />
			<ButtonScrollTop />
		</>
	);
}
