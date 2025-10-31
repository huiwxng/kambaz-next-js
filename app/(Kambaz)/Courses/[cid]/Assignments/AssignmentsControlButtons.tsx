import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ModuleControlButtons() {
	const { cid } = useParams();
	return (
		<div className="float-end">
			<span className="border rounded-pill p-2">40% of Total</span>
			<Link href={`/Courses/${cid}/Assignments/new`}>
				<BsPlus size={32} />
			</Link>
			<IoEllipsisVertical className="fs-4" />
		</div>
	);
}
