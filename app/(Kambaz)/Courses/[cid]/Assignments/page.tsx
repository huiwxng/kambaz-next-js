import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsSearchBar from "./AssignmentsSearchBar";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentEndButtons from "./AssignmentEndButtons";
import AssignmentStartButtons from "./AssignmentStartButtons";

export default function Assignments() {
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
					<div className="wd-title p-3 ps-2 bg-secondary">
						<BsGripVertical className="me-2 fs-3" />
						ASSIGNMENTS
						<AssignmentsControlButtons />
					</div>
					<ListGroup className="wd-lessons rounded-0">
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<Row className="align-items-center">
								<Col xs="auto">
									<AssignmentStartButtons />
								</Col>
								<Col>
									<div>
										<Link
											href="/Courses/1234/Assignments/1"
											className="wd-assignment-link text-decoration-none"
										>
											<h3 className="text-black">A1</h3>
										</Link>
										<span className="text-danger">
											Multiple Modules
										</span>{" "}
										| <b>Not available until</b> May 6 at
										12:00am | <b>Due</b> May 13 at 11:59pm |
										100 pts
									</div>
								</Col>
								<Col xs="auto">
									<AssignmentEndButtons />
								</Col>
							</Row>
						</ListGroupItem>
					</ListGroup>
					<ListGroup className="wd-lessons rounded-0">
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<Row className="align-items-center">
								<Col xs="auto">
									<AssignmentStartButtons />
								</Col>
								<Col>
									<div>
										<Link
											href="/Courses/1234/Assignments/1"
											className="wd-assignment-link text-decoration-none"
										>
											<h3 className="text-black">A2</h3>
										</Link>
										<span className="text-danger">
											Multiple Modules
										</span>{" "}
										| <b>Not available until</b> May 13 at
										12:00am | <b>Due</b> May 20 at 11:59pm |
										100 pts
									</div>
								</Col>
								<Col xs="auto">
									<AssignmentEndButtons />
								</Col>
							</Row>
						</ListGroupItem>
					</ListGroup>
					<ListGroup className="wd-lessons rounded-0">
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<Row className="align-items-center">
								<Col xs="auto">
									<AssignmentStartButtons />
								</Col>
								<Col>
									<div>
										<Link
											href="/Courses/1234/Assignments/1"
											className="wd-assignment-link text-decoration-none"
										>
											<h3 className="text-black">A3</h3>
										</Link>
										<span className="text-danger">
											Multiple Modules
										</span>{" "}
										| <b>Not available until</b> May 20 at
										12:00am | <b>Due</b> May 27 at 11:59pm |
										100 pts
									</div>
								</Col>
								<Col xs="auto">
									<AssignmentEndButtons />
								</Col>
							</Row>
						</ListGroupItem>
					</ListGroup>
				</ListGroupItem>
			</ListGroup>
		</div>
	);
}
