"use client";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsSearchBar from "./AssignmentsSearchBar";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentEndButtons from "./AssignmentEndButtons";
import AssignmentStartButtons from "./AssignmentStartButtons";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function Assignments() {
	const { cid } = useParams();
	const assignments = db.assignments.filter((a) => a.course === cid);
	return (
		<div id="wd-assignments">
			<Row>
				<Col>
					<AssignmentsSearchBar />
				</Col>
				<Col xs="auto">
					<AssignmentsControls />
				</Col>
			</Row>

			<ListGroup className="rounded-0" id="wd-modules">
				<ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
					<div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
						<BsGripVertical className="me-2 fs-3" />
						<span className="me-auto">ASSIGNMENTS</span>
						<AssignmentsControlButtons />
					</div>

					<ListGroup className="wd-lessons rounded-0">
						{assignments.length === 0 ? (
							<ListGroupItem className="wd-lesson p-3 ps-1 text-muted">
								No assignments for this course.
							</ListGroupItem>
						) : (
							assignments.map((a) => (
								<ListGroupItem
									key={a._id}
									className="wd-lesson p-3 ps-1"
								>
									<Row className="align-items-center">
										<Col xs="auto">
											<AssignmentStartButtons />
										</Col>
										<Col>
											<div>
												<Link
													href={`/Courses/${cid}/Assignments/${a._id}`}
													className="wd-assignment-link text-decoration-none"
												>
													<h3 className="text-black m-0">
														{a.title}
													</h3>
												</Link>
												<small className="text-muted">
													<span className="text-danger">
														Multiple Modules
													</span>{" "}
													| <b>Not available until</b>{" "}
													{a.available} | <b>Due</b>{" "}
													{a.due} | {a.points} pts
												</small>
											</div>
										</Col>
										<Col xs="auto">
											<AssignmentEndButtons />
										</Col>
									</Row>
								</ListGroupItem>
							))
						)}
					</ListGroup>
				</ListGroupItem>
			</ListGroup>
		</div>
	);
}
