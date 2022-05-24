import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element />
        <Route path="/projects" element />
        <Route path="/contact" element />
        <Route path="*" element />
      </Routes>
    </Router>
  );
}

export default App;
