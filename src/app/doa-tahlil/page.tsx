import Header from "@/components/layout/headers";
import ButtonScrollTop from "@/components/ui/button-scroll-top";
import Container from "@/components/ui/container";
import CardTahlil from "@/feature/tahlil/card-tahlil";

async function PageDoaTahlil() {
	const res = await import(`@/data/tahlil.json`);

	return (
		<>
			<Header isFixed={true} isBack={true} title="Doa Tahlil" />
			<Container>
				<CardTahlil data={res.data} />
			</Container>
			<ButtonScrollTop />
		</>
	);
}

export default PageDoaTahlil;
