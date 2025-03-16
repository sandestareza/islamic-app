import Headers from '@/components/layout/headers'
import HomeMenu from '@/components/menu/home-menu'
import CardBookmark from '@/feature/bookmark/card-bookmark'
import CardQuote from '@/feature/quotes/card-quote'

export default async function Home() {
  

  return (
    <div className="flex flex-col items-center justify-center">
      <Headers title="Islamic App" />
      <main className="px-[20px] w-full">
        <CardBookmark />
        <HomeMenu />
        <CardQuote />
      </main>
    </div>
  )
}
