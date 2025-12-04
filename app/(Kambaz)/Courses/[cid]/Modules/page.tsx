/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import {
	setModules,
	addModule,
	editModule,
	updateModule,
	deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as client from "../../client";

export default function Modules() {
	const { cid } = useParams();
	const [moduleName, setModuleName] = useState("");
	const { modules } = useSelector((state: any) => state.modulesReducer);
	const dispatch = useDispatch();

	const onUpdateModule = async (module: any) => {
		await client.updateModule(cid as string, module);
		const newModules = modules.map((m: any) =>
			m._id === module._id ? module : m
		);
		dispatch(setModules(newModules));
	};

	const onRemoveModule = async (moduleId: string) => {
		await client.deleteModule(cid as string, moduleId);
		dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
	};

	const onCreateModuleForCourse = async () => {
		if (!cid) return;
		const newModule = { name: moduleName, course: cid };
		await client.createModuleForCourse(cid as string, newModule);
		await fetchModules();
	};

	const fetchModules = async () => {
		const modules = await client.findModulesForCourse(cid as string);
		dispatch(setModules(modules));
	};

	useEffect(() => {
		const fetchModulesEffect = async () => {
			await fetchModules();
		};
		fetchModulesEffect();
	}, [cid]);
	
	return (
		<div>
			<ModulesControls
				setModuleName={setModuleName}
				moduleName={moduleName}
				addModule={onCreateModuleForCourse}
			/>
			<br />
			<br />
			<br />
			<br />
			<ListGroup id="wd-modules" className="rounded-0">
				{modules.map((module: any) => (
					<ListGroupItem
						key={module._id || module.id || module.name}
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
											onUpdateModule({
												...module,
												editing: false,
											});
										}
									}}
									defaultValue={module.name}
								/>
							)}{" "}
							<ModuleControlButtons
								moduleId={module._id}
								deleteModule={(moduleId) =>
									onRemoveModule(moduleId)
								}
								editModule={(moduleId) =>
									dispatch(editModule(moduleId))
								}
							/>
						</div>

						{module.lessons && (
							<ListGroup className="wd-lessons rounded-0">
								{module.lessons.map((lesson: any) => (
									<ListGroupItem
										key={
											lesson._id ||
											lesson.id ||
											lesson.name
										}
										className="wd-lesson p-3 ps-1"
									>
										<BsGripVertical className="me-2 fs-3" />{" "}
										{lesson.name} <LessonControlButtons />
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
