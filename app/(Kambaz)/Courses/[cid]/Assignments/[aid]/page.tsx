// app/(Kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx
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
import * as db from "../../../../Database/page";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
	const { cid, aid } = useParams();
	const a = db.assignments.find((x) => x._id === aid && x.course === cid);

	const title = a?.title ?? "Assignment";
	const points = a?.points ?? 100;
	const due = a?.due ?? "2025-05-13";
	const availableFrom = a?.availableFrom ?? a?.available ?? "2025-05-06";
	const availableUntil = a?.availableUntil ?? "2025-05-20";
	const description =
		a?.description ??
		`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`;

	return (
		<Container id="wd-assignments-editor" className="px-0">
			<Form>
				<div className="mb-3">
					<FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
					<FormControl id="wd-name" defaultValue={title} />
				</div>

				<div className="mb-4">
					<div
						id="wd-description"
						className="border rounded p-3 pt-4"
						style={{ whiteSpace: "pre-wrap" }}
					>
						{description}
					</div>
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
							defaultValue={points}
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
									defaultValue={String(due).slice(0, 10)}
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
										defaultValue={String(
											availableFrom
										).slice(0, 10)}
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
										defaultValue={String(
											availableUntil
										).slice(0, 10)}
									/>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				<hr className="mb-3" />

				<div className="text-end">
					<Link
						href={`/Courses/${cid}/Assignments`}
						className="btn btn-secondary me-2"
					>
						Cancel
					</Link>
					<Link
						href={`/Courses/${cid}/Assignments`}
						className="btn btn-danger"
					>
						Save
					</Link>
				</div>
			</Form>
		</Container>
	);
}
