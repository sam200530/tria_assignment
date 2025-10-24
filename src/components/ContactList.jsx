import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p className="text-gray-500 text-center mt-6">No contacts found.</p>;
  }

  return (
    <div className="grid gap-4 mt-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}