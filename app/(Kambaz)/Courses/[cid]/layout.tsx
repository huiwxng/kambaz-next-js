"use client";
import { ReactNode, useState, useEffect } from "react";
import CourseNavigation from "./Navigation";
import EnrollmentProtectedRoute from "../../components/EnrollmentProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import * as client from "../client";
import { setModules } from "./Modules/reducer";

export default function CoursesLayout({ children }: { children: ReactNode }) {
	const { cid } = useParams();
	const { courses } = useSelector(
		(state: {
			coursesReducer: { courses: { _id: string; name?: string }[] };
		}) => state.coursesReducer
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!cid) return;
		const fetchModules = async () => {
			try {
				const modules = await client.findModulesForCourse(
					cid as string
				);
				dispatch(setModules(modules));
			} catch (err) {
				console.error("Failed to fetch modules for course", cid, err);
			}
		};

		fetchModules();
	}, [cid, dispatch]);
	const course = courses.find(
		(course: { _id: string }) => course._id === cid
	);

	// State to toggle navigation visibility
	const [showNavigation, setShowNavigation] = useState(true);

	return (
		<EnrollmentProtectedRoute>
			<div id="wd-courses">
				<h2>
					<FaAlignJustify
						className="me-4 fs-4 mb-1"
						style={{ cursor: "pointer" }}
						onClick={() => setShowNavigation(!showNavigation)}
					/>
					{course?.name}
				</h2>
				<hr />
				<div className="d-flex">
					{showNavigation && (
						<div>
							<CourseNavigation />
						</div>
					)}
					<div className="flex-fill">{children}</div>
				</div>
			</div>
		</EnrollmentProtectedRoute>
	);
}
