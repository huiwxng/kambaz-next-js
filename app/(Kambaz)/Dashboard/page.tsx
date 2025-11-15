/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import * as client from "../Courses/client";
import { setCourses } from "../Courses/reducer";

export default function Dashboard() {
	const { courses } = useSelector((state: any) => state.coursesReducer);
	const { currentUser } = useSelector((state: any) => state.accountReducer);
	const dispatch = useDispatch();
	const router = useRouter();
	const [allCourses, setAllCourses] = useState<any[]>([]);
	const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
	const [showAllCourses, setShowAllCourses] = useState(false);

	const [course, setCourse] = useState<any>({
		_id: "1234",
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
		description: "New Description",
	});

	const fetchCourses = useCallback(async () => {
		try {
			const courses = await client.findMyCourses();
			dispatch(setCourses(courses));
			setEnrolledCourses(courses);
		} catch (error: any) {
			console.error(error);
			if (error.response?.status === 401) {
				router.push("/Account/Signin");
			}
		}
	}, [dispatch, router]);

	const fetchAllCourses = useCallback(async () => {
		try {
			const allCourses = await client.fetchAllCourses();
			setAllCourses(allCourses);
		} catch (error) {
			console.error(error);
		}
	}, []);

	const onAddNewCourse = async () => {
		const newCourse = await client.createCourse(course);
		dispatch(setCourses([...courses, newCourse]));
		setEnrolledCourses([...enrolledCourses, newCourse]);
	};

	const onDeleteCourse = async (courseId: string) => {
		await client.deleteCourse(courseId);
		const newCourses = courses.filter(
			(course: any) => course._id !== courseId
		);
		dispatch(setCourses(newCourses));
		setEnrolledCourses(newCourses);
	};

	const onUpdateCourse = async () => {
		await client.updateCourse(course);
		dispatch(
			setCourses(
				courses.map((c: any) => {
					if (c._id === course._id) {
						return course;
					} else {
						return c;
					}
				})
			)
		);
	};

	const enrollInCourse = async (courseId: string) => {
		await client.enrollInCourse(courseId);
		fetchCourses();
	};

	const unenrollFromCourse = async (courseId: string) => {
		await client.unenrollFromCourse(courseId);
		fetchCourses();
	};

	const isEnrolled = (courseId: string) => {
		return enrolledCourses.some((course: any) => course._id === courseId);
	};

	useEffect(() => {
		if (currentUser) {
			fetchCourses();
			fetchAllCourses();
		}
	}, [currentUser, fetchCourses, fetchAllCourses]);

	if (!currentUser) {
		return (
			<div id="wd-dashboard">
				<h1>Dashboard</h1>
				<p>Please sign in to view courses.</p>
			</div>
		);
	}

	const displayedCourses = showAllCourses ? allCourses : enrolledCourses;

	return (
		<div id="wd-dashboard">
			<h1 id="wd-dashboard-title">Dashboard</h1>
			<hr />

			{currentUser.role === "FACULTY" && (
				<>
					<h5>New Course</h5>
					<div className="mb-3">
						<input
							value={course.name}
							className="form-control mb-2"
							onChange={(e) =>
								setCourse({ ...course, name: e.target.value })
							}
							placeholder="Course Name"
						/>
						<textarea
							value={course.description}
							className="form-control mb-2"
							onChange={(e) =>
								setCourse({
									...course,
									description: e.target.value,
								})
							}
							placeholder="Course Description"
						/>
						<button
							className="btn btn-primary float-end"
							onClick={onAddNewCourse}
						>
							Add
						</button>
						<button
							className="btn btn-warning float-end me-2"
							onClick={onUpdateCourse}
						>
							Update
						</button>
					</div>
					<hr />
				</>
			)}

			<div className="d-flex justify-content-between align-items-center mb-3">
				<h2 id="wd-dashboard-published">
					{showAllCourses
						? `All Courses (${allCourses.length})`
						: `Enrolled Courses (${enrolledCourses.length})`}
				</h2>
				<button
					className="btn btn-primary"
					onClick={() => setShowAllCourses(!showAllCourses)}
				>
					{showAllCourses
						? "Show Enrolled Courses"
						: "Show All Courses"}
				</button>
			</div>
			<hr />

			<div id="wd-dashboard-courses" className="row">
				<div className="row row-cols-1 row-cols-md-5 g-4">
					{displayedCourses.map((course: any) => (
						<div
							className="wd-dashboard-course col"
							style={{ width: "300px" }}
							key={course._id}
						>
							<div className="card rounded-3 overflow-hidden">
								<div className="card-body">
									<h5 className="wd-dashboard-course-title card-title">
										{course.name}
									</h5>
									<p
										className="wd-dashboard-course-title card-text overflow-y-hidden"
										style={{ maxHeight: 100 }}
									>
										{course.description}
									</p>
									<button
										className="btn btn-primary"
										onClick={() =>
											router.push(
												`/Courses/${course._id}/Home`
											)
										}
									>
										Go
									</button>

									{currentUser.role === "FACULTY" && (
										<>
											<button
												onClick={(event) => {
													event.preventDefault();
													onDeleteCourse(course._id);
												}}
												className="btn btn-danger float-end"
											>
												Delete
											</button>
											<button
												onClick={(event) => {
													event.preventDefault();
													setCourse(course);
												}}
												className="btn btn-warning float-end me-2"
											>
												Edit
											</button>
										</>
									)}

									{currentUser.role === "STUDENT" && (
										<>
											{isEnrolled(course._id) ? (
												<button
													onClick={() =>
														unenrollFromCourse(
															course._id
														)
													}
													className="btn btn-danger float-end"
												>
													Unenroll
												</button>
											) : (
												<button
													onClick={() =>
														enrollInCourse(
															course._id
														)
													}
													className="btn btn-success float-end"
												>
													Enroll
												</button>
											)}
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
