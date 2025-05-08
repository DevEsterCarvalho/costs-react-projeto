import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects.js";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/Footer"; // ✅
import Project from "./components/pages/Project.js";

function App() {
	console.log({
		Home,
		Company,
		Contact,
		NewProject,
		Container,
		NavBar,
		Footer,
	});

	return (
		<Router>
			<NavBar />
			<Container customClass="min-height">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/company" element={<Company />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/newproject" element={<NewProject />} />
					<Route path="/project/:id" element={<Project />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
