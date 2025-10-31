"use client";

import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import GreenCheckmark from "./GreenCheckmark";

interface AssignmentEndButtonsProps {
	assignmentId: string;
	showDeleteButton?: boolean;
}

export default function AssignmentEndButtons({
	assignmentId,
	showDeleteButton = true,
}: AssignmentEndButtonsProps) {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteAssignment(assignmentId));
		setShowDeleteModal(false);
	};

	return (
		<>
			<div className="float-end">
				<GreenCheckmark />
				{showDeleteButton && (
					<Button
						variant="link"
						className="text-danger p-1 me-1"
						onClick={() => setShowDeleteModal(true)}
						title="Delete Assignment"
					>
						<FaTrash />
					</Button>
				)}
				<IoEllipsisVertical className="fs-4" />
			</div>

			{showDeleteButton && (
				<Modal
					show={showDeleteModal}
					onHide={() => setShowDeleteModal(false)}
				>
					<Modal.Header closeButton>
						<Modal.Title>Delete Assignment</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Are you sure you want to delete this assignment? This
						action cannot be undone.
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={() => setShowDeleteModal(false)}
						>
							Cancel
						</Button>
						<Button variant="danger" onClick={handleDelete}>
							Delete
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
}
