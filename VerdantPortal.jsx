import { useState, useEffect } from "react";

// ── colour tokens ──────────────────────────────────────────────────────────
const C = {
  teal: "#2D7D6F",
  tealDark: "#1f5c52",
  tealLight: "#e8f5f2",
  tealMid: "#4a9d8e",
  cream: "#f7f5f0",
  sand: "#f0ede6",
  white: "#ffffff",
  text: "#1a1f1e",
  textMuted: "#6b7a78",
  textLight: "#9aaba8",
  border: "#e2e8e6",
  warn: "#e07b54",
  success: "#2D7D6F",
  red: "#d94f4f",
  amber: "#d4860a",
};

// ── tiny helpers ───────────────────────────────────────────────────────────
const Badge = ({ children, color = C.teal }) => (
  <span
    style={{
      background: color + "18",
      color,
      border: `1px solid ${color}33`,
      borderRadius: 6,
      padding: "2px 8px",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.03em",
    }}
  >
    {children}
  </span>
);

const Tag = ({ children, color = C.teal }) => (
  <span
    style={{
      background: color,
      color: "#fff",
      borderRadius: 4,
      padding: "1px 6px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const ProgressBar = ({ pct, color = C.teal }) => (
  <div
    style={{
      height: 4,
      borderRadius: 999,
      background: C.border,
      overflow: "hidden",
      marginTop: 6,
    }}
  >
    <div
      style={{
        width: `${pct}%`,
        height: "100%",
        background: color,
        borderRadius: 999,
        transition: "width 0.6s ease",
      }}
    />
  </div>
);

const Stat = ({ icon, label, value, sub, iconBg = C.tealLight }) => (
  <div
    style={{
      background: C.white,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      padding: "18px 20px",
      flex: 1,
      minWidth: 0,
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        marginBottom: 10,
      }}
    >
      {icon}
    </div>
    <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 2 }}>{label}</div>
    <div style={{ fontSize: 26, fontWeight: 800, color: C.text, lineHeight: 1.1 }}>{value}</div>
    {sub && <div style={{ fontSize: 11, color: C.textMuted, marginTop: 3 }}>{sub}</div>}
  </div>
);

// ── sidebar ────────────────────────────────────────────────────────────────
const navItems = [
  { id: "dashboard", icon: "⊞", label: "Dashboard" },
  { id: "enrollment", icon: "⊡", label: "Enrollment" },
  { id: "grades", icon: "◎", label: "Grades" },
  { id: "attendance", icon: "⊟", label: "Attendance" },
  { id: "learning", icon: "⋮⋮", label: "Learning Hub" },
];

function Sidebar({ active, setActive }) {
  return (
    <aside
      style={{
        width: 220,
        minHeight: "100vh",
        background: C.white,
        borderRight: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: "0 20px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: C.teal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 18,
          }}
        >
          🎓
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, color: C.text }}>Verdant</div>
          <div style={{ fontSize: 11, color: C.textMuted }}>Student Portal</div>
        </div>
      </div>

      <div style={{ fontSize: 10, fontWeight: 700, color: C.textLight, padding: "0 20px 8px", letterSpacing: "0.08em" }}>
        MAIN
      </div>

      {navItems.map((n) => (
        <button
          key={n.id}
          onClick={() => setActive(n.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            border: "none",
            background: active === n.id ? C.tealLight : "transparent",
            color: active === n.id ? C.teal : C.textMuted,
            fontWeight: active === n.id ? 700 : 500,
            fontSize: 14,
            cursor: "pointer",
            textAlign: "left",
            borderRadius: 0,
            transition: "all 0.15s",
            borderLeft: active === n.id ? `3px solid ${C.teal}` : "3px solid transparent",
          }}
        >
          <span style={{ fontSize: 16 }}>{n.icon}</span>
          {n.label}
        </button>
      ))}

      <div style={{ flex: 1 }} />

      {/* User */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: C.teal,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          MR
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>Maya Reyes</div>
          <div style={{ fontSize: 11, color: C.textMuted }}>STU-2024-0481</div>
        </div>
        <span style={{ fontSize: 16, color: C.textLight, cursor: "pointer" }}>⚙</span>
      </div>
    </aside>
  );
}

