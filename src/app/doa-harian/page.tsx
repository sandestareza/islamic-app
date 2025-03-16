import Header from "@/components/layout/headers";
import { DoaInfo, DoaInfoJson } from "@/types/DoaInfo";
import ListDoa from "@/feature/doa/list-doa";
import ButtonScrollTop from "@/components/ui/button-scroll-top";

export const metadata = {
	title: "Doa Harian - Quranku",
};

export default async function DoaHarianPage() {
	const res: DoaInfoJson = await import("@/data/doa-info.json");
	const doa_info = res.doa_info.map((item: DoaInfo, index: number) => ({
		...item,
		index: index,
	}));

	return (
		<>
			<Header isFixed={true} isBack={true} title="Doa Harian" />
			<ListDoa data={doa_info} />		
			<ButtonScrollTop />	
		</>
	);
}
