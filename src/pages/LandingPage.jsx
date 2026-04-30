export default function LandingPage({ onLogin }) {
  return (
    <div className="min-h-screen bg-[#f8f8f5] font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-4 bg-[#f8f8f5]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8b7a6a] rounded-lg flex items-center justify-center text-white text-sm">🎓</div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">SILID LMS</div>
            <div className="text-gray-400 text-xs">Student Portal</div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          <button onClick={onLogin} className="bg-[#8b7a6a] text-white text-sm px-5 py-2 rounded-full hover:bg-[#6b5f54] transition-colors flex items-center gap-1">
            Login →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center pt-16 pb-10 px-6">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-xs text-gray-600 px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-[#8b7a6a] rounded-full" />
          A.Y. 2025–2026 · 1st Semester is open
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-2">
          A calmer way to handle
        </h1>
        <div className="bg-gradient-to-r from-[#8b7a6a] to-[#a89478] h-14 rounded-lg mb-6" />
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          SILID LMS brings enrollment, grades, attendance, and learning into one quiet, modern portal — built for students, easy on the eyes.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={onLogin} className="bg-[#a89478] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8b7a6a] transition-colors flex items-center gap-2">
            Login to portal →
          </button>
          <button className="text-gray-700 font-medium px-6 py-3 hover:text-gray-900 transition-colors">
            Explore features
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-2xl mx-auto flex gap-4 px-6 mb-16">
        {[
          { value: "4", label: "Core modules" },
          { value: "1.42", label: "Avg. GPA tracked" },
          { value: "24/7", label: "Always available" },
        ].map((stat) => (
          <div key={stat.label} className="flex-1 bg-white rounded-xl p-5 text-center border border-gray-100">
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest text-[#8b7a6a] uppercase mb-2">EVERYTHING IN ONE PORTAL</p>
            <h2 className="text-4xl font-bold text-gray-900">Built around your week.</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: "📚", title: "Enrollment", desc: "Browse open courses, check prerequisites, and lock in your units in seconds." },
              { icon: "📈", title: "Grades", desc: "Live GPA tracking with prelim, midterm, and finals — all in one calm view." },
              { icon: "📅", title: "Attendance", desc: "Per-course present, absent, and late breakdown with visual progress rings." },
              { icon: "✨", title: "Learning Hub", desc: "Course modules, materials, and deadlines neatly organized by week." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl mb-4 border border-gray-100">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 border border-gray-100">
          <div className="flex gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Designed for focus, not friction.</h2>
              <p className="text-gray-500 mb-6">A school project portal that students actually enjoy opening — soft palette, clear hierarchy, and zero noise.</p>
              <button onClick={onLogin} className="bg-[#8b7a6a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#235f49] transition-colors inline-flex items-center gap-2">
                Sign in to continue →
              </button>
            </div>
            <div className="flex gap-3">
              {[
                { icon: "🔒", title: "Secure school login" },
                { icon: "⏱", title: "Saves you time daily" },
                { icon: "👥", title: "Built with students" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center w-28">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs font-semibold text-gray-700">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-10 py-5 flex items-center justify-between text-xs text-gray-400">
        <span>© 2026 Verdant Student Portal · Calm by design.</span>
        <span>Built for school project · React · Spring Boot ready</span>
      </footer>
    </div>
  );
}
