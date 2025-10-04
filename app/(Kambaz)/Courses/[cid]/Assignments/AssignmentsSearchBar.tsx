"use client";

import { FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { BsSearch } from "react-icons/bs";

export default function AssignmentsSearchBar() {
	return (
		<div id="wd-assignments-search" className="mb-5">
			<InputGroup size="lg">
				<InputGroupText className="bg-white border-end-0">
					<BsSearch />
				</InputGroupText>
				<FormControl
                    type="text"
					placeholder="Search..."
					className="border-start-0"
				/>
			</InputGroup>
		</div>
	);
}
