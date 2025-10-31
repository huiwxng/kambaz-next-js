"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

interface User {
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
}

interface RootState {
	accountReducer: {
		currentUser: User | null;
	};
}

export default function AccountPage() {
	const { currentUser } = useSelector(
		(state: RootState) => state.accountReducer
	);
	if (currentUser) {
		redirect("/Account/Profile");
	} else {
		redirect("/Account/Signin");
	}
}
