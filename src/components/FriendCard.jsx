import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {
  const statusColor = {
    "on-track": "bg-green-600",
    "almost due": "bg-amber-500",
    overdue: "bg-red-500",
  };

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="bg-white rounded-xl shadow-sm border p-6 text-center hover:scale-105 hover:shadow-lg transition"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />

      <h3 className="font-bold text-xl">{friend.name}</h3>
      <p className="text-sm text-slate-500 mt-1">
        {friend.days_since_contact} days ago
      </p>

      <div className="flex justify-center gap-2 flex-wrap mt-3">
        {friend.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <span className={`inline-block mt-3 text-white text-xs px-3 py-1 rounded-full ${statusColor[friend.status]}`}>
        {friend.status}
      </span>
    </Link>
  );
}