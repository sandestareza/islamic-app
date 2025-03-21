import Image from "next/image";
import Header from "@/components/layout/headers";
import Verse from "@/feature/quran/verse";
import surahInfo from "@/data/surah-info.json";
import { SurahInfo } from "@/types/SurahInfo";

export async function generateStaticParams() {
  return surahInfo.surah_info.map((item: SurahInfo) => ({
    id: item.index.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const res = await import(`@/data/surah/${id}.json`);
  const surah = res[id];
  return {
    title: `${surah.name_latin} - Quranku`,
  };
}

export default async function SurahPage({ params }: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  const res = await import(`@/data/surah/${id}.json`);
  const surah = res[id];
  const isSpecial = parseInt(surah.number) !== 1 && parseInt(surah.number) !== 9;

  return (
    <>
      <Header isFixed={true} isBack={true} title={surah.name_latin} />
      <div className="flex flex-col items-center justify-center px-[20px]">
        <div className="relative w-full mb-6 mt-[68px]">
          <div
            className="bg-detailsurah pt-4 pb-3"
            style={{
              background: "linear-gradient(135deg, #578FCA 0%, #3674B5 100%)",
              borderRadius: "8px",
            }}
          >
            <div className="text-center align-middle">
              <div className="font-bold text-xl mb-[3px] text-white">
                {surah.name_latin}
              </div>
              <div className="text-xs text-white mb-[10px]">
                {surah.translations.id.name}, {surah.number_of_ayah} ayat
              </div>
              {isSpecial && (
                <>
                  <hr className="w-[220px] mx-auto mb-3" />
                  <Image
                    className="rounded-lg mx-auto"
                    src="/images/bismillah.svg"
                    width={142}
                    height={32}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col relative w-full">
          <Verse
            numberSurah={surah.number}
            surah={surah.name_latin}
            verse={surah.text}
            translations={surah.translations}
          />
        </div>
      </div>
    </>
  );
}