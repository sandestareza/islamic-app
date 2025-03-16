import { Metadata } from "next"

const title = "Islamic App"
const description =
  "App islamic yang berisi quran dan doa, jadwal sholat, dan informasi seputar islam"

export const sharedMetadata: Metadata = {
  metadataBase: new URL("https://islamic-app.my.id"),
  keywords: "islamic, quran, al-quran, quranku, my islamic app",
  title: {
    default: `${title}`,
    template: `%s`,
  },
  openGraph: {
    locale: 'id_ID',
    type: "website",
    title: `${title}`,
    description: `${description}`,
    siteName: `IslamicApp`,
    images: [
      {
        url: `/images/bg-main.png`,
      },
    ],
  },
  icons: [
    { rel: "icon", url: "/favicon.svg" },
  ],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  description: `${description}`,
  authors: [{ name: "IslamicApp", url: "https://islamic-app.my.id" }],
}
