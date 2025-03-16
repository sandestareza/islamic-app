import React from "react";
type Props = {
	title?: string | null;
	arabic: string;
	translation: string;
	source?: string | null;
};
function Card({ title, arabic, translation, source = null }: Readonly<Props>) {
	return (
		<div className="relative flex flex-col mb-5 px-3 py-4 gap-6 bg-white dark:bg-[#3D3D3D] rounded-lg drop-shadow-custom dark:drop-shadow-dark overflow-hidden">
			<div className="my-auto">
				{title && (
					<div className="font-normal text-xs mb-[9px] dark:text-white text-[#81818B]">
						{title}
					</div>
				)}
				<div className="text-light-primary dark:text-white text-2xl font-bold font-display arab mb-3 leading-[52px]">
					{arabic}
				</div>
				<div className="text-light-secondary text-balance dark:text-white text-xs leading-[18px]">
					{translation}
				</div>
				{source && (
					<div className="text-[#81818B] mt-2 font-medium dark:text-white text-[11px] leading-[14px]">
						{source.split("\n").map((line, lineIndex) => (
							<React.Fragment key={lineIndex}>
								{line}
								{lineIndex < source.split("\n").length - 1 && (
									<br />
								)}
							</React.Fragment>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Card;
