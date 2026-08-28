import { Link } from "react-router-dom";
import { ExternalLink, Star } from "lucide-react";

function WebsiteCard({ website }) {
  // ==================== RENDER ====================
  return (
    <article
      className="group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#380420",
        borderColor: "rgba(233,236,239,0.08)",
      }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={website.image}
          alt={website.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div
            className="flex items-center gap-1 rounded-full px-3 py-1 text-sm"
            style={{ background: "rgba(233,236,239,0.06)" }}
          >
            <Star size={14} fill="currentColor" />
            {website.rating}
          </div>
        </div>

        <Link
          to={`/website/${website.id}`}
          className="mb-4 block text-xl font-bold transition-colors"
        >
          {website.name}
        </Link>

        <a
          href={website.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-80"
          style={{ color: "#ced4da" }}
        >
          Visit Website
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

export default WebsiteCard;