"use client";

import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { useParams, useRouter } from "next/navigation";

export default function AssignmentsControlButtons() {
	const { cid } = useParams();
	const router = useRouter();

	const handleAddAssignment = () => {
		router.push(`/Courses/${cid}/Assignments/new`);
	};

	return (
		<div id="wd-assignments-controls" className="text-nowrap">
			<Button
				variant="danger"
				size="lg"
				className="me-1 float-end"
				id="wd-add-assignment-btn"
				onClick={handleAddAssignment}
			>
				<FaPlus
					className="position-relative me-2"
					style={{ bottom: "1px" }}
				/>
				Assignment
			</Button>
			<Button
				variant="secondary"
				size="lg"
				className="me-1 float-end"
				id="wd-add-group-btn"
			>
				<FaPlus
					className="position-relative me-2"
					style={{ bottom: "1px" }}
				/>
				Group
			</Button>
		</div>
	);
}
