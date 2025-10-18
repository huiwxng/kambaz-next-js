export default function Add({ a, b }: { readonly a: number; readonly b: number }) {
	return (
		<div id="wd-add">
			<h4>Add</h4>a = {a}b = {b} <br />a + b = {a + b} <hr />
		</div>
	);
}
