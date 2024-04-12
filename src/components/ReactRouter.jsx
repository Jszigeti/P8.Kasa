import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Property from "../pages/Property";
import Error from "../pages/Error";

function ReactRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card/:id" element={<Property />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default ReactRouter;
