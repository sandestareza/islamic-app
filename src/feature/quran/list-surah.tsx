"use client"
import { useState } from 'react';
import Surah from './surah'

import type { SurahInfo, SurahInfoJson } from '@/types/SurahInfo'
import InputSearch from '@/components/ui/input-search';

export default function ListSurah({ surah_info, amma = false }: Readonly<SurahInfoJson>) {
  const [query, setQuery] = useState("")

  const qurans = amma ? surah_info.filter(surah => surah.index >= 78) : surah_info

  return (
    <>      
      <InputSearch handleChange={event => setQuery(event.target.value)} placeholder='Cari Surah...' />
      <div className='flex flex-col relative'>
        {
          qurans?.filter((item: SurahInfo) => {
            if (query === '') {
              return item
            } else if (item.latin.toLowerCase().includes(query.toLowerCase())) {
              return item
            }
          }).map((item: SurahInfo, index: number) => (
            <Surah
              key={index}
              item={item}
            />
          ))
        }
      </div>
    </>
  );
}