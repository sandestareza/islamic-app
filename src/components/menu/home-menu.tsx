import Link from 'next/link'
import { Icon } from "@iconify/react";

const listMenu = [
  {
    name: 'Al-Quran',
    icon: <Icon icon="hugeicons:quran-01" width="28" height="28" />,
    url: '/quran',
  },
  {
    name: 'Juz Amma',
    icon: <Icon icon="la:quran" width="28" height="28" />,
    url: '/juz-amma',
  },
  {
    name: 'Dzikir',
    icon: <Icon icon="game-icons:prayer-beads" width="28" height="28" />,
    url: '/dzikir',
  },
  {
    name: 'Doa Harian',
    icon: <Icon icon="wi:day-fog" width="28" height="28" />,
    url: '/doa-harian',
  },
  {
    name: 'Doa Tahlil',
    icon: <Icon icon="guidance:praying-room" width="28" height="28" />,
    url: '/doa-tahlil',
  },
  {
    name: 'Wirid',
    icon: <Icon icon="healthicons:mosque-outline" width="28" height="28" />,
    url: '/wirid',
  },
  {
    name: 'Asmaul Husna',
    icon: <Icon icon="mdi:religion-islamic" width="28" height="28" />,
    url: '/asmaul-husna',
  },
  {
    name: 'Bahasa Arab',
    icon: <Icon icon="material-symbols:dictionary" width="28" height="28" />,
    url: '/kamus-arab',
  },
]

export default function HomeMenu() { 
  return (
    <div className="relative grid grid-cols-4 justify-center items-center gap-3 my-5 px-3 py-4 bg-white dark:bg-transparent border-2 border-light-primary rounded-lg drop-shadow-custom dark:drop-shadow-dark">
      {listMenu.map((item) => (
        <MenuItem item={item} key={item.name} />
      ))}
    </div>
  )
}

function MenuItem({ item }: any) {
  return (
    <Link href={item?.url} className="flex text-center justify-center items-center flex-col h-16 px-2 shadow-md rounded bg-light-primary cursor-pointer">
      <div className="mx-auto text-white">{item?.icon} </div>
      <div className="text-[11px] whitespace-normal text-center max-w-[51px] leading-3 mt-1 text-white">
        {item?.name}
      </div>
    </Link>
  )
}
