import { useState } from "react";

export default function AddContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return alert("Name and phone are required!");
    onAdd({ name, phone, email });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white p-4 rounded shadow-md space-y-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
        Add Contact
      </button>
    </form>
  );
}


