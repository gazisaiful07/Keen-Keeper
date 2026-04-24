import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, Handshake } from "lucide-react";

const defaultTimeline = [
  { id: 1, type: "Call", friendName: "Sarah Chen", title: "Call with Sarah Chen", date: "March 29, 2026" },
  { id: 2, type: "Text", friendName: "Marcus Johnson", title: "Text with Marcus Johnson", date: "March 28, 2026" },
  { id: 3, type: "Video", friendName: "Aisha Patel", title: "Video with Aisha Patel", date: "March 23, 2026" },
  { id: 4, type: "Meetup", friendName: "Tom Baker", title: "Meetup with Tom Baker", date: "March 20, 2026" }
];

export default function Timeline() {
  const [filter, setFilter] = useState("All");
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline([...saved, ...defaultTimeline]);
  }, []);

  const filtered =
    filter === "All" ? timeline : timeline.filter((item) => item.type === filter);

  return (
    <section className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-5xl font-bold mb-8">Timeline</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="bg-white border rounded-lg px-4 py-3 w-full md:w-72 mb-8"
      >
        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

      <div className="space-y-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white border shadow-sm rounded-xl p-5 flex gap-4 items-center">
            <div className="text-blue-600">{getIcon(item.type)}</div>
            <div>
              <h3 className="font-bold text-blue-700">
                {item.type} <span className="text-slate-500 font-normal">with {item.friendName}</span>
              </h3>
              <p className="text-sm text-slate-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getIcon(type) {
  if (type === "Call") return <Phone size={30} />;
  if (type === "Text") return <MessageSquare size={30} />;
  if (type === "Video") return <Video size={30} />;
  return <Handshake size={30} />;
}