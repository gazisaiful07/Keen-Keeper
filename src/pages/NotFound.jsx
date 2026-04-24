import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center text-center px-5">
      <div>
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-slate-500 mt-3">The page you are looking for does not exist.</p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}