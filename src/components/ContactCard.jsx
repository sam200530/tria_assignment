export default function ContactCard({ contact, onDelete, onEdit }) {
  return (
    <div className="bg-[#1a1f47] text-gray-100 shadow-lg rounded-xl p-5 flex justify-between items-center border border-blue-700 hover:border-blue-400 transition">
      <div className="flex items-start gap-4">
        {/* Avatar Circle */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-md">
          {contact.name.charAt(0).toUpperCase()}
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-blue-300">{contact.name}</h2>
          <p className="text-sm text-gray-400">📞 {contact.phone}</p>
          {contact.email && (
            <p className="text-sm text-gray-400">✉️ {contact.email}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() =>
            onEdit(contact.id, {
              name: prompt("Enter new name:", contact.name) || contact.name,
            })
          }
          className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(contact.id)}
          className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
