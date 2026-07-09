export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-8 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
