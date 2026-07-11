const teamMembers = [
  { name: "w-16", role: "w-20" },
  { name: "w-14", role: "w-18" },
  { name: "w-16", role: "w-14" },
  { name: "w-12", role: "w-20" },
];

const stats = [
  { label: "w-12", value: "w-16" },
  { label: "w-14", value: "w-12" },
  { label: "w-10", value: "w-14" },
];

export default function TeamMockup({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-xl dark:shadow-gray-900/20 ${className}`}
    >
      <div className="border-b border-gray-200 p-4 sm:p-5 dark:border-gray-700">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <div className="h-5 w-5 rounded bg-blue-200 dark:bg-blue-700" />
          </div>
          <div>
            <div className="mb-1 h-3.5 w-28 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-2.5 w-20 rounded bg-gray-100 dark:bg-gray-700/50" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-blue-50 dark:bg-blue-900/30" />
          <div className="h-6 w-20 rounded-full bg-gray-100 dark:bg-gray-700/50" />
          <div className="h-6 w-14 rounded-full bg-gray-100 dark:bg-gray-700/50" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-3 text-center dark:border-gray-700">
            <div className={`mx-auto mb-1 h-4 rounded bg-gray-200 dark:bg-gray-700 ${stat.value}`} />
            <div className={`mx-auto h-2.5 rounded bg-gray-100 dark:bg-gray-700/50 ${stat.label}`} />
          </div>
        ))}
      </div>

      <div className="space-y-3 px-4 pb-4 sm:px-5 sm:pb-5">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-gray-700">
              <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className={`mb-1 h-3 rounded bg-gray-200 dark:bg-gray-700 ${member.name}`} />
              <div className={`h-2.5 rounded bg-gray-100 dark:bg-gray-700/50 ${member.role}`} />
            </div>
            <div className="h-6 w-16 shrink-0 rounded-full bg-slate-100 dark:bg-gray-700/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
