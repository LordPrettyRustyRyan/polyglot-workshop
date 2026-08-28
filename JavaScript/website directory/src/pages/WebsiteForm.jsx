import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Globe, Save, Pencil } from "lucide-react";
import Container from "../components/layout/Container";
import { useWebsites } from "../context/WebsiteContext";

function WebsiteForm() {
  // ==================== HOOKS & CONTEXT ====================
  const navigate = useNavigate();
  const { id } = useParams();
  const { websites, addWebsite, updateWebsite } = useWebsites();

  // ==================== STATE MANAGEMENT ====================
  const existingWebsite = websites.find((website) => website.id === Number(id));
  const [form, setForm] = useState({ name: "", image: "", url: "", rating: "" });

  useEffect(() => {
    if (existingWebsite) {
      setForm({
        name: existingWebsite.name,
        image: existingWebsite.image,
        url: existingWebsite.url,
        rating: existingWebsite.rating,
      });
    }
  }, [existingWebsite]);

  // ==================== HANDLERS ====================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form, rating: Number(form.rating) };
    if (existingWebsite) {
      updateWebsite(id, payload);
    } else {
      addWebsite(payload);
    }
    navigate("/");
  };

  // ==================== RENDER ====================
  return (
    <Container>
      <section className="py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="mb-2 text-sm uppercase tracking-[0.3em]" style={{ color: "#ced4da" }}>
              Website Manager
            </p>
            <h1 className="text-4xl font-black">{existingWebsite ? "Edit Website" : "Add Website"}</h1>
          </div>
          <div className="rounded-4xl border p-8" style={{ background: "#310438", borderColor: "rgba(233,236,239,0.08)" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm" style={{ color: "#ced4da" }}>Website Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Google" required className="w-full rounded-2xl border p-4 outline-none" style={{ background: "#180225", borderColor: "rgba(233,236,239,0.08)" }} />
              </div>
              <div>
                <label className="mb-2 block text-sm" style={{ color: "#ced4da" }}>Image URL</label>
                <input name="image" value={form.image} onChange={handleChange} placeholder="https://..." required className="w-full rounded-2xl border p-4 outline-none" style={{ background: "#150225", borderColor: "rgba(233,236,239,0.08)" }} />
              </div>
              {form.image && (
                <div>
                  <img src={form.image} alt="Preview" className="h-56 w-full rounded-2xl object-cover" />
                </div>
              )}
              <div>
                <label className="mb-2 block text-sm" style={{ color: "#ced4da" }}>Website URL</label>
                <input name="url" value={form.url} onChange={handleChange} placeholder="https://website.com" required className="w-full rounded-2xl border p-4 outline-none" style={{ background: "#110225", borderColor: "rgba(233,236,239,0.08)" }} />
              </div>
              <div>
                <label className="mb-2 block text-sm" style={{ color: "#ced4da" }}>Rating</label>
                <input name="rating" type="number" step="0.1" min="0" max="5" value={form.rating} onChange={handleChange} required className="w-full rounded-2xl border p-4 outline-none" style={{ background: "#1a0225", borderColor: "rgba(233,236,239,0.08)" }} />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-semibold" style={{ background: "#620e80" }}>
                {existingWebsite ? (
                  <>
                    <Pencil size={18} />
                    Update Website
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Save Website
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default WebsiteForm;