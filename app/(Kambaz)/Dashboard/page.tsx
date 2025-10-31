"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollInCourse, unenrollFromCourse } from "../Enrollments/reducer";
import Link from "next/link";
import {
	Row,
	Col,
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardBody,
	Button,
	FormControl,
} from "react-bootstrap";

interface Course {
	_id: string;
	name: string;
	number: string;
	startDate: string;
	endDate: string;
	image: string;
	description: string;
}

interface User {
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
}

interface Enrollment {
	_id: string;
	user: string;
	course: string;
}

interface RootState {
	accountReducer: {
		currentUser: User | null;
	};
	coursesReducer: {
		courses: Course[];
	};
	enrollmentsReducer: {
		enrollments: Enrollment[];
	};
}

export default function Dashboard() {
	const { currentUser } = useSelector(
		(state: RootState) => state.accountReducer
	);
	const { courses } = useSelector((state: RootState) => state.coursesReducer);
	const { enrollments } = useSelector(
		(state: RootState) => state.enrollmentsReducer
	);
	const dispatch = useDispatch();

	const [showAllCourses, setShowAllCourses] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Keep course form state local
	const [course, setCourse] = useState<Course>({
		_id: "0",
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
		image: "/images/reactjs.jpg",
		description: "New Description",
	});

	const isEnrolled = (courseId: string) => {
		if (!currentUser) return false;
		return enrollments.some(
			(enrollment) =>
				enrollment.user === currentUser._id &&
				enrollment.course === courseId
		);
	};

	const handleEnroll = (courseId: string) => {
		if (currentUser) {
			dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
		}
	};

	const handleUnenroll = (courseId: string) => {
		if (currentUser) {
			dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
		}
	};

	const displayedCourses = showAllCourses
		? courses
		: courses.filter((course) => isEnrolled(course._id));

	const isFaculty =
		currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

	if (!mounted) {
		return <div>Loading...</div>;
	}

	return (
		<div className="p-4" id="wd-dashboard">
			<h1 id="wd-dashboard-title">Dashboard</h1>
			<Button
				className="float-end mb-3"
				variant="primary"
				onClick={() => setShowAllCourses(!showAllCourses)}
			>
				Enrollments
			</Button>
			<hr />
			{isFaculty && (
				<>
					<h5>
						New Course
						<Button
							className="float-end"
							id="wd-add-new-course-click"
							onClick={() => dispatch(addNewCourse(course))}
							variant="primary"
						>
							Add
						</Button>
						<Button
							className="float-end me-2"
							onClick={() => dispatch(updateCourse(course))}
							id="wd-update-course-click"
							variant="warning"
						>
							Update
						</Button>
					</h5>
					<br />
					<FormControl
						value={course.name}
						className="mb-2"
						onChange={(e) =>
							setCourse({ ...course, name: e.target.value })
						}
						placeholder="Course Name"
					/>
					<FormControl
						value={course.description}
						as="textarea"
						rows={3}
						onChange={(e) =>
							setCourse({
								...course,
								description: e.target.value,
							})
						}
						placeholder="Course Description"
					/>
					<hr />
				</>
			)}
			<h2 id="wd-dashboard-published">
				{showAllCourses
					? `All Courses (${courses.length})`
					: `My Courses (${displayedCourses.length})`}
			</h2>
			<hr />
			<div id="wd-dashboard-courses">
				<Row xs={1} md={5} className="g-4">
					{displayedCourses.map((course: Course) => (
						<Col
							key={course._id}
							className="wd-dashboard-course"
							style={{ width: "300px" }}
						>
							<Card>
								<Link
									href={`/Courses/${course._id}/Home`}
									className="wd-dashboard-course-link text-decoration-none text-dark"
								>
									<CardImg
										src="/images/reactjs.jpg"
										variant="top"
										width="100%"
										height={160}
									/>
								</Link>
								<CardBody className="card-body">
									<Link
										href={`/Courses/${course._id}/Home`}
										className="wd-dashboard-course-link text-decoration-none text-dark"
									>
										<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
											{course.name}
										</CardTitle>
										<CardText
											className="wd-dashboard-course-description overflow-hidden"
											style={{ height: "100px" }}
										>
											{course.description}
										</CardText>
									</Link>

									{isEnrolled(course._id) ? (
										<>
											<Link
												href={`/Courses/${course._id}/Home`}
											>
												<Button variant="primary">
													Go
												</Button>
											</Link>
											{showAllCourses && (
												<Button
													variant="danger"
													className="float-end"
													onClick={() =>
														handleUnenroll(
															course._id
														)
													}
												>
													Unenroll
												</Button>
											)}
										</>
									) : (
										<Button
											variant="success"
											onClick={() =>
												handleEnroll(course._id)
											}
										>
											Enroll
										</Button>
									)}

									{isFaculty && (
										<>
											<Button
												onClick={() =>
													setCourse(course)
												}
												className="btn btn-warning me-2 float-end"
												id="wd-edit-course-click"
											>
												Edit
											</Button>
											<Button
												onClick={() =>
													dispatch(
														deleteCourse(course._id)
													)
												}
												className="btn btn-danger float-end"
												id="wd-delete-course-click"
											>
												Delete
											</Button>
										</>
									)}
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
}
