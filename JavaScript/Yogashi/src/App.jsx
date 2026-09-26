import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testimonials from "./Pages/Testimonials";
import Classes from "./Pages/Classes";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;