"use client";

import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

interface User {
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
}

interface Enrollment {
	_id: string;
	user: string;
	course: string;
}

interface RootState {
	accountReducer: {
		currentUser: User | null;
	};
	enrollmentsReducer: {
		enrollments: Enrollment[];
	};
}

interface EnrollmentProtectedRouteProps {
	children: React.ReactNode;
}

export default function EnrollmentProtectedRoute({
	children,
}: EnrollmentProtectedRouteProps) {
	const { currentUser } = useSelector(
		(state: RootState) => state.accountReducer
	);
	const { enrollments } = useSelector(
		(state: RootState) => state.enrollmentsReducer
	);
	const { cid } = useParams();
	const router = useRouter();

	useEffect(() => {
		if (!currentUser) {
			router.push("/Account/Signin");
			return;
		}

		// Check if user is faculty/admin (they can access any course)
		if (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
			return;
		}

		// Check if user is enrolled in the course
		const isEnrolled = enrollments.some(
			(enrollment) =>
				enrollment.user === currentUser._id && enrollment.course === cid
		);

		if (!isEnrolled) {
			router.push("/Dashboard");
		}
	}, [currentUser, enrollments, cid, router]);

	// Show loading or nothing while checking enrollment
	if (!currentUser) {
		return <div>Checking authentication...</div>;
	}

	// Faculty/Admin can always access
	if (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
		return <>{children}</>;
	}

	// Check enrollment for students
	const isEnrolled = enrollments.some(
		(enrollment) =>
			enrollment.user === currentUser._id && enrollment.course === cid
	);

	if (!isEnrolled) {
		return <div>Redirecting to Dashboard...</div>;
	}

	return <>{children}</>;
}
