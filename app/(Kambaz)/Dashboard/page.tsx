/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
	Row,
	Col,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	Button,
	FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { setEnrollments } from "../Enrollments/reducer";
import { setCourses } from "../Courses/reducer";
import * as client from "../Courses/client";

export default function Dashboard() {
	const dispatch = useDispatch();

	const { currentUser } = useSelector((state: any) => state.accountReducer);
	const { enrollments } = useSelector(
		(state: any) => state.enrollmentsReducer
	);
	const { courses } = useSelector((state: any) => state.coursesReducer);

	const [showAllCourses, setShowAllCourses] = useState(false);

	const [course, setCourse] = useState<any>({
		_id: "0",
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
		image: "/images/reactjs.png",
		description: "New Description",
	});

	if (!currentUser) {
		return (
			<div id="wd-dashboard">
				<h1>Dashboard</h1>
				<p>Please sign in to view the dashboard.</p>
			</div>
		);
	}

	const isFaculty = currentUser.role === "FACULTY";

	const isUserEnrolled = (courseId: string) =>
		enrollments.some(
			(enrollment: any) =>
				enrollment &&
				enrollment.user &&
				enrollment.user._id === currentUser._id &&
				((typeof enrollment.course === "string" &&
					enrollment.course === courseId) ||
					(enrollment.course && enrollment.course._id === courseId))
		);

	const fetchCourses = async () => {
		const allCourses = await client.fetchAllCourses();
		dispatch(setCourses(allCourses));
	};

	const fetchEnrollments = async () => {
		const userEnrollments = await client.findEnrollmentsForUser(
			currentUser._id
		);
		dispatch(setEnrollments(userEnrollments));
	};

	const handleEnroll = async (courseId: string) => {
		await client.enrollInCourse(currentUser._id, courseId);
		await fetchEnrollments();
	};

	const handleUnenroll = async (courseId: string) => {
		await client.unenrollFromCourse(currentUser._id, courseId);
		await fetchEnrollments();
	};

	const handleAddCourse = async () => {
		const newCourse = { ...course, _id: uuidv4() };

		await client.createCourse(newCourse);
		await client.enrollInCourse(currentUser._id, newCourse._id);

		await fetchCourses();
		await fetchEnrollments();

		setShowAllCourses(true);

		// reset form
		setCourse({
			_id: "0",
			name: "New Course",
			number: "New Number",
			startDate: "2023-09-10",
			endDate: "2023-12-15",
			image: "/images/reactjs.png",
			description: "New Description",
		});
	};

	const handleDeleteCourse = async (courseId: string) => {
		await client.deleteCourse(courseId);
		await fetchCourses();
	};

	const handleUpdateCourse = async () => {
		await client.updateCourse(course);
		await fetchCourses();
	};

	useEffect(() => {
		if (!currentUser) return;
		(async () => {
			await fetchEnrollments();
			await fetchCourses();
		})();
	}, [currentUser]);

	const coursesToDisplay = showAllCourses
		? courses
		: courses.filter((c: any) => isUserEnrolled(c._id));

	return (
		<div id="wd-dashboard">
			<h1 id="wd-dashboard-title">Dashboard</h1>
			<hr />

			{isFaculty && (
				<>
					<h5>
						New Course
						<Button
							className="float-end"
							id="wd-add-new-course-click"
							onClick={handleAddCourse}
						>
							Add
						</Button>
						<Button
							variant="warning"
							className="float-end me-2"
							id="wd-update-course-click"
							onClick={handleUpdateCourse}
						>
							Update
						</Button>
					</h5>

					<FormControl
						value={course.name}
						className="mb-2"
						onChange={(e) =>
							setCourse({ ...course, name: e.target.value })
						}
						placeholder="Course name"
					/>

					<FormControl
						value={course.description}
						as="textarea"
						className="mb-2"
						onChange={(e) =>
							setCourse({
								...course,
								description: e.target.value,
							})
						}
						placeholder="Course description"
					/>

					<hr />
				</>
			)}

			<h2 id="wd-dashboard-published">
				Published Courses ({coursesToDisplay.length})
				<Button
					variant="primary"
					className="float-end"
					id="wd-enrollments-btn"
					onClick={() => setShowAllCourses(!showAllCourses)}
				>
					{showAllCourses
						? "Show Enrolled Courses"
						: "Show All Courses"}
				</Button>
			</h2>

			<hr />

			<div id="wd-dashboard-courses">
				<Row xs={1} md={5} className="g-4">
					{coursesToDisplay.map((c: any) => {
						const enrolled = isUserEnrolled(c._id);

						return (
							<Col
								key={c._id}
								className="wd-dashboard-course"
								style={{ width: "300px" }}
							>
								<Card>
									<Link
										href={`/Courses/${c._id}/Home`}
										className="wd-dashboard-course-link text-decoration-none text-dark"
										onClick={(e) => {
											if (!enrolled && !isFaculty) {
												const target =
													e.target as HTMLElement;
												if (!target.closest("button")) {
													e.preventDefault();
													alert(
														"You must be enrolled in this course to access it."
													);
												}
											}
										}}
									>
										<CardImg
											src={
												c.image || "/images/reactjs.png"
											}
											variant="top"
											width="100%"
											height={160}
										/>

										<CardBody>
											<CardTitle className="text-nowrap overflow-hidden">
												{c.name}
											</CardTitle>

											<CardText
												className="overflow-hidden"
												style={{ height: "100px" }}
											>
												{c.description}
											</CardText>

											<Button variant="primary">
												Go
											</Button>

											{isFaculty && (
												<>
													<Button
														variant="danger"
														className="float-end"
														id="wd-delete-course-click"
														onClick={(e) => {
															e.preventDefault();
															handleDeleteCourse(
																c._id
															);
														}}
													>
														Delete
													</Button>

													<Button
														variant="warning"
														className="float-end me-2"
														id="wd-edit-course-click"
														onClick={(e) => {
															e.preventDefault();
															setCourse(c);
														}}
													>
														Edit
													</Button>
												</>
											)}

											{showAllCourses && !isFaculty && (
												<>
													{enrolled ? (
														<Button
															variant="danger"
															className="float-end"
															onClick={(e) => {
																e.preventDefault();
																handleUnenroll(
																	c._id
																);
															}}
														>
															Unenroll
														</Button>
													) : (
														<Button
															variant="success"
															className="float-end"
															onClick={(e) => {
																e.preventDefault();
																handleEnroll(
																	c._id
																);
															}}
														>
															Enroll
														</Button>
													)}
												</>
											)}
										</CardBody>
									</Link>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
}
