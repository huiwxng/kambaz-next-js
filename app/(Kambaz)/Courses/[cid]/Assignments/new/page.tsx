"use client";

import {
	Container,
	Form,
	FormLabel,
	FormControl,
	FormSelect,
	FormCheck,
	Row,
	Col,
	Button,
} from "react-bootstrap";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addAssignment } from "../reducer";

export default function NewAssignmentEditor() {
	const { cid } = useParams();
	const router = useRouter();
	const dispatch = useDispatch();

	const [assignment, setAssignment] = useState({
		title: "New Assignment",
		points: 100,
		due: "2025-05-13",
		availableFrom: "2025-05-06",
		availableUntil: "2025-05-20",
		description: `The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`,
	});

	const handleSave = () => {
		dispatch(
			addAssignment({
				...assignment,
				course: cid as string,
				available: `${assignment.availableFrom} at 12:00am`,
				due: `${assignment.due} at 11:59pm`,
			})
		);
		router.push(`/Courses/${cid}/Assignments`);
	};

	const handleCancel = () => {
		router.push(`/Courses/${cid}/Assignments`);
	};

	return (
		<Container id="wd-assignments-editor" className="px-0">
			<Form>
				<div className="mb-3">
					<FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
					<FormControl
						id="wd-name"
						value={assignment.title}
						onChange={(e) =>
							setAssignment({
								...assignment,
								title: e.target.value,
							})
						}
					/>
				</div>

				<div className="mb-4">
					<FormLabel htmlFor="wd-description">Description</FormLabel>
					<FormControl
						as="textarea"
						rows={10}
						id="wd-description"
						value={assignment.description}
						onChange={(e) =>
							setAssignment({
								...assignment,
								description: e.target.value,
							})
						}
					/>
				</div>

				<Row className="mb-3">
					<Col md={3} className="text-md-end">
						<FormLabel htmlFor="wd-points" className="mb-0">
							Points
						</FormLabel>
					</Col>
					<Col md={9}>
						<FormControl
							id="wd-points"
							type="number"
							value={assignment.points}
							onChange={(e) =>
								setAssignment({
									...assignment,
									points:
										Number.parseInt(e.target.value) || 0,
								})
							}
						/>
					</Col>
				</Row>

				<Row className="mb-3">
					<Col md={3} className="text-md-end">
						<FormLabel htmlFor="wd-group" className="mb-0">
							Assignment Group
						</FormLabel>
					</Col>
					<Col md={9}>
						<FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
							<option value="ASSIGNMENTS">ASSIGNMENTS</option>
							<option value="QUIZZES">QUIZZES</option>
							<option value="EXAMS">EXAMS</option>
							<option value="PROJECT">PROJECT</option>
						</FormSelect>
					</Col>
				</Row>

				<Row className="mb-3">
					<Col md={3} className="text-md-end">
						<FormLabel
							htmlFor="wd-display-grade-as"
							className="mb-0"
						>
							Display Grade as
						</FormLabel>
					</Col>
					<Col md={9}>
						<FormSelect
							id="wd-display-grade-as"
							defaultValue="Percentage"
						>
							<option value="Percentage">Percentage</option>
							<option value="Points">Points</option>
							<option value="Letter">Letter</option>
						</FormSelect>
					</Col>
				</Row>

				<Row className="mb-4">
					<Col md={3} className="text-md-end">
						<FormLabel
							htmlFor="wd-submission-type"
							className="mb-0"
						>
							Submission Type
						</FormLabel>
					</Col>
					<Col md={9}>
						<div className="border rounded p-3">
							<FormSelect
								id="wd-submission-type"
								defaultValue="Online"
								className="mb-3"
							>
								<option value="Online">Online</option>
								<option value="On Paper">On Paper</option>
								<option value="No Submission">
									No Submission
								</option>
							</FormSelect>

							<div className="fw-semibold mb-2">
								Online Entry Options
							</div>
							<FormCheck
								id="wd-text-entry"
								type="checkbox"
								label="Text Entry"
							/>
							<FormCheck
								id="wd-website-url"
								type="checkbox"
								label="Website URL"
								defaultChecked
							/>
							<FormCheck
								id="wd-media-recordings"
								type="checkbox"
								label="Media Recordings"
							/>
							<FormCheck
								id="wd-student-annotation"
								type="checkbox"
								label="Student Annotation"
							/>
							<FormCheck
								id="wd-file-upload"
								type="checkbox"
								label="File Uploads"
							/>
						</div>
					</Col>
				</Row>

				<Row className="mb-4">
					<Col md={3} className="text-md-end">
						<FormLabel className="mb-0">Assign</FormLabel>
					</Col>
					<Col md={9}>
						<div className="border rounded p-3">
							<div className="mb-3">
								<FormLabel
									htmlFor="wd-assign-to"
									className="fw-semibold"
								>
									Assign to
								</FormLabel>
								<FormControl
									id="wd-assign-to"
									defaultValue="Everyone"
								/>
							</div>

							<div className="mb-3">
								<FormLabel
									htmlFor="wd-due-date"
									className="fw-semibold"
								>
									Due
								</FormLabel>
								<FormControl
									id="wd-due-date"
									type="date"
									value={assignment.due}
									onChange={(e) =>
										setAssignment({
											...assignment,
											due: e.target.value,
										})
									}
								/>
							</div>

							<Row className="g-3">
								<Col>
									<FormLabel
										htmlFor="wd-available-from"
										className="fw-semibold"
									>
										Available from
									</FormLabel>
									<FormControl
										id="wd-available-from"
										type="date"
										value={assignment.availableFrom}
										onChange={(e) =>
											setAssignment({
												...assignment,
												availableFrom: e.target.value,
											})
										}
									/>
								</Col>
								<Col>
									<FormLabel
										htmlFor="wd-available-until"
										className="fw-semibold"
									>
										Until
									</FormLabel>
									<FormControl
										id="wd-available-until"
										type="date"
										value={assignment.availableUntil}
										onChange={(e) =>
											setAssignment({
												...assignment,
												availableUntil: e.target.value,
											})
										}
									/>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				<hr className="mb-3" />

				<div className="text-end">
					<Button
						variant="secondary"
						className="me-2"
						onClick={handleCancel}
					>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleSave}>
						Save
					</Button>
				</div>
			</Form>
		</Container>
	);
}
