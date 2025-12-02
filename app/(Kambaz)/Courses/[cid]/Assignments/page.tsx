/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, type MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import * as client from "../../client";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function Assignments() {
	const { cid } = useParams();
	const router = useRouter();
	const { assignments } = useSelector(
		(state: any) => state.assignmentsReducer
	);
	const { currentUser } = useSelector(
		(state: any) => state.accountReducer || { currentUser: null }
	);
	const dispatch = useDispatch();

	const removeAssignment = async (assignmentId: string) => {
		await client.deleteAssignment(assignmentId);
		dispatch(deleteAssignment(assignmentId));
	};

	useEffect(() => {
		if (!cid) return;
		const fetchAssignments = async () => {
			const assignments = await client.findAssignmentsForCourse(
				cid as string
			);
			dispatch(setAssignments(assignments));
		};
		fetchAssignments();
	}, [cid, dispatch]);

	return (
		<div id="wd-assignments">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<input
					id="wd-search-assignment"
					className="form-control w-50"
					placeholder="Search..."
				/>
				<div>
					{currentUser?.role !== "STUDENT" && (
						<>
							<button
								id="wd-add-assignment-group"
								className="btn btn-secondary me-2"
							>
								<FaPlus className="me-2" />
								Group
							</button>
							<button
								id="wd-add-assignment"
								className="btn btn-danger"
								onClick={() =>
									router.push(
										`/Courses/${cid}/Assignments/new`
									)
								}
							>
								<FaPlus className="me-2" />
								Assignment
							</button>
						</>
					)}
				</div>
			</div>

			<ul id="wd-assignment-list" className="list-group rounded-0">
				<li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
					<div className="wd-assignments-title p-3 ps-2 bg-secondary">
						<BsGripVertical className="me-2 fs-3" />
						ASSIGNMENTS
					</div>

					<ul className="wd-assignment-list list-group rounded-0">
						{assignments.map((assignment: any) => (
							<li
								key={assignment._id}
								className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
							>
								<BsGripVertical className="me-2 fs-3" />
								<div className="flex-grow-1">
									<a
										className="wd-assignment-link text-decoration-none text-dark"
										href={`#/Courses/${cid}/Assignments/${assignment._id}`}
										onClick={(
											e: MouseEvent<HTMLAnchorElement>
										) => {
											e.preventDefault();
											router.push(
												`/Courses/${cid}/Assignments/${assignment._id}`
											);
										}}
									>
										<strong>{assignment.title}</strong>
									</a>
									<div className="text-muted small">
										<span className="text-danger">
											Multiple Modules
										</span>{" "}
										| <strong>Not available until</strong>{" "}
										{assignment.availableDate} |<br />
										<strong>Due</strong>{" "}
										{assignment.dueDate} |{" "}
										{assignment.points} pts
									</div>
								</div>
								<div className="d-flex align-items-center">
									{currentUser?.role !== "STUDENT" && (
										<FaTrash
											className="text-danger me-3"
											style={{ cursor: "pointer" }}
											onClick={() =>
												removeAssignment(assignment._id)
											}
										/>
									)}
									<IoEllipsisVertical className="fs-4" />
								</div>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}
