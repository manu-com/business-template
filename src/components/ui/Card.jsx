export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-8 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-xl dark:hover:shadow-gray-900/20 ${className}`}
    >
      {children}
    </div>
  );
}
