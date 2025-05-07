import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

import styles from "./Projects.module.css";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [removeLoading, setRemoveLoading] = useState(false);

	const location = useLocation();
	const message = location.state?.message || "";

	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:5000/projects", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((resp) => resp.json())
				.then((data) => {
					setProjects(data);
					setRemoveLoading(true);
				})
				.catch((err) => console.log(err));
		}, 300);
	}, []);

	return (
		<div className={styles.project_container}>
			<div className={styles.title_container}>
				<h1>Meus projetos</h1>
				<LinkButton to="/newproject" text="Criar Projeto" />
			</div>
			{message && <Message type="success" msg={message} />}
			<Container customClass="start">
				{projects.length > 0 &&
					projects.map((project) => (
						<ProjectCard
							id={project.id}
							name={project.name}
							category={project.category}
							budget={project.budget}
							key={project.id}
						/>
					))}
				{!removeLoading && <Loading />}
				{removeLoading && projects.length === 0 && (
					<p>Náo há projetos cadastrados.</p>
				)}
			</Container>
		</div>
	);
}

export default Projects;
