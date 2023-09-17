import AddProject from "./components/AddProject";
import Nav from "./components/layout/Nav"
import Projects from "./components/projects/Projects"
import { Routes, Route } from "react-router-dom";
import "./index.css";
import ProjectDetail from "./components/projectDetail/ProjectDetail";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Projects />} />
        <Route exact path="/projects/:slug" element={<ProjectDetail />} />
        <Route exact path="/addProject" element={<AddProject />} />
      </Routes>
    </>
  )
}

export default App
