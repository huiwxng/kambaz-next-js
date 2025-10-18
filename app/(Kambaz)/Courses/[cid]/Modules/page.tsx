"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database/page";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { ListGroup, ListGroupItem } from "react-bootstrap";

type Lesson = {
	id?: string | number;
	name: string;
};

type Module = {
	id?: string | number;
	course: string;
	name: string;
	lessons?: Lesson[];
};

export default function Modules() {
	const { cid } = useParams();
	const modules = db.modules as Module[];

	return (
		<div>
			<ModulesControls />
			<br />
			<br />
			<br />
			<br />
			<ListGroup className="rounded-0" id="wd-modules">
				{modules
					.filter((module: any) => module.course === cid)
					.map((module: any) => (
						<ListGroupItem
							key={module.name}
							className="wd-module p-0 mb-5 fs-5 border-gray"
						>
							<div className="wd-title p-3 ps-2 bg-secondary">
								<BsGripVertical className="me-2 fs-3" />{" "}
								{module.name} <ModuleControlButtons />
							</div>
							{module.lessons && (
								<ListGroup className="wd-lessons rounded-0">
									{module.lessons.map((lesson: any) => (
										<ListGroupItem
											key={lesson.name}
											className="wd-lesson p-3 ps-1"
										>
											<BsGripVertical className="me-2 fs-3" />{" "}
											{lesson.name}{" "}
											<LessonControlButtons />
										</ListGroupItem>
									))}
								</ListGroup>
							)}
						</ListGroupItem>
					))}
				{/* <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
					<div className="wd-title p-3 ps-2 bg-secondary">
						<BsGripVertical className="me-2 fs-3" /> Week 1{" "}
						<ModuleControlButtons />
					</div>
					<ListGroup className="wd-lessons rounded-0">
						<ListGroupItem className="wd3" /> LEARNING
							OBJECTIVES <LessonControlButtons />
						</ListGroupItem>
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<BsGripVertical className="me-2 fs-3" />{" "}
							Introduction to the course <LessonControlButtons />
						</ListGroupItem>
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<BsGripVertical className="me-2 fs-3" /> Learn what
							is Web Development <LessonControlButtons />
						</ListGroupItem>
					</ListGroup>
				</ListGroupItem>

				<ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
					<div className="wd-title p-3 ps-2 bg-secondary">
						<BsGripVertical className="me-2 fs-3" /> Week 2{" "}
						<ModuleControlButtons />
					</div>
					<ListGroup className="wd-lessons rounded-0">
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<BsGripVertical className="me-2 fs-3" /> LEARNING
							OBJECTIVES <LessonControlButtons />
						</ListGroupItem>
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<BsGripVertical className="me-2 fs-3" /> LESSON 1{" "}
							<LessonControlButtons />
						</ListGroupItem>
						<ListGroupItem className="wd-lesson p-3 ps-1">
							<BsGripVertical className="me-2 fs-3" /> LESSON 2{" "}
							<LessonControlButtons />
						</ListGroupItem>
					</ListGroup>
				</ListGroupItem> */}
			</ListGroup>
		</div>
	);
}
