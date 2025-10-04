import Link from "next/link";
import Image from "next/image";
import {
	Row,
	Col,
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardBody,
	Button,
} from "react-bootstrap";
export default function Dashboard() {
	return (
		<div id="wd-dashboard">
			<h1 id="wd-dashboard-title">Dashboard</h1> <hr />
			<h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
			<div id="wd-dashboard-courses">
				<Row xs={1} md={5} className="g-4">
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/1234/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS1234 React JS
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/4550/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS4550 Web Development
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/4700/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS4700 Networks Fundamentals
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/2800/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS2800 Logic and Computation
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
				</Row>
				<br />
				<Row xs={1} md={5} className="g-4">
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/3302/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										ENGW3302 Advanced Writing
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/3500/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS3500 Object-Oriented Design
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/3000/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS3000 Algorithms & Data Structures
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
					<Col
						className="wd-dashboard-course"
						style={{ width: "300px" }}
					>
						<Card>
							<Link
								href="/Courses/1800/Home"
								className="wd-dashboard-course-link text-decoration-none text-dark"
							>
								<CardImg
									variant="top"
									src="/images/reactjs.jpg"
									alt="image"
									width="100%"
									height={160}
								/>
								<CardBody>
									<CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
										CS1800 Discrete Structures
									</CardTitle>
									<CardText
										className="wd-dashboard-course-description overflow-hidden"
										style={{ height: "100px" }}
									>
										Full Stack software developer
									</CardText>
									<Button variant="primary">Go</Button>
								</CardBody>
							</Link>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
}
