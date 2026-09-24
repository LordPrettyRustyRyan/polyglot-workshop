import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;