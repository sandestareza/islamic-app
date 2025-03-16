import React from "react";

export default function Container({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <div className="pt-16 px-4">{children}</div>;
}
