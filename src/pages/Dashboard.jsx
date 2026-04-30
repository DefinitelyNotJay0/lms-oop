const todayClasses = [
  { schedule: "MWF", time: "9:00", title: "Data Structures & Algorithms", code: "CS 311", room: "Eng 204", prof: "Dr. L. Tanaka", units: 3 },
  { schedule: "TTH", time: "10:30", title: "Database Management Sys...", code: "CS 322", room: "Eng 308", prof: "Prof. R. Cruz", units: 3 },
  { schedule: "MWF", time: "13:00", title: "Operating Systems", code: "CS 331", room: "Eng 211", prof: "Dr. M. Okafor", units: 3 },
  { schedule: "TTH", time: "8:00", title: "Discrete Mathematics", code: "MATH 215", room: "Sci 102", prof: "Dr. P. Singh", units: 3 },
];

const upcoming = [
  { code: "CS 331", type: "quiz", title: "Quiz 4 — Process Scheduling", due: "Due · Tomorrow · 13:00" },
  { code: "CS 311", type: "lab", title: "Lab 6 — AVL Tree implementation", due: "Due · Apr 24 · 23:59" },
  { code: "MATH 215", type: "assignment", title: "Problem Set 8", due: "Due · Apr 25 · 23:59" },
  { code: "CS 322", type: "project", title: "Group Project Milestone 2", due: "Due · Apr 26 · 18:00" },
];

const progress = [
  { name: "Data Structures & Algorithms", pct: 68 },
  { name: "Database Management Systems", pct: 75 },
  { name: "Operating Systems", pct: 54 },
  { name: "Discrete Mathematics", pct: 82 },
];

const announcements = [
  { from: "REGISTRAR'S OFFICE", title: "Pre-enrollment for next semester opens May 5", time: "2h ago" },
  { from: "DR. L. TANAKA", title: "CS 311 — Lab session moved to Eng 204", time: "Yesterday" },
  { from: "LIBRARY", title: "Extended hours during finals week", time: "2d ago" },
];

const typeColor = {
  quiz: "bg-purple-100 text-purple-700",
  lab: "bg-blue-100 text-blue-700",
  assignment: "bg-orange-100 text-orange-700",
  project: "bg-green-100 text-green-700",
};

export default function Dashboard({ navigate }) {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Good morning, Cyruz.</h1>
        <p className="text-gray-400 mt-1">BS Information System · 2nd Year · 2nd Semester · A.Y. 2025–2026</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: "📊", label: "Current GPA", value: "1.42", sub: "Top 12% of cohort", trend: "+0.10", trendColor: "text-emerald-500" },
          { icon: "📚", label: "Enrolled units", value: "18", sub: "6 courses" },
          { icon: "📅", label: "Attendance", value: "93%", sub: "Past 30 days" },
          { icon: "⏱", label: "Pending tasks", value: "4", sub: "This week", valColor: "text-[#e8a84c]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-lg">{stat.icon}</div>
              {stat.trend && <span className="text-xs font-semibold text-emerald-500 ml-auto">{stat.trend}</span>}
            </div>
            <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
            <div className={`text-2xl font-bold ${stat.valColor || "text-gray-900"}`}>{stat.value}</div>
            <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Today's classes + Upcoming */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-gray-900">Today's classes</h2>
              <p className="text-xs text-gray-400">Monday, April 21</p>
            </div>
            <button onClick={() => navigate("enrollment")} className="text-xs text-[#2d7a5e] font-medium hover:underline">All courses →</button>
          </div>
          <div className="space-y-3">
            {todayClasses.map((c) => (
              <div key={c.code + c.time} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-[#eaf5f0] transition-colors">
                <div className="text-center min-w-12">
                  <div className="text-xs text-gray-400 font-medium">{c.schedule}</div>
                  <div className="font-bold text-gray-900">{c.time}</div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-gray-900">{c.title}</div>
                  <div className="text-xs text-gray-400">{c.code} · {c.room} · {c.prof}</div>
                </div>
                <div className="bg-white border border-gray-100 text-xs px-2.5 py-1 rounded-full text-gray-500 font-medium">
                  {c.units} units
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">Upcoming</h2>
            <button onClick={() => navigate("learning")} className="text-xs text-[#2d7a5e] font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {upcoming.map((u) => (
              <div key={u.title} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">{u.code}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${typeColor[u.type]}`}>{u.type}</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">{u.title}</div>
                <div className="text-xs text-gray-400">{u.due}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course progress + Announcements */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Course progress</h2>
          <div className="space-y-4">
            {progress.map((p) => (
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-700 font-medium">{p.name}</span>
                  <span className="text-gray-500">{p.pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2d7a5e] rounded-full transition-all duration-700"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-[#fdf8f0] rounded-2xl p-5 border border-[#f0e8d0]">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#e8a84c] rounded-full" />
            Announcements
          </h2>
          <div className="space-y-4">
            {announcements.map((a) => (
              <div key={a.title} className="space-y-0.5">
                <div className="text-xs font-bold text-gray-400 tracking-wider">{a.from}</div>
                <div className="text-sm font-semibold text-gray-900">{a.title}</div>
                <div className="text-xs text-gray-400">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
