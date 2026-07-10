const statCards = [{}, {}, {}];
const bottomCards = [
  { lines: ["w-full", "w-2/3"] },
  { lines: ["w-full", "w-2/3"] },
];

export default function BrowserMockup({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-gray-200 bg-slate-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-slate-400">
          yourdomain.com
        </div>
      </div>

      <div className="flex min-h-[320px] sm:min-h-[400px]">
        <div className="hidden w-48 border-r border-gray-200 bg-slate-50 p-4 sm:block">
          <div className="space-y-3">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-200" />
            <div className="h-3 w-28 rounded bg-gray-200" />
            <div className="h-3 w-16 rounded bg-gray-200" />
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-6">
          <div className="mb-2 h-6 w-48 rounded bg-gray-200" />
          <div className="mb-6 space-y-2">
            <div className="h-3 w-full max-w-sm rounded bg-gray-100" />
            <div className="h-3 w-full max-w-xs rounded bg-gray-100" />
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            {statCards.map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-3">
                <div className="mb-2 h-3 w-12 rounded bg-blue-200" />
                <div className="h-4 w-16 rounded bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mb-4 rounded-lg border border-gray-200 p-4">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-2/3 rounded-full bg-blue-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-gray-100" />
              <div className="h-2 w-full rounded bg-gray-100" />
              <div className="h-2 w-3/4 rounded bg-gray-100" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {bottomCards.map((card, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-3">
                <div className="mb-2 h-3 w-20 rounded bg-gray-200" />
                <div className="space-y-1.5">
                  {card.lines.map((width, j) => (
                    <div key={j} className={`h-2 rounded bg-gray-100 ${width}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
