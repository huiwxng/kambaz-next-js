/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as client from "../../client";
import PeopleTable from "./Table";

export default function PeoplePage() {
	const { cid } = useParams();
	const [users, setUsers] = useState<any[]>([]);
	const fetchUsers = async () => {
		if (!cid) return;
		const users = await client.findUsersForCourse(cid as string);
		setUsers(users);
	};
	useEffect(() => {
		fetchUsers();
	}, [cid]);
	return (
		<div>
			<h2>Enrolled Users</h2>
			<PeopleTable users={users} fetchUsers={fetchUsers} />
		</div>
	);
}
