import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

interface Assignment {
	_id: string;
	title: string;
	course: string;
	available: string;
	due: string;
	points: number;
	description?: string;
	availableFrom?: string;
	availableUntil?: string;
}

interface AssignmentsState {
	assignments: Assignment[];
}

const initialState: AssignmentsState = {
	assignments: assignments,
};

const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		addAssignment: (
			state,
			{ payload: assignment }: PayloadAction<Partial<Assignment>>
		) => {
			const newAssignment: Assignment = {
				_id: uuidv4(),
				title: assignment.title || "New Assignment",
				course: assignment.course || "",
				available:
					assignment.available ||
					new Date().toISOString().split("T")[0],
				due: assignment.due || new Date().toISOString().split("T")[0],
				points: assignment.points || 100,
				description: assignment.description || "",
				availableFrom:
					assignment.availableFrom ||
					new Date().toISOString().split("T")[0],
				availableUntil:
					assignment.availableUntil ||
					new Date().toISOString().split("T")[0],
			};
			state.assignments.push(newAssignment);
		},
		deleteAssignment: (
			state,
			{ payload: assignmentId }: PayloadAction<string>
		) => {
			state.assignments = state.assignments.filter(
				(a) => a._id !== assignmentId
			);
		},
		updateAssignment: (
			state,
			{ payload: assignment }: PayloadAction<Assignment>
		) => {
			state.assignments = state.assignments.map((a) =>
				a._id === assignment._id ? assignment : a
			);
		},
		editAssignment: (
			state,
			{ payload: assignmentId }: PayloadAction<string>
		) => {
			state.assignments = state.assignments.map((a) =>
				a._id === assignmentId ? { ...a, editing: true } : a
			);
		},
	},
});

export const {
	addAssignment,
	deleteAssignment,
	updateAssignment,
	editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
