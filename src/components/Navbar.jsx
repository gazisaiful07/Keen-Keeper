import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3 } from "lucide-react";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-600 hover:bg-blue-100 hover:text-blue-700"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          Keen<span className="text-blue-600">Keeper</span>
        </NavLink>

        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <Clock size={18} /> Timeline
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <BarChart3 size={18} /> Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
}