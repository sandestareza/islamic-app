import Header from "@/components/layout/headers";
import { TeksArabItem } from "@/types/DoaInfo";
import React from "react";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import CardKamus from "@/feature/kamus-arab/card-kamus";
import ButtonScrollTop from "@/components/ui/button-scroll-top";

export const metadata = {
  title: 'Teks Arab - Quranku',
}

export default async function KamusArabPage() {
  const res = await import(`@/data/teks-arab.json`);
  const teks_arab: TeksArabItem[] = res.teks_arab;

  return (
    <>
      <Header isFixed={true} isBack={true} title="Teks Arab" />
      <Container>
        <CardKamus data={teks_arab} />
      </Container>
      <ButtonScrollTop />
    </>
  );
}