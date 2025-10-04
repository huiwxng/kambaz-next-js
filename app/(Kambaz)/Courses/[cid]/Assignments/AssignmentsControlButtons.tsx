import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function ModuleControlButtons() {
	return (
		<div className="float-end">
			<span className="border rounded-pill p-2">
				40% of Total
			</span>
			<BsPlus size={32} />
			<IoEllipsisVertical className="fs-4" />
		</div>
	);
}
