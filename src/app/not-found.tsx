import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center px-[20px]">
			<div className="relative w-full mb-3 mt-[52px]"></div>
			<div className="flex flex-col justify-center items-center w-full mt-[40px] text-center mb-6">
        <Icon icon="twemoji:mosque" width="136" height="136" />
        <p className="text-5xl font-bold mt-3">404</p>
				<div className="my-3 font-semibold text-sm">
					Halaman Tidak Ditemukan
				</div>
				<div className="text-xs text-light-secondary dark:text-white italic">
					“Tunjukilah kami jalan yang lurus.” <br />
					(QS. Al-Fatihah: 6)
				</div>
				<Link
					href="/"
					className="bg-light-primary p-3 mx-auto rounded-lg max-w-min text-xs font-medium text-white mt-4"
				>
					Kembali
				</Link>
			</div>
		</div>
	);
}
