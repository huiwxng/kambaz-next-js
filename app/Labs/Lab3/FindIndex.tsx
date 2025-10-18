export default function FindIndex() {
	const numberArray1 = [1, 2, 4, 5, 6];
	const stringArray1 = ["string1", "string3"];

	const fourIndex = numberArray1.indexOf(4);
	const string3Index = stringArray1.indexOf("string3");

	return (
		<div id="wd-find-index-function">
			<h4>FindIndex Function</h4>
			fourIndex = {fourIndex} <br />
			string3Index = {string3Index} <hr />
		</div>
	);
}
