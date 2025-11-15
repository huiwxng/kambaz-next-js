/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signin() {
	const [credentials, setCredentials] = useState<any>({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const router = useRouter();
	const { currentUser } = useSelector((state: any) => state.accountReducer);

	useEffect(() => {
		if (currentUser) {
			router.push("/Account/Profile");
		}
	}, [currentUser, router]);

	const signin = async () => {
		try {
			const user = await client.signin(credentials);
			if (!user) {
				setError("Invalid username or password");
				return;
			}
			dispatch(setCurrentUser(user));
			router.push("/Dashboard");
		} catch (err: any) {
			setError(
				err.response?.data?.message ||
					"Unable to login. Try again later."
			);
		}
	};

	return (
		<div id="wd-signin-screen">
			<h1>Sign in</h1>
			{error && <div className="alert alert-danger">{error}</div>}
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
			<Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2">
				Sign in
			</Button>
			<Link id="wd-signup-link" href="/Account/Signup">
				Sign up
			</Link>
		</div>
	);
}
