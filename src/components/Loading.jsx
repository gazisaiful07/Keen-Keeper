export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-blue-600 font-semibold text-lg">
        Loading friends...
      </p>

    </div>
  );
}