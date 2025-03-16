import Headers from '@/components/layout/headers';
import ButtonScrollTop from '@/components/ui/button-scroll-top';
import CardWirid from '@/feature/wirid/card-wirid';
import React from 'react'

export default async function PageWirid() {
  const res = await import(`@/data/wirid.json`);
    return (
      <>
        <Headers isFixed={true} isBack={true} title="Wirid" />
        <CardWirid data={res.data} />
        <ButtonScrollTop />
      </>
    );
}
