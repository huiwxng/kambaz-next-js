import React, { ReactNode } from "react";
export default function Square({ children }: Readonly<{ children: ReactNode }>) {
	const num = Number(children);
	return <span id="wd-square">{num * num}</span>;
}
