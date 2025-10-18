"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
	const { cid } = useParams();
	const pathname = usePathname();
	const links = [
		"Home",
		"Modules",
		"Piazza",
		"Zoom",
		"Assignments",
		"Quizzes",
		"Grades",
		"People",
	];

	return (
		<div
			id="wd-courses-navigation"
			className="wd list-group fs-5 rounded-0"
		>
			{links.map((label) => {
				const href = `/Courses/${cid}/${
					label === "People" ? "People/Table" : label
				}`;
				const active = pathname?.startsWith(href);
				return (
					<Link
						key={label}
						href={href}
						className={`list-group-item border-0 ${
							active ? "active" : "text-danger"
						}`}
					>
						{label}
					</Link>
				);
			})}
		</div>
	);
}
