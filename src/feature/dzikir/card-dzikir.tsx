import Card from "@/components/ui/card";
import React from "react";

type Props = {
	title: string;
	arabic: string;
	translation: string;
	source: string;
};
function CardDzikir({ title, arabic, translation, source }: Readonly<Props>) {
	return (<Card title={title} arabic={arabic} translation={translation} source={source} />);
}

export default CardDzikir;
