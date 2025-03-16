import Header from '@/components/layout/headers'
import ListSurah from '@/feature/quran/list-surah'
import { SurahInfo } from '@/types/SurahInfo'
import React from 'react'
import ButtonScrollTop from '@/components/ui/button-scroll-top'

export default async function PageQuran() {
  const res: { surah_info: SurahInfo[] } = await import('@/data/surah-info.json')

  return (
    <>
      <Header isFixed={true} isBack={true} title={"Al Quran"} />
      <div className='pt-16 px-4'>
        <ListSurah surah_info={res.surah_info} />
      </div>
      <ButtonScrollTop />
    </>
  )
}
