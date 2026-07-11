export default function HeroStats({ stats = [] }) {
  if (stats.length === 0) return null;

  return (
    <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-3">
          {stat.icon ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              {stat.icon}
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-gray-800">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            </div>
          )}
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
