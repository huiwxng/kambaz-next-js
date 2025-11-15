"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
	const [assignment, setAssignment] = useState({
		id: 1,
		title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-10-10",
		completed: false,
		score: 0,
	});
	const [module, setModule] = useState({
		id: 1,
		name: "Web Development",
		description: "Learn HTML, CSS, and JavaScript",
		course: "CS4550",
	});
	const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
	const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

	return (
		<div>
			<h3 id="wd-working-with-objects">Working With Objects</h3>

			<h4>Assignment</h4>
			<h5>Modifying Properties</h5>
			<a
				id="wd-update-assignment-title"
				className="btn btn-primary float-end"
				href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
			>
				Update Title
			</a>
			<FormControl
				className="w-75 mb-2"
				id="wd-assignment-title"
				defaultValue={assignment.title}
				onChange={(e) =>
					setAssignment({ ...assignment, title: e.target.value })
				}
			/>
			<hr />

			<a
				id="wd-update-assignment-score"
				className="btn btn-primary float-end"
				href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
			>
				Update Score
			</a>
			<FormControl
				className="w-75 mb-2"
				id="wd-assignment-score"
				type="number"
				value={assignment.score}
				onChange={(e) =>
					setAssignment({
						...assignment,
						score: parseInt(e.target.value),
					})
				}
			/>
			<hr />

			<div className="form-check mb-2">
				<input
					id="wd-assignment-completed"
					className="form-check-input"
					type="checkbox"
					checked={assignment.completed}
					onChange={(e) =>
						setAssignment({
							...assignment,
							completed: e.target.checked,
						})
					}
				/>
				<label
					className="form-check-label"
					htmlFor="wd-assignment-completed"
				>
					Completed
				</label>
				<a
					id="wd-update-assignment-completed"
					className="btn btn-primary float-end"
					href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
				>
					Update Completed
				</a>
			</div>
			<hr />

			<h4>Module</h4>
			<h5>Retrieving Objects</h5>
			<a
				id="wd-get-module"
				className="btn btn-primary mb-2"
				href={`${MODULE_API_URL}`}
			>
				Get Module
			</a>
			<hr />

			<h5>Retrieving Properties</h5>
			<a
				id="wd-get-module-name"
				className="btn btn-primary mb-2"
				href={`${MODULE_API_URL}/name`}
			>
				Get Module Name
			</a>
			<hr />

			<h5>Modifying Properties</h5>
			<a
				id="wd-update-module-name"
				className="btn btn-primary float-end"
				href={`${MODULE_API_URL}/name/${module.name}`}
			>
				Update Module Name
			</a>
			<FormControl
				className="w-75 mb-2"
				id="wd-module-name"
				value={module.name}
				onChange={(e) => setModule({ ...module, name: e.target.value })}
			/>
			<hr />

			<a
				id="wd-update-module-description"
				className="btn btn-primary float-end"
				href={`${MODULE_API_URL}/description/${module.description}`}
			>
				Update Module Description
			</a>
			<FormControl
				className="w-75 mb-2"
				id="wd-module-description"
				as="textarea"
				rows={3}
				value={module.description}
				onChange={(e) =>
					setModule({ ...module, description: e.target.value })
				}
			/>
			<hr />
		</div>
	);
}