// ── top bar ────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div
      style={{
        height: 56,
        borderBottom: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: 16,
        background: C.white,
        flexShrink: 0,
      }}
    >
      <span style={{ color: C.textLight, fontSize: 18 }}>⊡</span>
      <div
        style={{
          flex: 1,
          background: C.cream,
          borderRadius: 8,
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: C.textMuted,
          fontSize: 13,
          cursor: "text",
          maxWidth: 420,
        }}
      >
        <span>🔍</span> Search courses, modules, classmates…
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ position: "relative" }}>
        <span style={{ fontSize: 20, color: C.textMuted, cursor: "pointer" }}>🔔</span>
        <span
          style={{
            position: "absolute",
            top: -2,
            right: -2,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: C.warn,
            border: "1.5px solid #fff",
          }}
        />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: DASHBOARD
// ══════════════════════════════════════════════════════════════════════
function Dashboard() {
  const courses = [
    { code: "MWF", time: "9:00", name: "Data Structures & Algorithms", room: "CS 311 · Eng 204 · Dr. L. Tanaka", units: 3 },
    { code: "TTH", time: "10:30", name: "Database Management Sys…", room: "CS 322 · Eng 308 · Prof. R. Cruz", units: 3 },
    { code: "MWF", time: "13:00", name: "Operating Systems", room: "CS 331 · Eng 211 · Dr. M. Okafor", units: 3 },
    { code: "TTH", time: "8:00", name: "Discrete Mathematics", room: "MATH 215 · Sci 102 · Dr. P. Singh", units: 3 },
  ];
  const upcoming = [
    { course: "CS 331", type: "quiz", title: "Quiz 4 — Process Scheduling", due: "Tomorrow · 13:00" },
    { course: "CS 311", type: "lab", title: "Lab 6 — AVL Tree implementation", due: "Apr 24 · 23:59" },
    { course: "MATH 215", type: "assignment", title: "Problem Set 8", due: "Apr 25 · 23:59" },
    { course: "CS 322", type: "project", title: "Group Project Milestone 2", due: "Apr 26 · 18:00" },
  ];
  const progress = [
    { name: "Data Structures & Algorithms", pct: 68 },
    { name: "Database Management Systems", pct: 75 },
    { name: "Operating Systems", pct: 54 },
    { name: "Discrete Mathematics", pct: 82 },
  ];
  const announcements = [
    { from: "REGISTRAR'S OFFICE", title: "Pre-enrollment for next semester opens May 5", ago: "2h ago" },
    { from: "DR. L. TANAKA", title: "CS 311 — Lab session moved to Eng 204", ago: "Yesterday" },
    { from: "LIBRARY", title: "Extended hours during finals week", ago: "2d ago" },
  ];

  return (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Greeting */}
      <div>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: C.text, margin: 0 }}>Good morning, Maya.</h1>
        <p style={{ color: C.textMuted, marginTop: 4, fontSize: 14 }}>
          BS Computer Science · 3rd Year · 1st Semester · A.Y. 2025–2026
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 14 }}>
        <Stat icon="📈" label="Current GPA" value="1.42" sub="Top 12% of cohort" iconBg="#e8f5f2" />
        <Stat icon="⊡" label="Enrolled units" value="18" sub="6 courses" iconBg="#e8f0fc" />
        <Stat icon="⊟" label="Attendance" value="93%" sub="Past 30 days" iconBg="#fef3e8" />
        <Stat icon="⏰" label="Pending tasks" value="4" sub="This week" iconBg="#fff0ee" />
      </div>

      {/* Today + Upcoming */}
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1.6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: C.text }}>Today's classes</div>
              <div style={{ fontSize: 12, color: C.textMuted }}>Monday, April 21</div>
            </div>
            <button style={{ background: "none", border: "none", color: C.teal, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
              All courses ›
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {courses.map((c, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div style={{ textAlign: "center", minWidth: 48 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.teal, background: C.tealLight, borderRadius: 4, padding: "1px 5px", marginBottom: 2 }}>
                    {c.code}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: C.text }}>{c.time}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: C.textMuted }}>{c.room}</div>
                </div>
                <Badge>{c.units} units</Badge>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: C.text }}>Upcoming</div>
            <button style={{ background: "none", border: "none", color: C.teal, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
              View all
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {upcoming.map((u, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "12px 14px",
                }}
              >
                <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <Tag>{u.course}</Tag>
                  <Tag color={C.textMuted}>{u.type}</Tag>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 2 }}>{u.title}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>Due · {u.due}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress + Announcements */}
      <div style={{ display: "flex", gap: 20 }}>
        <div
          style={{
            flex: 1.6,
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: "20px 22px",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 18, color: C.text, marginBottom: 18 }}>Course progress</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {progress.map((p, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600, color: C.text }}>
                  <span>{p.name}</span>
                  <span style={{ color: C.teal }}>{p.pct}%</span>
                </div>
                <ProgressBar pct={p.pct} />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: "#fdf8f0",
            border: `1px solid #e8dfc8`,
            borderRadius: 14,
            padding: "20px 22px",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 18, color: C.text, marginBottom: 14 }}>· Announcements</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {announcements.map((a, i) => (
              <div key={i}>
                <div style={{ fontSize: 10, fontWeight: 700, color: C.textMuted, letterSpacing: "0.07em" }}>{a.from}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: C.text, margin: "2px 0" }}>{a.title}</div>
                <div style={{ fontSize: 11, color: C.textLight }}>{a.ago}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: ENROLLMENT
// ══════════════════════════════════════════════════════════════════════
function Enrollment() {
  const enrolled = [
    { code: "CS 311", name: "Data Structures & Algorithms", schedule: "MWF 9:00–10:00", room: "Eng 204", prof: "Dr. L. Tanaka", units: 3 },
    { code: "CS 322", name: "Database Management Systems", schedule: "TTh 10:30–12:00", room: "Eng 308", prof: "Prof. R. Cruz", units: 3 },
    { code: "CS 331", name: "Operating Systems", schedule: "MWF 13:00–14:00", room: "Eng 211", prof: "Dr. M. Okafor", units: 3 },
    { code: "MATH 215", name: "Discrete Mathematics", schedule: "TTh 8:00–9:30", room: "Sci 102", prof: "Dr. P. Singh", units: 3 },
    { code: "ENG 210", name: "Technical Writing", schedule: "F 14:00–17:00", room: "Hum 121", prof: "Prof. A. Mendoza", units: 3 },
    { code: "PE 3", name: "Movement Studies", schedule: "W 15:00–17:00", room: "Gym B", prof: "Coach J. Lim", units: 2 },
  ];
  const available = [
    { code: "CS 401", name: "Software Engineering", units: 3, prereq: "CS 322", slots: 12, slotsColor: C.teal },
    { code: "CS 412", name: "Machine Learning Basics", units: 3, prereq: "MATH 215", slots: 8, slotsColor: C.warn },
    { code: "CS 423", name: "Web Systems & Tech", units: 3, prereq: "CS 322", slots: 18, slotsColor: C.teal },
    { code: "PHIL 102", name: "Ethics in Technology", units: 3, prereq: "—", slots: 25, slotsColor: C.teal },
  ];

  return (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: C.text, margin: 0 }}>Enrollment</h1>
        <p style={{ color: C.textMuted, marginTop: 4, fontSize: 14 }}>1st Semester · A.Y. 2025–2026 · 6 courses · 18 units</p>
      </div>

      {/* Load banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${C.teal}, ${C.tealMid})`,
          borderRadius: 14,
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div>
          <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>Current load</div>
          <div style={{ fontSize: 28, fontWeight: 900 }}>18 of 21 units</div>
          <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>You may add up to 3 more units this semester.</div>
        </div>
        <button
          style={{
            background: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 18px",
            fontWeight: 700,
            fontSize: 13,
            color: C.teal,
            cursor: "pointer",
          }}
        >
          View enrollment slip
        </button>
      </div>

      <div>
        <div style={{ fontWeight: 800, fontSize: 20, color: C.text, marginBottom: 14 }}>Currently enrolled</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {enrolled.map((c, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "16px 18px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.teal }}>{c.code}</div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: C.text, marginTop: 2 }}>{c.name}</div>
                </div>
                <Badge color={C.teal}>✓ Enrolled</Badge>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: C.textMuted }}>
                <span>⏱ {c.schedule}</span>
                <span>📍 {c.room}</span>
                <span>👤 {c.prof}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: C.textMuted }}>{c.units} units</span>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: C.teal,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontWeight: 800, fontSize: 20, color: C.text, marginBottom: 14 }}>Available courses</div>
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: C.cream }}>
                {["CODE", "TITLE", "UNITS", "PREREQ", "SLOTS", ""].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.textMuted,
                      letterSpacing: "0.07em",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {available.map((c, i) => (
                <tr key={i} style={{ borderBottom: i < available.length - 1 ? `1px solid ${C.border}` : "none" }}>
                  <td style={{ padding: "14px 16px", fontWeight: 700, fontSize: 13, color: C.teal }}>{c.code}</td>
                  <td style={{ padding: "14px 16px", fontWeight: 600, fontSize: 13, color: C.text }}>{c.name}</td>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: C.textMuted }}>{c.units}</td>
                  <td style={{ padding: "14px 16px", fontSize: 13, color: C.textMuted }}>{c.prereq}</td>
                  <td style={{ padding: "14px 16px" }}>
                    <span
                      style={{
                        background: c.slotsColor + "18",
                        color: c.slotsColor,
                        borderRadius: 6,
                        padding: "2px 8px",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {c.slots} left
                    </span>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <button
                      style={{
                        background: C.teal,
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "7px 16px",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                    >
                      + Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: GRADES
// ══════════════════════════════════════════════════════════════════════
function Grades() {
  const semGrades = [
    { code: "CS 311", name: "Data Structures & Algorithms", prelim: 92, midterm: 89, finals: null, standing: "1.50" },
    { code: "CS 322", name: "Database Management Systems", prelim: 95, midterm: 93, finals: null, standing: "1.25" },
    { code: "CS 331", name: "Operating Systems", prelim: 86, midterm: 88, finals: null, standing: "1.75" },
    { code: "MATH 215", name: "Discrete Mathematics", prelim: 90, midterm: 91, finals: null, standing: "1.50" },
    { code: "ENG 210", name: "Technical Writing", prelim: 94, midterm: 92, finals: null, standing: "1.25" },
  ];
  const trend = [
    { sem: "1ST SEM 2023–24", gpa: "1.61", units: 18 },
    { sem: "2ND SEM 2023–24", gpa: "1.45", units: 19 },
    { sem: "1ST SEM 2024–25", gpa: "1.52", units: 18 },
    { sem: "2ND SEM 2024–25", gpa: "1.38", units: 21 },
  ];

  return (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: C.text, margin: 0 }}>Academic record</h1>
        <p style={{ color: C.textMuted, marginTop: 4, fontSize: 14 }}>1st Semester · A.Y. 2025–2026</p>
      </div>

      {/* GPA cards */}
      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            background: `linear-gradient(135deg, ${C.teal}, ${C.tealMid})`,
            borderRadius: 14,
            padding: "24px",
            color: "#fff",
            minWidth: 180,
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6 }}>Cumulative GPA</div>
          <div style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}>1.42</div>
          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8 }}>Latin honors track · Magna Cum Laude</div>
        </div>

        <div
          style={{
            flex: 1,
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: "20px 24px",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 16, color: C.text, marginBottom: 16 }}>GPA trend</div>
          <div style={{ display: "flex", gap: 16 }}>
            {trend.map((t, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: C.textMuted, marginBottom: 6 }}>{t.sem}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: C.text }}>{t.gpa}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{t.units} units</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* This semester table */}
      <div>
        <div style={{ fontWeight: 800, fontSize: 20, color: C.text, marginBottom: 14 }}>This semester</div>
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: C.cream }}>
                {["COURSE", "PRELIM", "MIDTERM", "FINALS", "STANDING"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 20px",
                      textAlign: "left",
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.textMuted,
                      letterSpacing: "0.07em",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {semGrades.map((g, i) => (
                <tr key={i} style={{ borderBottom: i < semGrades.length - 1 ? `1px solid ${C.border}` : "none" }}>
                  <td style={{ padding: "16px 20px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.teal }}>{g.code}</div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{g.name}</div>
                  </td>
                  <td style={{ padding: "16px 20px", fontSize: 14, color: C.text }}>{g.prelim}</td>
                  <td style={{ padding: "16px 20px", fontSize: 14, color: C.text }}>{g.midterm}</td>
                  <td style={{ padding: "16px 20px", fontSize: 14, color: C.textLight }}>—</td>
                  <td style={{ padding: "16px 20px" }}>
                    <span
                      style={{
                        background: C.tealLight,
                        color: C.teal,
                        borderRadius: 8,
                        padding: "4px 12px",
                        fontWeight: 800,
                        fontSize: 14,
                      }}
                    >
                      {g.standing}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              padding: "12px 20px",
              fontSize: 11,
              color: C.textMuted,
              borderTop: `1px solid ${C.border}`,
              background: C.cream,
            }}
          >
            Grading scale: 1.00 (excellent) → 5.00 (failed). Final grades are tentative until end of term.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: ATTENDANCE
// ══════════════════════════════════════════════════════════════════════
function Attendance() {
  const byCourse = [
    { code: "CS 311", name: "Data Structures & Algorithms", pct: 90, present: 28, late: 2, absent: 1 },
    { code: "CS 322", name: "Database Management Systems", pct: 96, present: 22, late: 1, absent: 0 },
    { code: "CS 331", name: "Operating Systems", pct: 87, present: 26, late: 1, absent: 3 },
    { code: "MATH 215", name: "Discrete Mathematics", pct: 100, present: 24, late: 0, absent: 0 },
    { code: "ENG 210", name: "Technical Writing", pct: 90, present: 9, late: 0, absent: 1 },
  ];
  const recent = [
    { code: "CS 311", date: "Apr 21", status: "present" },
    { code: "MATH…", date: "Apr 21", status: "present" },
    { code: "ENG 210", date: "Apr 18", status: "late" },
    { code: "CS 322", date: "Apr 17", status: "present" },
    { code: "CS 331", date: "Apr 16", status: "absent" },
    { code: "CS 311", date: "Apr 15", status: "present" },
  ];

  const statusIcon = (s) => s === "present" ? "✓" : s === "late" ? "⏰" : "✕";
  const statusColor = (s) => s === "present" ? C.teal : s === "late" ? C.warn : C.red;

  return (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: C.text, margin: 0 }}>Attendance</h1>
        <p style={{ color: C.textMuted, marginTop: 4, fontSize: 14 }}>Tracking your presence across all courses</p>
      </div>

      {/* Overview + Recent */}
      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: "22px 24px",
            display: "flex",
            alignItems: "center",
            gap: 24,
            flex: "0 0 auto",
          }}
        >
          {/* Circle */}
          <div style={{ position: "relative", width: 80, height: 80 }}>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke={C.border} strokeWidth="8" />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke={C.teal}
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 34 * 0.93} ${2 * Math.PI * 34}`}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 16,
                color: C.text,
              }}
            >
              93%
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: C.teal }}>Excellent</div>
            <div style={{ fontSize: 12, color: C.textMuted, maxWidth: 130 }}>
              Above the 85% requirement to take finals.
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: "20px 24px",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 16, color: C.text, marginBottom: 14 }}>Recent activity</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {recent.map((r, i) => (
              <div
                key={i}
                style={{
                  background: C.cream,
                  borderRadius: 10,
                  padding: "10px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: statusColor(r.status) + "22",
                    color: statusColor(r.status),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {statusIcon(r.status)}
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12, color: C.text }}>{r.code}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>{r.date} · {r.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* By course */}
      <div>
        <div style={{ fontWeight: 800, fontSize: 20, color: C.text, marginBottom: 14 }}>By course</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {byCourse.map((c, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "16px 20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.teal }}>{c.code}</div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: C.text }}>{c.name}</div>
                </div>
                <span style={{ fontSize: 22, fontWeight: 900, color: c.pct === 100 ? C.teal : c.pct >= 90 ? C.teal : c.pct >= 85 ? C.amber : C.red }}>
                  {c.pct}% <span style={{ fontSize: 12, fontWeight: 500, color: C.textMuted }}>attendance</span>
                </span>
              </div>
              <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                {[
                  { label: "Present", val: c.present, color: C.teal },
                  { label: "Late", val: c.late, color: c.late > 0 ? C.amber : C.textLight },
                  { label: "Absent", val: c.absent, color: c.absent > 0 ? C.red : C.textLight },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      flex: 1,
                      background: s.color + "12",
                      borderRadius: 8,
                      padding: "8px 12px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: C.textMuted }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <ProgressBar pct={c.pct} color={c.pct === 100 ? C.teal : c.pct >= 90 ? C.teal : c.pct >= 85 ? C.amber : C.red} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: LEARNING HUB
// ══════════════════════════════════════════════════════════════════════
function LearningHub() {
  const dueThisWeek = [
    { course: "CS 331", type: "quiz", title: "Quiz 4 — Process…", due: "Tomorrow · 13:00" },
    { course: "CS 311", type: "lab", title: "Lab 6 — AVL Tree…", due: "Apr 24 · 23:59" },
    { course: "MATH 215", type: "assignment", title: "Problem Set 8", due: "Apr 25 · 23:59" },
    { course: "CS 322", type: "project", title: "Group Project Milestone 2", due: "Apr 26 · 18:00" },
  ];
  const courses = [
    { code: "CS 311", name: "Data Structures & Algorithms", prof: "Dr. L. Tanaka", modules: "8 of 12 modules", pct: 68, nextUp: "Lab 6 — AVL Trees", due: "Due Apr 24" },
    { code: "CS 322", name: "Database Management Systems", prof: "Prof. R. Cruz", modules: "7 of 10 modules", pct: 75, nextUp: "Project Milestone 2", due: "Due Apr 26" },
    { code: "CS 331", name: "Operating Systems", prof: "Dr. M. Okafor", modules: "7 of 14 modules", pct: 54, nextUp: "Quiz 4 — Scheduling", due: "Due Apr 23" },
    { code: "MATH 215", name: "Discrete Mathematics", prof: "Dr. P. Singh", modules: "7 of 9 modules", pct: 82, nextUp: "Problem Set 8", due: "Due Apr 25" },
  ];

  return (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: C.text, margin: 0 }}>Learning Hub</h1>
        <p style={{ color: C.textMuted, marginTop: 4, fontSize: 14 }}>Course materials, modules, and submissions</p>
      </div>

      {/* Due this week */}
      <div
        style={{
          background: "#fdf8f0",
          border: `1px solid #e8dfc8`,
          borderRadius: 14,
          padding: "18px 22px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span>📅</span>
          <span style={{ fontWeight: 800, fontSize: 16, color: C.text }}>Due this week</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {dueThisWeek.map((d, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "12px 14px",
              }}
            >
              <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                <Tag>{d.course}</Tag>
              </div>
              <div style={{ fontWeight: 700, fontSize: 13, color: C.text, marginBottom: 4 }}>{d.title}</div>
              <div style={{ fontSize: 11, color: C.textMuted }}>{d.due}</div>
            </div>
          ))}
        </div>
      </div>

      {/* My courses */}
      <div>
        <div style={{ fontWeight: 800, fontSize: 20, color: C.text, marginBottom: 14 }}>My courses</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {courses.map((c, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: `linear-gradient(135deg, ${C.teal}, ${C.tealMid})`,
                  padding: "14px 18px",
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 2 }}>{c.code}</div>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{c.name}</div>
              </div>
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 12 }}>{c.prof}</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.textMuted, marginBottom: 4 }}>
                  <span>{c.modules}</span>
                  <span style={{ color: C.teal, fontWeight: 700 }}>{c.pct}%</span>
                </div>
                <ProgressBar pct={c.pct} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: `1px solid ${C.border}`,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 10, color: C.textMuted, fontWeight: 700, letterSpacing: "0.05em" }}>NEXT UP</div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{c.nextUp}</div>
                    <div style={{ fontSize: 11, color: C.textMuted }}>{c.due}</div>
                  </div>
                  <button
                    style={{
                      background: C.teal,
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "8px 18px",
                      fontWeight: 700,
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: LANDING
// ══════════════════════════════════════════════════════════════════════
function Landing({ onLogin }) {
  const features = [
    { icon: "⊡", title: "Enrollment", desc: "Browse open courses, check prerequisites, and lock in your units in seconds." },
    { icon: "📈", title: "Grades", desc: "Live GPA tracking with prelim, midterm, and finals — all in one calm view." },
    { icon: "⊟", title: "Attendance", desc: "Per-course present, absent, and late breakdown with visual progress rings." },
    { icon: "✦", title: "Learning Hub", desc: "Course modules, materials, and deadlines neatly organized by week." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.cream, fontFamily: "inherit" }}>
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          height: 60,
          borderBottom: `1px solid ${C.border}`,
          background: C.white,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: C.teal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 16,
            }}
          >
            🎓
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: C.text }}>Verdant</div>
            <div style={{ fontSize: 10, color: C.textMuted }}>Student Portal</div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 32 }}>
          {["Features", "About", "Contact"].map((l) => (
            <a key={l} href="#" style={{ color: C.textMuted, fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <button
          onClick={onLogin}
          style={{
            background: C.teal,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Login →
        </button>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: C.tealLight,
            border: `1px solid ${C.teal}44`,
            borderRadius: 999,
            padding: "4px 14px",
            fontSize: 12,
            color: C.teal,
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal, display: "inline-block" }} />
          A.Y. 2025–2026 · 1st Semester is open
        </div>
        <h1 style={{ fontSize: 64, fontWeight: 900, color: C.text, lineHeight: 1.05, margin: "0 0 16px" }}>
          A calmer way to handle
          <div style={{ background: `linear-gradient(90deg, ${C.teal}, ${C.tealMid})`, borderRadius: 8, height: 16, margin: "8px auto 0", maxWidth: 520 }} />
        </h1>
        <p style={{ fontSize: 16, color: C.textMuted, maxWidth: 500, margin: "20px auto 36px", lineHeight: 1.6 }}>
          Verdant brings enrollment, grades, attendance, and learning into one quiet, modern portal — built for students, easy on the eyes.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={onLogin}
            style={{
              background: C.teal,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 28px",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Login to portal →
          </button>
          <button
            style={{
              background: "none",
              color: C.text,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: "12px 28px",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Explore features
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 52 }}>
          {[{ val: "4", label: "Core modules" }, { val: "1.42", label: "Avg. GPA tracked" }, { val: "24/7", label: "Always available" }].map((s) => (
            <div
              key={s.label}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "16px 28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: C.text }}>{s.val}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ background: C.white, padding: "60px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.teal, letterSpacing: "0.1em", marginBottom: 8 }}>EVERYTHING IN ONE PORTAL</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: C.text, margin: 0 }}>Built around your week.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: C.cream,
                borderRadius: 14,
                padding: "22px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: C.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  marginBottom: 14,
                  border: `1px solid ${C.border}`,
                }}
              >
                {f.icon}
              </div>
              <div style={{ fontWeight: 800, fontSize: 15, color: C.text, marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "60px 48px" }}>
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            gap: 48,
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: C.text, margin: "0 0 12px" }}>Designed for focus, not friction.</h2>
            <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.6, margin: "0 0 20px" }}>
              A school project portal that students actually enjoy opening — soft palette, clear hierarchy, and zero noise.
            </p>
            <button
              onClick={onLogin}
              style={{
                background: C.teal,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "11px 24px",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Sign in to continue →
            </button>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[{ icon: "🔒", label: "Secure school login" }, { icon: "⏰", label: "Saves you time daily" }, { icon: "👥", label: "Built with students" }].map((b) => (
              <div
                key={b.label}
                style={{
                  background: C.cream,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "16px 14px",
                  textAlign: "center",
                  minWidth: 90,
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 6 }}>{b.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: C.textMuted,
        }}
      >
        <span>© 2026 Verdant Student Portal · Calm by design.</span>
        <span>Built for school project · React · Spring Boot ready</span>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// PAGE: LOGIN
// ══════════════════════════════════════════════════════════════════════
function Login({ onLogin, onBack }) {
  const [email, setEmail] = useState("maya.reyes@school.edu");
  const [password, setPassword] = useState("••••••••••");
  const [keep, setKeep] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.cream,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          height: 60,
          borderBottom: `1px solid ${C.border}`,
          background: C.white,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={onBack}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: C.teal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 16,
            }}
          >
            🎓
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: C.text }}>Verdant</div>
            <div style={{ fontSize: 10, color: C.textMuted }}>Student Portal</div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 32 }}>
          {["Features", "About", "Help"].map((l) => (
            <a key={l} href="#" style={{ color: C.textMuted, fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <button style={{ background: "none", border: "none", color: C.textMuted, fontSize: 14, cursor: "pointer" }}>Preview</button>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", maxWidth: 960, margin: "0 auto", width: "100%", padding: "0 48px", gap: 60 }}>
        {/* Left */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: C.tealLight,
              border: `1px solid ${C.teal}44`,
              borderRadius: 999,
              padding: "4px 14px",
              fontSize: 12,
              color: C.teal,
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal, display: "inline-block" }} />
            A.Y. 2025–2026 · 1st Semester is open
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 900, color: C.text, margin: "0 0 10px", lineHeight: 1.05 }}>
            Your calm,<br />modern
            <div style={{ background: `linear-gradient(90deg, ${C.teal}, ${C.tealMid})`, borderRadius: 6, height: 14, maxWidth: 260, marginTop: 6 }} />
          </h1>
          <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.6, margin: "16px 0 28px" }}>
            Enrollment, grades, attendance, and learning — quietly organized in one place, so you can focus on what actually matters.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "⊡", title: "Enrollment", sub: "Pick units in seconds" },
              { icon: "📈", title: "Grades", sub: "Live GPA tracking" },
              { icon: "⊟", title: "Attendance", sub: "Per-course breakdown" },
              { icon: "✦", title: "LMS", sub: "Modules & deadlines" },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "12px 14px",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: C.cream,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  {f.icon}
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{f.title}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Login card */}
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "32px",
            width: 340,
            flexShrink: 0,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 22, color: C.text, marginBottom: 4 }}>Sign in</div>
          <div style={{ fontSize: 13, color: C.textMuted, marginBottom: 24 }}>Use your school account to continue.</div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: C.textMuted, display: "block", marginBottom: 6 }}>Student email</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 14,
                color: C.text,
                background: C.white,
              }}
            >
              <span>✉</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "none", outline: "none", flex: 1, fontSize: 14, color: C.text, background: "transparent" }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.textMuted }}>Password</label>
              <a href="#" style={{ fontSize: 12, color: C.teal, textDecoration: "none", fontWeight: 600 }}>Forgot?</a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 14,
                color: C.text,
              }}
            >
              <span>🔒</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: "none", outline: "none", flex: 1, fontSize: 14, color: C.text, background: "transparent" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <input type="checkbox" id="keep" checked={keep} onChange={(e) => setKeep(e.target.checked)} />
            <label htmlFor="keep" style={{ fontSize: 13, color: C.textMuted }}>Keep me signed in on this device</label>
          </div>

          <button
            onClick={onLogin}
            style={{
              width: "100%",
              background: C.teal,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "13px",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              marginBottom: 14,
            }}
          >
            Sign in to portal →
          </button>

          <div style={{ textAlign: "center", fontSize: 12, color: C.textMuted, marginBottom: 14 }}>OR</div>
          <button
            style={{
              width: "100%",
              background: "none",
              border: "none",
              color: C.text,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            Continue as guest
          </button>
          <div style={{ textAlign: "center", fontSize: 13, color: C.textMuted }}>
            New here?{" "}
            <a href="#" style={{ color: C.teal, fontWeight: 700, textDecoration: "none" }}>Request an account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════════════════
export default function App() {
  const [view, setView] = useState("landing"); // landing | login | app
  const [activePage, setActivePage] = useState("dashboard");

  if (view === "landing") return <Landing onLogin={() => setView("login")} />;
  if (view === "login") return <Login onLogin={() => setView("app")} onBack={() => setView("landing")} />;

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        display: "flex",
        minHeight: "100vh",
        background: C.cream,
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        button { font-family: inherit; }
        input { font-family: inherit; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
      `}</style>

      <Sidebar active={activePage} setActive={setActivePage} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopBar />
        <div style={{ flex: 1, overflowY: "auto" }}>
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "enrollment" && <Enrollment />}
          {activePage === "grades" && <Grades />}
          {activePage === "attendance" && <Attendance />}
          {activePage === "learning" && <LearningHub />}
        </div>
      </div>
    </div>
  );
}
