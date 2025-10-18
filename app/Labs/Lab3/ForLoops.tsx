export default function ForLoops() {
	const stringArray1 = ["string1", "string3"];
	const stringArray2 = [];
	for (const string1 of stringArray1) {
		stringArray2.push(string1.toUpperCase());
	}
	return (
		<div id="wd-for-loops">
			<h4>Looping through arrays</h4>
			stringArray2 = {stringArray2} <hr />
		</div>
	);
}
