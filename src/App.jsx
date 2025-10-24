import { useState, useEffect } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactCard from "./components/ContactCard";
import SearchBar from "./components/SearchBar";

export default function App() {
  const sampleContacts = [
    { id: 1, name: "ram", phone: "9246643111", email: "ram@emial.com", tag: "Frequent" },
    { id: 2, name: "Dev", phone: "9123456789", email: "dev@tria.com", tag: "Recent" },
  ];

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : sampleContacts;
  });

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const handleEdit = (id, updatedContact) => {
    setContacts(
      contacts.map((c) => (c.id === id ? { ...c, ...updatedContact } : c))
    );
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all contacts?")) {
      setContacts([]);
    }
  };

  const handleSort = () => {
    const sorted = [...contacts].sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });
    setContacts(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      (c.email && c.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b24] via-[#11153a] to-[#1a1f47] text-white flex flex-col items-center p-8">
      <div className="w-full max-w-3xl bg-[#0e1330] rounded-3xl shadow-lg p-8 border border-gray-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-purple-300">
            Tria — <span className="text-white">Contacts</span>
          </h1>
          <button
            onClick={() => document.getElementById("add-contact-form").scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 font-medium"
          >
            + Add Contact
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search contact..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1a1f47] text-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Enter
          </button>
        </div>

        {/* Sort & Clear Buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={handleSort}
            className="px-4 py-2 bg-[#1a1f47] border border-purple-600 text-purple-300 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
          >
            Sort {sortOrder === "asc" ? "A–Z" : "Z–A"}
          </button>
          <button
            onClick={handleClearAll}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Contacts */}
        <div className="space-y-4">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((c) => (
              <ContactCard
                key={c.id}
                contact={c}
                onDelete={handleDelete}
                onEdit={handleEdit}
                className="bg-[#13193d] border border-gray-700 rounded-xl p-5 flex justify-between items-center hover:border-purple-500 transition"
              />
            ))
          ) : (
            <p className="text-gray-400 text-center">No contacts found</p>
          )}
        </div>

        {/* Add Contact Form */}
        <div id="add-contact-form" className="mt-8">
          <AddContactForm onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}

