import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import database from "../Database";
import { v4 as uuidv4 } from "uuid";

interface Enrollment {
	_id: string;
	user: string;
	course: string;
}

interface EnrollmentsState {
	enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
	enrollments: database.enrollments,
};

const enrollmentsSlice = createSlice({
	name: "enrollments",
	initialState,
	reducers: {
		enrollInCourse: (
			state,
			{ payload }: PayloadAction<{ userId: string; courseId: string }>
		) => {
			const existingEnrollment = state.enrollments.find(
				(enrollment) =>
					enrollment.user === payload.userId &&
					enrollment.course === payload.courseId
			);
			if (!existingEnrollment) {
				const newEnrollment: Enrollment = {
					_id: uuidv4(),
					user: payload.userId,
					course: payload.courseId,
				};
				state.enrollments.push(newEnrollment);
			}
		},
		unenrollFromCourse: (
			state,
			{ payload }: PayloadAction<{ userId: string; courseId: string }>
		) => {
			state.enrollments = state.enrollments.filter(
				(enrollment) =>
					!(
						enrollment.user === payload.userId &&
						enrollment.course === payload.courseId
					)
			);
		},
		setEnrollments: (
			state,
			{ payload: enrollments }: PayloadAction<Enrollment[]>
		) => {
			state.enrollments = enrollments;
		},
	},
});

export const { enrollInCourse, unenrollFromCourse, setEnrollments } =
	enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
