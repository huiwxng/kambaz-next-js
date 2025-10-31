import { useState, type MouseEvent } from "react";
export default function EventObject() {
	const [event, setEvent] = useState<Record<string, unknown> | null>(null);
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const targetHtml = (e.target as HTMLElement)?.outerHTML ?? null;
		const eventObj: Record<string, unknown> = {
			type: e.type,
			target: targetHtml,
			timeStamp: e.timeStamp,
			currentTarget: (e.currentTarget as HTMLElement)?.outerHTML ?? null,
		};
		setEvent(eventObj);
	};
	return (
		<div>
			<h2>Event Object</h2>
			<button
				onClick={(e) => handleClick(e)}
				className="btn btn-primary"
				id="wd-display-event-obj-click"
			>
				Display Event Object
			</button>
			<pre>{JSON.stringify(event, null, 2)}</pre>
			<hr />
		</div>
	);
}
