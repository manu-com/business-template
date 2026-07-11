const kpis = [
  { label: "Total Revenue", value: "$48,290", trend: "+12.5%" },
  { label: "Active Users", value: "2,847", trend: "+8.2%" },
  { label: "Conversion", value: "3.6%", trend: "+0.4%" },
];

const chartBars = [40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100];

const activities = [
  { label: "New signup", time: "2m ago", color: "bg-green-400" },
  { label: "Payment received", time: "14m ago", color: "bg-blue-400" },
  { label: "Report generated", time: "1h ago", color: "bg-slate-300" },
];

export default function BrowserMockup({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-xl dark:shadow-gray-900/20 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-gray-200 bg-slate-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-slate-400 dark:border-gray-600 dark:bg-gray-800">
          dashboard.yourdomain.com
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-2 h-5 w-40 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mb-5 h-3 w-56 rounded bg-gray-100 dark:bg-gray-700/50" />

        <div className="mb-5 grid grid-cols-3 gap-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
              <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">
                {kpi.label}
              </div>
              <div className="mb-1 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {kpi.value}
              </div>
              <div className="text-[10px] font-medium text-green-600 dark:text-green-400 sm:text-xs">
                {kpi.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="flex gap-1.5">
              <div className="h-5 w-12 rounded bg-gray-100 dark:bg-gray-700/50" />
              <div className="h-5 w-12 rounded bg-blue-50 dark:bg-blue-900/30" />
              <div className="h-5 w-12 rounded bg-gray-100 dark:bg-gray-700/50" />
            </div>
          </div>

          <div className="flex items-end gap-1.5 sm:gap-2">
            {chartBars.map((height, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${
                  i === chartBars.length - 1
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-blue-100 dark:bg-blue-900/40"
                }`}
                style={{ height: `${height * 0.55}px` }}
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
            <div className="h-2 w-16 rounded bg-gray-100 dark:bg-gray-700/50" />
            <div className="h-2 w-16 rounded bg-gray-100 dark:bg-gray-700/50" />
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <div className="mb-3 h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-3">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-md px-2 py-1.5"
              >
                <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${activity.color}`} />
                <div className="flex-1">
                  <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700 sm:w-28" />
                </div>
                <div className="h-2.5 w-10 shrink-0 rounded bg-gray-100 dark:bg-gray-700/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
