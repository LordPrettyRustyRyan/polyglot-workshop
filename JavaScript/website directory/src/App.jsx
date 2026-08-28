import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Website from "./pages/Website";
import WebsiteForm from "./pages/WebsiteForm";

function App() {
  // ==================== RENDER ====================
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ==================== BACKGROUND EFFECTS ==================== */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute -left-37.5 -top-37.5 h-100 w-100 rounded-full blur-[120px]"
          style={{ background: "#640d14" }}
        />
        <div
          className="absolute -right-37.5 top-75 h-87.5 w-87.5 rounded-full blur-[120px]"
          style={{ background: "#800e13" }}
        />
      </div>

      {/* ==================== CONTENT ==================== */}
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website/:id" element={<Website />} />
          <Route path="/create" element={<WebsiteForm />} />
          <Route path="/edit/:id" element={<WebsiteForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;