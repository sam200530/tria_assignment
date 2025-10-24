export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="🔍 Search contacts..."
      className="w-full p-3 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
    />
  );
}