import { SearchX } from "lucide-react";

function EmptyState() {
  // ==================== RENDER ====================
  return (
    <div className="py-24">
      <div
        className="mx-auto max-w-lg rounded-4xl border p-10 text-center"
        style={{
          background: "#380420",
          borderColor: "rgba(233,236,239,0.08)",
        }}
      >
        <div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          style={{ background: "rgba(128,14,19,0.25)" }}
        >
          <SearchX size={36} />
        </div>
        <h2 className="mb-3 text-3xl font-bold">Nothing Found</h2>
        <p className="text-lg" style={{ color: "#ced4da" }}>
          We couldn't find any websites matching your search.
        </p>
      </div>
    </div>
  );
}

export default EmptyState;