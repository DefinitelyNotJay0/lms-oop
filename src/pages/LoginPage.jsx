import { useState } from "react";

export default function LoginPage({ onLogin, onBack }) {
  const [email, setEmail] = useState("cyruz@neo.school.edu");
  const [password, setPassword] = useState("••••••••••");
  const [keep, setKeep] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8f8f5] font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-4">
        <button onClick={onBack} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8b7a6a] rounded-lg flex items-center justify-center text-white text-sm">🎓</div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">SILID LMS</div>
            <div className="text-gray-400 text-xs">Student Portal</div>
          </div>
        </button>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-600">Features</a>
          <a href="#" className="text-sm text-gray-600">About</a>
          <a href="#" className="text-sm text-gray-600">Help</a>
          <span className="text-sm font-semibold text-[#8b7a6a] border-b border-[6b5f54]">Preview</span>
        </div>
      </nav>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 pt-10 flex gap-16 items-start">
        {/* Left */}
        <div className="flex-1 pt-4">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-xs text-gray-600 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#8b7a6a] rounded-full" />
            A.Y. 2025–2026 · 1st Semester is open
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-2">
            Your calm,<br />modern
          </h1>
          <div className="bg-gradient-to-r from-[#8b7a6a] to-[#a89478] h-12 rounded-lg mb-5" />
          <p className="text-gray-500 text-base mb-8">
            Enrollment, grades, attendance, and learning —<br />
            quietly organized in one place, so you can focus<br />
            on what actually matters.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-xs">
            {[
              { icon: "📚", title: "Enrollment", sub: "Pick units in seconds" },
              { icon: "📈", title: "Grades", sub: "Live GPA tracking" },
              { icon: "📅", title: "Attendance", sub: "Per-course breakdown" },
              { icon: "✨", title: "LMS", sub: "Modules & deadlines" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-3">
                <div className="text-lg mb-1">{item.icon}</div>
                <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                <div className="text-xs text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Sign in card */}
        <div className="w-80 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm mt-4">
          <h2 className="font-bold text-gray-900 text-xl mb-1">Sign in</h2>
          <p className="text-sm text-gray-400 mb-6">Use your school account to continue.</p>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Student email</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-[#2d7a5e] transition-colors">
                <span className="text-gray-400 text-sm">✉️</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-600">Password</label>
                <button className="text-xs text-[#6b5f54] font-medium">Forgot?</button>
              </div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-[#2d7a5e] transition-colors">
                <span className="text-gray-400 text-sm">🔒</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setKeep(!keep)}
                className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${keep ? "bg-[#8b7a6a]" : "border border-gray-300"}`}
              >
                {keep && <span className="text-white text-xs">✓</span>}
              </div>
              <span className="text-sm text-gray-600">Keep me signed in on this device</span>
            </label>

            <button
              onClick={onLogin}
              className="w-full bg-[#a89478] text-white py-3 rounded-xl font-medium text-sm hover:bg-[#8b7a6a] transition-colors flex items-center justify-center gap-2"
            >
              Sign in to portal →
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-gray-100" />
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-1 border-t border-gray-100" />
            </div>

            <button className="w-full text-sm text-gray-600 font-medium py-2 hover:text-gray-900 transition-colors">
              Continue as guest
            </button>
            <p className="text-center text-sm text-gray-400">
              New here?{" "}
              <button className="text-[#6b5f54] font-medium hover:underline">Request an account</button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-10 py-5 mt-16 flex items-center justify-between text-xs text-gray-400">
        <span>© 2026 SILID LMS Student Portal</span>
        <span>Built for school project · React · Spring Boot ready</span>
      </footer>
    </div>
  );
}
