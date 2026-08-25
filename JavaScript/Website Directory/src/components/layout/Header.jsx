import { Globe2, Search } from "lucide-react";
import Container from "./Container";
import { useWebsites } from "../../context/WebsiteContext";

function Header() {
  // ==================== HOOKS ====================
  const { search, setSearch } = useWebsites();

  // ==================== RENDER ====================
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "rgba(32, 2, 37, 0.92)",
        borderColor: "rgba(233,236,239,0.08)",
      }}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg,#640d14,#800e13)" }}
            >
              <Globe2 size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Website Directory</h1>
              <p className="text-xs" style={{ color: "#ced4da" }}>
                Your personal website collection
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-lg">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: "#ced4da" }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search websites..."
              className="w-full rounded-2xl border py-3 pl-12 pr-4 outline-none transition-all duration-300"
              style={{
                background: "#380420",
                borderColor: "rgba(233,236,239,0.08)",
                color: "#e9ecef",
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;