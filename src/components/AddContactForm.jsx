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
    <form
      onSubmit={handleSubmit}
      className="mt-6 bg-white p-4 rounded shadow-md space-y-3"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-blue-300 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-3 py-2 border border-blue-300 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-blue-300 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Add Contact
      </button>
    </form>
  );
}

