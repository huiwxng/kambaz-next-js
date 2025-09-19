export default function AssignmentEditor() {
	return (
		<div id="wd-assignments-editor">
			<label htmlFor="wd-name">
				<h3>Assignment Name</h3>
			</label>
			<input id="wd-name" defaultValue="A1 - ENV + HTML" />
			<br />
			<br />
			<textarea id="wd-description" rows={6} cols={40}>
				The assignment is available online Submit a link to the landing
				page of
			</textarea>
			<br />
			<table>
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-points">Points</label>
					</td>
					<td>
						<input id="wd-points" defaultValue={100} />
					</td>
				</tr>
				<br />
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-group">Assignment Group</label>
					</td>
					<td>
						<select id="wd-group" defaultValue="ASSIGNMENTS">
							<option value="ASSIGNMENTS">ASSIGNMENTS</option>
							<option value="QUIZZES">QUIZZES</option>
							<option value="EXAMS">EXAMS</option>
							<option value="PROJECT">PROJECT</option>
						</select>
					</td>
				</tr>
				<br />
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-display-grade-as">
							Display Grade as
						</label>
					</td>
					<td>
						<select
							id="wd-display-grade-as"
							defaultValue="Percentage"
						>
							<option value="Percentage">Percentage</option>
							<option value="Points">Points</option>
							<option value="Letter">Letter</option>
						</select>
					</td>
				</tr>
				<br />
				<tr>
					<td align="right" valign="top">
						<label htmlFor="wd-submission-type">
							Submission Type
						</label>
					</td>
					<td>
						<div>
							<select
								id="wd-submission-type"
								defaultValue="Online"
							>
								<option value="Online">Online</option>
							</select>
							<br />
							<br />
							Online Entry Options
							<br />
							<input type="checkbox" id="wd-text-entry" />
							<label htmlFor="wd-text-entry"> Text Entry</label>
							<br />
							<input type="checkbox" id="wd-website-url" />
							<label htmlFor="wd-website-url"> Website URL</label>
							<br />
							<input type="checkbox" id="wd-media-recordings" />
							<label htmlFor="wd-media-recordings">
								{" "}
								Media Recordings
							</label>
							<br />
							<input type="checkbox" id="wd-student-annotation" />
							<label htmlFor="wd-student-annotation">
								{" "}
								Student Annotation
							</label>
							<br />
							<input type="checkbox" id="wd-file-upload" />
							<label htmlFor="wd-file-upload">
								{" "}
								File Uploads
							</label>
						</div>
					</td>
				</tr>
				<br />
				<tr>
					<td align="right" valign="top">
						Assign
					</td>
					<td>
						<div>
							<label htmlFor="wd-assign-to">Assign to</label>
							<br />
							<input id="wd-assign-to" defaultValue="Everyone" />
							<br />
							<br />
							<label htmlFor="wd-due-date">Due</label>
							<br />
							<input
								type="date"
								id="wd-due-date"
								defaultValue="2024-05-13"
							/>
							<br />
							<br />
							<tr>
								<td>
									<label htmlFor="wd-available-from">
										Available from
									</label>
									<br />
									<input
										type="date"
										id="wd-available-from"
										defaultValue="2024-05-06"
									/>
								</td>
								<td>
									<label htmlFor="wd-available-from">
										Until
									</label>
									<br />
									<input
										type="date"
										id="wd-available-until"
										defaultValue="2024-05-13"
									/>
								</td>
							</tr>
						</div>
					</td>
				</tr>
			</table>
			<hr />
			<button>Cancel</button>
			<button>Save</button>
		</div>
	);
}
