export interface DoaInfoItem {
  title: string
  slug: string
  arabic: string
  latin: string
  translation: string
  source: string
}

export interface DoaInfo {
  title: string
  slug: string
}

export interface DoaInfoJson {
  doa_info: DoaInfo[],
}

export interface DzikirItem {
  title: string
  arabic: string
  translation: string
  source: string
}

export interface TeksArabItem {
  arabic: string
  latin: string
  translation: string
}
export interface TahlilItem {
  arabic: string
  title: string
  translation: string
}
export interface AsmaulhusnaItem {
  index: string
  arabic: string
  latin: string
  translation_id: string
  translation_en: string
}
export interface WiridItem {
  id: number
  arabic: string
  times: number
  tnc: string
}