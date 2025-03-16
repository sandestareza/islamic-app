import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
type Props = {
	name: string;
	url: string;
};
function CardLink({ name, url }: Readonly<Props>) {
	return (
		<Link href={url}>
			<div className="relative flex px-3 py-4 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark cursor-pointer">
				<div className="me-auto text-xs font-medium text-light-primary">
					{name}
				</div>
				<Icon
					icon="material-symbols:navigate-next"
					width="12"
					height="12"
					className="my-auto text-light-primary dark:invert-[1] dark:brightness-100"
				/>
			</div>
		</Link>
	);
}

export default CardLink;
