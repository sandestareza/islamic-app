"use client";

import Image from "next/image";
import storageKey from "@/constant/storage-key";
import { setItem } from "@/utils/storage";
import type { Surah } from "@/types/Surah";
import { useEffect, useState } from "react";
import InputSearch from "@/components/ui/input-search";
import { Icon } from "@iconify/react";

type verseProps = {
	numberSurah: string;
	surah: Surah;
	verse: string;
	translations: {
		id: {
			name: string;
			text: any;
		};
	};
};

export default function Verse({
	numberSurah,
	surah,
	verse,
	translations,
}: verseProps) {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const setLastReadVerse = (
		numberSurah: string,
		surah: Surah,
		verse: string
	) => {
		const data: any = { numberSurah, surah, verse };
		setItem(storageKey.LAST_READ, data, storageKey.VERSION);
		if (isOpen) {
			return setIsOpen(true);
		}
		setIsOpen(true);
	};

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => setIsOpen(false), 3000);
		}
	}, [isOpen]);

	return (
		<>
			<InputSearch
				handleChange={(event) => setQuery(event.target.value)}
				placeholder="Cari ayat (Masukkan angka)..."
				onlyNumber
			/>
			{Object.keys(verse)
				.filter((text: any) => {
					if (query === "") {
						return text;
					} else if (text.includes(query)) {
						return text;
					}
				})
				.map((text: any, index: any) => (
					<div
						key={index}
						id={index + 1}
						className="relative flex flex-col mb-5 px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark"
					>
						<div className="flex mb-2">
							<div
								className="flex-shrink-0 mr-5 my-auto rounded-full w-7 h-7 text-center border border-light-primary 
          text-xs text-light-primary flex justify-center"
							>
								<span className="my-auto">{text}</span>
							</div>
							<button
								className="ml-auto"
								onClick={() =>
									setLastReadVerse(numberSurah, surah, text)
								}
							>
								<Icon icon="fe:bookmark" width="20" height="20" className="text-light-primary" />
							</button>
						</div>
						<div className="my-auto">
							<div className="text-light-primary dark:text-white text-2xl font-bold font-display arab mb-3 leading-[52px]">
								{verse[text]}
							</div>
							<div className="text-light-secondary dark:text-white text-xs leading-[18px]">
								{translations.id.text[text]}
							</div>
						</div>
					</div>
				))}
			{isOpen && (
				<div
					className="fixed w-fit left-1/2 -translate-x-1/2 translate-y-1/2 
    bottom-[50px] transition duration-300 text-white bg-light-primary 
    rounded-md px-5 py-4 z-50"
				>
					<div className="flex items-center space-x-2">
						<svg
							className="w-7 h-7"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="3"
								d="M5 13l4 4L19 7"
							></path>
						</svg>
						<p className="font-semibold text-sm whitespace-nowrap">
							Berhasil menandai terakhir dibaca
						</p>
					</div>
				</div>
			)}
		</>
	);
}
