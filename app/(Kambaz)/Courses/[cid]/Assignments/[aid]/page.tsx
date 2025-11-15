/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../../../client";

export default function AssignmentEditor() {
	const { cid, aid } = useParams();
	const router = useRouter();
	const dispatch = useDispatch();
	const isNew = aid === "new";

	const [assignment, setAssignment] = useState<any>({
		title: "",
		description: "",
		points: 100,
		dueDate: "",
		availableDate: "",
		availableUntilDate: "",
	});

	useEffect(() => {
		const fetchAssignment = async () => {
			if (!isNew && aid) {
				const fetchedAssignment = await client.findAssignmentById(
					aid as string
				);
				setAssignment(fetchedAssignment);
			}
		};
		fetchAssignment();
	}, [aid, isNew]);

	const handleSave = async () => {
		if (isNew) {
			const newAssignment = await client.createAssignment(
				cid as string,
				assignment
			);
			dispatch(addAssignment(newAssignment));
		} else {
			await client.updateAssignment(assignment);
			dispatch(updateAssignment(assignment));
		}
		router.push(`/Courses/${cid}/Assignments`);
	};

	return (
		<div id="wd-assignments-editor" className="container mt-4">
			<div className="mb-3">
				<label htmlFor="wd-name" className="form-label">
					Assignment Name
				</label>
				<input
					id="wd-name"
					className="form-control"
					value={assignment.title}
					onChange={(e) =>
						setAssignment({ ...assignment, title: e.target.value })
					}
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="wd-description" className="form-label">
					Description
				</label>
				<textarea
					id="wd-description"
					className="form-control"
					rows={5}
					value={assignment.description}
					onChange={(e) =>
						setAssignment({
							...assignment,
							description: e.target.value,
						})
					}
				/>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<label htmlFor="wd-points" className="form-label">
						Points
					</label>
					<input
						id="wd-points"
						type="number"
						className="form-control"
						value={assignment.points}
						onChange={(e) =>
							setAssignment({
								...assignment,
								points: Number.parseInt(e.target.value),
							})
						}
					/>
				</div>
			</div>

			<div className="mb-3">
				<label htmlFor="wd-due-date" className="form-label">
					Due Date
				</label>
				<input
					id="wd-due-date"
					type="date"
					className="form-control"
					value={assignment.dueDate}
					onChange={(e) =>
						setAssignment({
							...assignment,
							dueDate: e.target.value,
						})
					}
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="wd-available-from" className="form-label">
					Available From
				</label>
				<input
					id="wd-available-from"
					type="date"
					className="form-control"
					value={assignment.availableDate}
					onChange={(e) =>
						setAssignment({
							...assignment,
							availableDate: e.target.value,
						})
					}
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="wd-available-until" className="form-label">
					Available Until
				</label>
				<input
					id="wd-available-until"
					type="date"
					className="form-control"
					value={assignment.availableUntilDate}
					onChange={(e) =>
						setAssignment({
							...assignment,
							availableUntilDate: e.target.value,
						})
					}
				/>
			</div>

			<hr />

			<div className="d-flex justify-content-end">
				<button
					className="btn btn-secondary me-2"
					onClick={() => router.push(`/Courses/${cid}/Assignments`)}
				>
					Cancel
				</button>
				<button className="btn btn-danger" onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
}
