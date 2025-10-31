"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

type Lesson = {
	id?: string | number;
	name: string;
};

type Module = {
	editing?: boolean;
	_id: string;
	id?: string | number;
	course?: string;
	name: string;
	lessons?: Lesson[];
};

export default function Modules() {
	const params = useParams();
	const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;
	const [moduleName, setModuleName] = useState("");
	const { modules } = useSelector(
		(state: { modulesReducer: { modules: Module[] } }) =>
			state.modulesReducer
	);
	const dispatch = useDispatch();

	return (
		<div>
			<ModulesControls
				moduleName={moduleName}
				setModuleName={setModuleName}
				addModule={() => {
					dispatch(addModule({ name: moduleName, course: cid }));
					setModuleName("");
				}}
			/>
			<br />
			<br />
			<br />
			<br />
			<ListGroup className="rounded-0" id="wd-modules">
				{modules
					.filter((module: Module) => module.course === cid)
					.map((module: Module) => (
						<ListGroupItem
							key={module.name}
							className="wd-module p-0 mb-5 fs-5 border-gray"
						>
							<div className="wd-title p-3 ps-2 bg-secondary">
								<BsGripVertical className="me-2 fs-3" />{" "}
								{!module.editing && module.name}
								{module.editing && (
									<FormControl
										className="w-50 d-inline-block"
										onChange={(e) =>
											dispatch(
												updateModule({
													...module,
													name: e.target.value,
												})
											)
										}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												dispatch(
													updateModule({
														...module,
														editing: false,
													})
												);
											}
										}}
										defaultValue={module.name}
									/>
								)}
								<ModuleControlButtons
									moduleId={module._id}
									deleteModule={(moduleId) => {
										dispatch(deleteModule(moduleId));
									}}
									editModule={(moduleId) =>
										dispatch(editModule(moduleId))
									}
								/>
							</div>
							{module.lessons && (
								<ListGroup className="wd-lessons rounded-0">
									{module.lessons.map((lesson: Lesson) => (
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
			</ListGroup>
		</div>
	);
}
