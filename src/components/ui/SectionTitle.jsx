export default function SectionTitle({ title, description, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}
