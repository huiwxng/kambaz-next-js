import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
	return (
		<div id="wd-dashboard">
			<h1 id="wd-dashboard-title">Dashboard</h1> <hr />
			<h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
			<div id="wd-dashboard-courses">
				<div className="wd-dashboard-course">
					<Link
						href="/Courses/1234"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS1234 React JS </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
				</div>
				<div className="wd-dashboard-course">
                    <Link
						href="/Courses/4550"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS4550 Web Development </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
				<div className="wd-dashboard-course">
                    <Link
						href="/Courses/4700"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS4700 Networks Fundamentals </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
						href="/Courses/2800"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS2800 Logic and Computation </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
						href="/Courses/3302"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> ENGW3302 Advanced Writing </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
						href="/Courses/3500"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS3500 Object-Oriented Design </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
						href="/Courses/3000"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS3000 Algorithms & Data Structures </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
						href="/Courses/1800"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS1800 Discrete Structures </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link
						href="/Courses/3650"
						className="wd-dashboard-course-link"
					>
						<Image
							src="/images/reactjs.jpg"
                            alt="image"
							width={200}
							height={150}
						/>
						<div>
							<h5> CS3650 Computer Systems </h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
					</Link>
                </div>
			</div>
		</div>
	);
}
