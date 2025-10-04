import "./index.css";
import Image from "next/image";

export default function Float() {
	return (
		<div>
			<div id="wd-float-divs">
				<h2>Float</h2>
				<div>
					<Image
						className="wd-float-right"
						src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
						alt="float right"
						width={300}
						height={300}
					/>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Eius hic ... Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Eius hic ...
					<Image
						className="wd-float-left"
						src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
						alt="float left"
						width={300}
						height={300}
					/>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Eius hic ... Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Eius hic ...
					<Image
						className="wd-float-right"
						src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
						alt="float right"
						width={300}
						height={300}
					/>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Eius hic ... Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Eius hic ...
					<Image
						className="wd-float-left"
						src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
						alt="float left"
						width={300}
						height={300}
					/>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Eius hic ... Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Eius hic ...
					<div className="wd-float-done"></div>
				</div>
			</div>
			<div id="wd-float-divs">
				<h2>Float</h2>
				<div>
					<div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
						Yellow{" "}
					</div>
					<div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
						Blue{" "}
					</div>
					<div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
						Red{" "}
					</div>
					<Image
						className="wd-float-right"
						src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
						alt="float right"
						width={300}
						height={300}
					/>
					<div className="wd-float-done"></div>
				</div>
			</div>
		</div>
	);
}
