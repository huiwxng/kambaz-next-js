import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
	return (
		<div id="wd-profile-screen">
			<h3>Profile</h3>
			<FormControl
				id="wd-username"
				placeholder="username"
				defaultValue="alice"
				className="mb-2"
			/>
			<FormControl
				id="wd-password"
				placeholder="password"
				defaultValue="123"
				className="mb-2"
			/>
			<FormControl
				id="wd-firstname"
				placeholder="First Name"
				defaultValue="Alice"
				className="mb-2"
			/>

			<FormControl
				id="wd-lastname"
				placeholder="Last Name"
				defaultValue="Wonderland"
				className="mb-2"
			/>

			<FormControl id="wd-dob" type="date" className="mb-2" />

			<FormControl
				id="wd-email"
				type="email"
				placeholder="email"
				defaultValue="alice@wonderland.com"
				className="mb-2"
			/>

			<FormSelect id="wd-role" defaultValue="USER" className="mb-3">
				<option value="USER">User</option>
				<option value="ADMIN">Admin</option>
				<option value="FACULTY">Faculty</option>
				<option value="STUDENT">Student</option>
			</FormSelect>

			<Link
				href="/Account/Signin"
				id="wd-signout-btn"
				className="btn btn-danger w-100 mb-2"
			>
				Sign out
			</Link>
		</div>
	);
}
