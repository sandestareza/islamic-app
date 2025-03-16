'use client'

import Skelton from "@/components/ui/skelton";
import React, { useEffect, useState } from "react";

type TQuotes = {
  translation: string;
  reference?: string;
}
export default function CardQuote() {

  const [quotes, setQuotes] = useState<TQuotes>({
    translation: "",
    reference: "",
  })
  const [loading, setLoading] = useState(true)
  
  const getQuote = async () => {
    setLoading(true)
    try {
      const res = await import(`@/data/quotes.json`);
      const data = res.data.filter((item: any) => item.type === "verse");
      const randomIndex = Math.floor(Math.random() * data.length);
      setTimeout(() => {
        setQuotes({
          translation: data[randomIndex].translation,
          reference: data[randomIndex]?.reference ?? ""
        });      
        
      }, 800);
    } catch (error) {
      console.log(error); 
    }
    setLoading(false)     
  }

  useEffect(() => {
    getQuote();
  }, [])
  
 if (loading) {
    return <Skelton/>
 }

	return (
		<blockquote  className="text-center flex flex-col items-center gap-3 mb-3">
			<p className="text-xs text-light-secondary dark:text-white italic">
				{quotes.translation}
			</p>
      <p className="text-xs text-light-primary font-bold dark:text-white">{quotes?.reference}</p>
		</blockquote>
	);
}
