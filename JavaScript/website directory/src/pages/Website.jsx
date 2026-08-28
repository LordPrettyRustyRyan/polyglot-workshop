import { Link, useNavigate, useParams } from "react-router-dom";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import Container from "../components/layout/Container";
import { useWebsites } from "../context/WebsiteContext";

function Website() {
  // ==================== HOOKS ====================
  const navigate = useNavigate();
  const { id } = useParams();
  const { websites, deleteWebsite } = useWebsites();

  const website = websites.find((website) => website.id === Number(id));

  // ==================== HANDLERS ====================
  const handleDelete = () => {
    const confirmed = window.confirm("Delete this website?");
    if (!confirmed) return;
    deleteWebsite(website.id);
    navigate("/");
  };

  // ==================== CONDITIONAL RENDERING ====================
  if (!website) {
    return (
      <Container>
        <div className="py-20 text-center">Website not found.</div>
      </Container>
    );
  }

  // ==================== RENDER ====================
  return (
    <Container>
      <section className="py-10">
        <div className="overflow-hidden rounded-4xl border" style={{ background: "#380420", borderColor: "rgba(233,236,239,0.08)" }}>
          <img src={website.image} alt={website.name} className="h-112.5 w-full object-cover" />
          <div className="p-8">
            <div className="mb-4">
              <span className="rounded-full px-4 py-2 text-sm" style={{ background: "rgba(233,236,239,0.06)" }}>
                Rating • {website.rating}
              </span>
            </div>
            <h1 className="mb-4 text-5xl font-black">{website.name}</h1>
            <p className="mb-8 text-lg" style={{ color: "#ced4da" }}>
              Explore and access this website directly from your collection.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={website.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold" style={{ background: "#5e0e80" }}>
                Visit Website <ExternalLink size={18} />
              </a>
              <Link to={`/edit/${website.id}`} className="inline-flex items-center gap-2 rounded-xl px-5 py-3" style={{ background: "#3a0d64" }}>
                <Pencil size={18} /> Edit
              </Link>
              <button onClick={handleDelete} className="inline-flex items-center gap-2 rounded-xl px-5 py-3" style={{ background: "#280438", border: "1px solid rgba(233,236,239,0.08)" }}>
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Website;