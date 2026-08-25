import WebsiteCard from "./WebsiteCard";
import EmptyState from "../common/EmptyState";

function WebsiteGrid({ websites }) {
  // ==================== CONDITIONAL RENDERING ====================
  if (!websites.length) {
    return <EmptyState />;
  }

  // ==================== RENDER ====================
  return (
    <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
      {websites.map((website) => (
        <WebsiteCard key={website.id} website={website} />
      ))}
    </div>
  );
}

export default WebsiteGrid;