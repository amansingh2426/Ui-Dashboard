import React from "react";
import { motion } from "framer-motion";
// Charts (recharts)
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
// Icons (lucide-react)
import { Menu, Bell, Users, Heart, FileText } from "lucide-react";

// NOTE: This component uses Tailwind CSS for styling and assumes Tailwind is configured
// in your project. It also uses framer-motion and recharts. See README below for setup.

const stats = [
  { id: 1, title: "Active Patients", value: 128, icon: "Users", delta: "+4%" },
  { id: 2, title: "Appointments Today", value: 42, icon: "FileText", delta: "-2%" },
  { id: 3, title: "Avg. Heart Rate", value: "76 bpm", icon: "Heart", delta: "+1%" },
  { id: 4, title: "Alerts", value: 3, icon: "Bell", delta: "—" },
];

const areaData = [
  { day: "Mon", patients: 30 },
  { day: "Tue", patients: 45 },
  { day: "Wed", patients: 40 },
  { day: "Thu", patients: 55 },
  { day: "Fri", patients: 70 },
  { day: "Sat", patients: 65 },
  { day: "Sun", patients: 80 },
];

const lineData = [
  { hour: "00", bp: 120 },
  { hour: "04", bp: 118 },
  { hour: "08", bp: 124 },
  { hour: "12", bp: 122 },
  { hour: "16", bp: 126 },
  { hour: "20", bp: 119 },
];

const pieData = [
  { name: "Cardiology", value: 400 },
  { name: "General", value: 300 },
  { name: "Pediatrics", value: 200 },
];
const COLORS = ["#60A5FA", "#34D399", "#FBBF24"];

const patients = [
  { id: "P-001", name: "Aman singh", age: 21, ward: "A1", status: "Stable" },
  { id: "P-002", name: "Priyanshu guatam", age: 20, ward: "B2", status: "Observation" },
  { id: "P-003", name: "shrivardhan sharma", age: 23, ward: "ICU", status: "Critical" },
  { id: "P-004", name: "Amit Joshi", age: 52, ward: "C3", status: "Stable" },
];

export default function HealthcareDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md bg-white shadow-sm">
            <Menu size={18} />
          </button>
          <div >
            <h1 className="text-2xl font-semibold">Healthcare Dashboard</h1>
            <p className="text-sm text-slate-500">Overview & patient monitoring</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="p-2 rounded-full bg-white shadow-sm">
              <Bell size={18} />
            </button>
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow-sm">
            <div className="w-10 h-10 rounded-full bg-slate-200" />
            <div className="text-sm">
              <div className="font-medium">Dr. Aman Singh</div>
              <div className="text-xs text-slate-500">Admin</div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="sticky top-6 space-y-4">
            <nav className="bg-white p-4 rounded-2xl shadow-sm">
              <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 cursor-pointer">
                  <Users size={16} />
                  <span className="text-sm font-medium">Patients</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 cursor-pointer">
                  <FileText size={16} />
                  <span className="text-sm font-medium">Appointments</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 cursor-pointer">
                  <Heart size={16} />
                  <span className="text-sm font-medium">Vitals</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 cursor-pointer">
                  <Bell size={16} />
                  <span className="text-sm font-medium">Alerts</span>
                </li>
              </ul>
            </nav>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h3 className="text-sm text-slate-500 mb-3">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.id} className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500">{s.title}</div>
                    <div className="font-semibold text-lg">{s.value}</div>
                    <div className="text-xs text-green-500">{s.delta}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h3 className="text-sm text-slate-500 mb-3">Today's Schedule</h3>
              <ul className="space-y-2">
                <li className="text-sm">09:00 — Ward round</li>
                <li className="text-sm">11:00 — New patient consult</li>
                <li className="text-sm">14:00 — Follow-ups</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
            {/* Top cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.id} className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-slate-500">{s.title}</div>
                      <div className="text-2xl font-semibold">{s.value}</div>
                    </div>
                    <div className="p-2 rounded-md bg-slate-50">
                      {/* icon placeholder */}
                      <Users size={20} />
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 mt-3">Compared to last week: {s.delta}</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm col-span-2">
                <h3 className="text-sm text-slate-500 mb-3">Weekly Patient Admissions</h3>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.6} />
                          <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="patients" stroke="#60A5FA" fillOpacity={1} fill="url(#colorPatients)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <h3 className="text-sm text-slate-500 mb-3">Department Distribution</h3>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie dataKey="value" data={pieData} outerRadius={70} label>
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Vitals + Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm col-span-2">
                <h3 className="text-sm text-slate-500 mb-3">Average Blood Pressure (24h)</h3>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="bp" stroke="#34D399" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <h3 className="text-sm text-slate-500 mb-3">Critical Alerts</h3>
                <ul className="space-y-2">
                  <li className="text-sm">P-003 — High heart rate (120 bpm)</li>
                  <li className="text-sm">P-010 — Low oxygen saturation (88%)</li>
                  <li className="text-sm">P-022 — Medication missed</li>
                </ul>
              </div>
            </div>

            {/* Patients table */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h3 className="text-sm text-slate-500 mb-3">Patient List</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm divide-y divide-slate-100">
                  <thead>
                    <tr>
                      <th className="text-left p-3">ID</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Age</th>
                      <th className="text-left p-3">Ward</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {patients.map((p) => (
                      <tr key={p.id}>
                        <td className="p-3">{p.id}</td>
                        <td className="p-3">{p.name}</td>
                        <td className="p-3">{p.age}</td>
                        <td className="p-3">{p.ward}</td>
                        <td className={`p-3 font-medium ${p.status === "Critical" ? "text-red-600" : p.status === "Stable" ? "text-green-600" : "text-amber-600"}`}>
                          {p.status}
                        </td>
                        <td className="p-3">
                          <button className="text-xs px-3 py-1 rounded-md bg-slate-50">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer / quick actions */}
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 rounded-2xl bg-white shadow-sm">Export</button>
              <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white">New Patient</button>
            </div>
          </motion.section>
        </main>
      </div>

      {/* README: quick setup instructions as comment block */}
      {/*
        Quick setup:
        1) Install dependencies:
           npm install react framer-motion recharts lucide-react tailwindcss
        2) Configure Tailwind in your project (https://tailwindcss.com/docs/guides/create-react-app or next.js guide)
        3) Drop this component into your pages / src/components and import it.
        4) Customize data hooks to fetch from your API (use SWR or react-query).

        Suggestions:
        - Replace mock arrays with API hooks and loading states.
        - Add role-based access (doctors vs nurses vs admin).
        - Add real-time vitals via websockets for live monitoring.
        - Add pagination and search to the patient table.
      */}
    </div>
  );
}

