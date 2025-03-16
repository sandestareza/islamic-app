import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import { WiridItem } from '@/types/DoaInfo';
import React from 'react'

export default function CardWirid({
	data
}: Readonly<{ data: WiridItem[] }>) {
	return (
		<Container>
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col relative w-full">
					{data.map((item: WiridItem, index: number) => (
						<Card
							key={index}
							arabic={item.arabic}
							translation={item.tnc}
              title={item.times.toString() + "x"}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
