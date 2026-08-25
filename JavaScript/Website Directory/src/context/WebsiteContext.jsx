import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WebsiteContext = createContext();
const STORAGE_KEY = "website-directory";

export function WebsiteProvider({ children }) {
  // ==================== STATE MANAGEMENT ====================
  const [websites, setWebsites] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Ensures it returns an array even if old data format was different
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [search, setSearch] = useState("");

  // ==================== SIDE EFFECTS ====================
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(websites));
  }, [websites]);

  // ==================== ACTIONS ====================
  const addWebsite = (website) => {
    const newWebsite = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      description: "",
      ...website,
    };
    setWebsites((prev) => [newWebsite, ...prev]);
  };

  const updateWebsite = (id, updatedData) => {
    setWebsites((prev) =>
      prev.map((website) =>
        website.id === Number(id) ? { ...website, ...updatedData } : website
      )
    );
  };

  const deleteWebsite = (id) => {
    setWebsites((prev) =>
      prev.filter((website) => website.id !== Number(id))
    );
  };

  // ==================== COMPUTED DATA ====================
  const filteredWebsites = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return websites;

    return websites.filter(
      (website) =>
        website.name?.toLowerCase().includes(query) ||
        website.description?.toLowerCase().includes(query)
    );
  }, [websites, search]);

  const value = {
    websites,
    search,
    setSearch,
    filteredWebsites,
    addWebsite,
    updateWebsite,
    deleteWebsite,
  };

  return (
    <WebsiteContext.Provider value={value}>
      {children}
    </WebsiteContext.Provider>
  );
}

// ==================== HOOKS ====================
export function useWebsites() {
  const context = useContext(WebsiteContext);
  if (!context) {
    throw new Error("useWebsites must be used inside WebsiteProvider");
  }
  return context;
}