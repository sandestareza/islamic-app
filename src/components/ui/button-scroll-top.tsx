"use client"

import { useCallback, useEffect, useState } from "react"
import { Icon } from "@iconify/react"
export default function ButtonScrollTop() {
  const [showButton, setShowButton] = useState(false)

  const smoothScroll = useCallback(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  useEffect(() => {
    smoothScroll()
  }, [smoothScroll])

  return <>
    {showButton && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed p-3 rounded-full bottom-5 right-5 text-lg bg-light-primary drop-shadow-custom dark:drop-shadow-dark"
      >
        <Icon icon="lets-icons:arrow-top-long" width="24" height="24" className="text-white" />
      </button>
    )}
  </>
}