"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Check, Clock, Flame, Trophy } from "lucide-react";

export type PhoneScreenName = "dashboard" | "calendar" | "tasks";

/**
 * The raw phone screen contents (no frame). Rendered as an absolutely
 * positioned layer so multiple screens can be stacked and cross-faded.
 */
export function PhoneScreen({ screen = "dashboard" }: { screen?: PhoneScreenName }) {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden flex flex-col pt-12 px-5">
      {screen === "dashboard" && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-black text-slate-900 leading-tight">
                Hello, <br />Scholar
              </h4>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex flex-col items-center justify-center">
                <Flame size={14} className="text-orange-500 fill-orange-500" />
                <span className="text-[10px] font-black text-orange-600">12</span>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex flex-col items-center justify-center">
                <Trophy size={14} className="text-blue-600 fill-blue-600/20" />
                <span className="text-[10px] font-black text-blue-700">45</span>
              </div>
            </div>
          </div>

          {/* Live Focus Card */}
          <div className="bg-slate-900 rounded-3xl p-5 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full" />
            <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">Studying Now</p>
            <h3 className="text-lg font-bold mb-3">Networking</h3>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "65%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-blue-500"
              />
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Today&apos;s Focus</p>
            {[
              { t: "Networking", s: "20:00", done: true },
              { t: "Javascript", s: "20:30", done: true },
              { t: "Embedded", s: "20:00", done: false },
            ].map((task, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border flex items-center gap-4 ${
                  task.done ? "bg-slate-50 border-slate-100 opacity-60" : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    task.done ? "bg-blue-600 border-blue-600 text-white" : "border-slate-200"
                  }`}
                >
                  {task.done && <Check size={10} strokeWidth={4} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-xs text-slate-800 truncate">{task.t}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">{task.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === "calendar" && (
        <div className="space-y-6">
          <h4 className="text-xl font-black text-slate-900">Workload</h4>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center text-[10px] font-black ${
                  i === 14
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : [3, 8, 17, 22, 27].includes(i)
                    ? "text-orange-600 bg-orange-50"
                    : "text-slate-400 bg-slate-50"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="bg-orange-50 p-5 rounded-3xl border border-orange-100 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-600/60 uppercase">Next Deadline</p>
                <p className="text-sm font-black text-slate-900">DBMS Exam</p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-black text-orange-600 leading-none">04</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Days Remaining</span>
            </div>
          </div>
        </div>
      )}

      {screen === "tasks" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-black text-slate-900">Templates</h4>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">+</div>
          </div>

          <div className="space-y-4">
            {[
              { s: "Networking", d: "Mon, Wed", t: "HOMEWORK", c: "blue" },
              { s: "Physics Rev", d: "Fri, Sat", t: "REVISION", c: "orange" },
              { s: "Javascript", d: "Tue, Thu", t: "HOMEWORK", c: "blue" },
            ].map((item, i) => (
              <div key={i} className="glass-container p-5 rounded-3xl border-slate-100 space-y-3">
                <div className="flex justify-between items-start">
                  <span
                    className={`text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest ${
                      item.c === "blue" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {item.t}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                  </div>
                </div>
                <h5 className="font-bold text-slate-800">{item.s}</h5>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <CalendarIcon size={10} />
                  {item.d}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Auto-Sync Enabled</p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * The phone chrome (bezel, notch, reflection) wrapping a single screen.
 * Plays a one-time entrance animation when it scrolls into view.
 */
export default function PhoneMockup({ screen = "dashboard" }: { screen?: PhoneScreenName }) {
  return (
    <motion.div
      initial={{ rotateY: -20, rotateX: 10, y: 50, opacity: 0 }}
      whileInView={{ rotateY: 0, rotateX: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
      className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3.5rem] border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-20"></div>
      <PhoneScreen screen={screen} />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none z-10 opacity-50"></div>
    </motion.div>
  );
}
