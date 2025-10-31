"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
	type Credentials = { username: string; password: string };
	type User = { username: string; password: string; [key: string]: unknown };
	const [credentials, setCredentials] = useState<Credentials>({
		username: "",
		password: "",
	});
	const dispatch = useDispatch();
	const router = useRouter();
	const { currentUser } = useSelector((state: any) => state.accountReducer);

	useEffect(() => {
		if (currentUser) {
			router.push("/Account/Profile");
		}
	}, [currentUser, router]);

	const signin = () => {
		console.log("Sign in attempt:", credentials);
		console.log("Available users:", db.users);

		const user = db.users.find(
			(u: User) =>
				u.username === credentials.username &&
				u.password === credentials.password
		);

		console.log("Found user:", user);

		if (!user) {
			alert("Invalid username or password");
			return;
		}

		dispatch(setCurrentUser(user));
		router.push("/Dashboard");
	};
	return (
		<div id="wd-signin-screen">
			<h1>Sign in</h1>
			<FormControl
				value={credentials.username}
				onChange={(e) =>
					setCredentials({ ...credentials, username: e.target.value })
				}
				className="mb-2"
				placeholder="username"
				id="wd-username"
			/>
			<FormControl
				value={credentials.password}
				onChange={(e) =>
					setCredentials({ ...credentials, password: e.target.value })
				}
				className="mb-2"
				placeholder="password"
				type="password"
				id="wd-password"
			/>
			<Button onClick={signin} id="wd-signin-btn" className="w-100">
				Sign in
			</Button>
			<Link id="wd-signup-link" href="Signup">
				Sign up
			</Link>
		</div>
	);
}
