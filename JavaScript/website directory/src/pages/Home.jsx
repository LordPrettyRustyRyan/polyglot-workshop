import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Container from "../components/layout/Container";
import WebsiteGrid from "../components/cards/WebsiteGrid";
import { useWebsites } from "../context/WebsiteContext";

function Home() {
  // ==================== HOOKS ====================
  const { filteredWebsites } = useWebsites();

  // ==================== RENDER ====================
  return (
    <Container>
      <section className="py-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em]" style={{ color: "#ced4da" }}>
              Personal Collection
            </p>
            <h1 className="mb-3 text-4xl font-black tracking-tight lg:text-6xl">
              Discover &
              <br />
              Organize Websites
            </h1>
            <p className="max-w-2xl text-lg" style={{ color: "#ced4da" }}>
              Build your own curated collection of useful websites, tools, resources and inspiration.
            </p>
          </div>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 self-start rounded-2xl px-5 py-3 font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "#5e0e80" }}
          >
            <Plus size={18} />
            Add Website
          </Link>
        </div>
        <WebsiteGrid websites={filteredWebsites} />
      </section>
    </Container>
  );
}

export default Home;