"use clint";

import React from "react";
import { Icon } from "@iconify/react";

type Props = {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onlyNumber?: boolean;
	placeholder?: string;
};
function InputSearch({ handleChange, onlyNumber = false, placeholder = "Cari..." }: Readonly<Props>) {
	return (
		<div className="relative flex my-6 drop-shadow-custom dark:drop-shadow-dark">
			<Icon icon="ic:round-search" width="18" height="18" className="flex absolute left-2 top-1/2 -translate-y-1/2 text-light-primary" />
			{onlyNumber ? (
				<input
					type="text"
					onChange={handleChange}
					onKeyPress={(e) =>
						!/[0-9]/.test(e.key) && e.preventDefault()
					}
					className="text-sm text-light-primary dark:text-white rounded-lg appearance-none focus:outline-none focus:shadow-outline pl-8 px-4 py-2 w-full bg-white dark:bg-[#3D3D3D] placeholder:text-sm"
					placeholder={placeholder}
				/>
			) : (
				<input
					type="text"
					onChange={handleChange}
					className="text-sm text-light-primary dark:text-white rounded-lg appearance-none focus:outline-none focus:shadow-outline pl-8 px-4 py-2 w-full bg-white dark:bg-[#3D3D3D] placeholder:text-sm"
					placeholder={placeholder}
				/>
			)}
		</div>
	);
}

export default InputSearch;
