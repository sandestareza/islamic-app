"use client"

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Icon } from "@iconify/react";

type HeaderProps = {
  isFixed?: boolean
  isBack?: boolean
  title: string
}

export default function Headers({
  isFixed,
  isBack = false,
  title,
}: HeaderProps) {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <header
      className={cn(
        `w-full flex bg-white dark:bg-dark-primary top-0 h-[52px] px-5 py-[14px] mb-[2px] z-10`,
        isFixed ? 'fixed shadow-md dark:drop-shadow-dark left-0' : 'relative'
      )}
    >
      {isBack && (
        <button className="relative" onClick={handleClick}>
          <Icon icon="ooui:previous-ltr" width="20" height="20" className='text-light-primary' />
        </button>
      )}
      <div className="mx-auto">
        <div className="absolute left-[50%] translate-x-[-50%] text-base font-bold text-light-primary dark:text-white line-clamp-1 text-nowrap">
          {title}
        </div>
      </div>
    </header>
  )
}
