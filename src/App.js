import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Experience from "./components/Experience";
function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <Experience />

      <Project />

      <Contact />
    </div>
  );
}

export default App;
