import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
export default function AssignmentStartButtons() {
	return (
		<div className="float-start">
            <BsGripVertical className="me-2 fs-3" />
            <LuNotebookPen className="me-2 fs-3" color="red" />
		</div>
	);
}
