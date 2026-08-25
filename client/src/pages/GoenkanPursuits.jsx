import React, { useState, useMemo } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion";
import GoenkanBanner from "../assets/bg2.jpg";
import { Helmet } from "react-helmet";
import { goenkanPursuitsData } from "../data/goenkanPursuitsData";
import { FaSearch, FaPrint, FaCalendarAlt, FaGraduationCap, FaTimes } from "react-icons/fa";

const monthsList = [
  "ALL MONTHS",
  "APRIL 2026",
  "MAY 2026",
  "JUNE 2026",
  "JULY 2026",
  "AUGUST 2026",
  "SEPTEMBER 2026",
  "OCTOBER 2026",
  "NOVEMBER 2026",
  "DECEMBER 2026",
  "JANUARY 2027",
  "FEBRUARY 2027",
  "MARCH 2027",
];

const gradeFilters = [
  { id: "all", label: "All Grades" },
  { id: "nur_ii", label: "Nursery – II" },
  { id: "iii_v", label: "Grade III – V" },
  { id: "vi_viii", label: "Grade VI – VIII" },
  { id: "ix_xii", label: "Grade IX – XII" },
];

function GoenkanPursuits() {
  const [selectedMonth, setSelectedMonth] = useState("ALL MONTHS");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchedule = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const result = {};

    Object.entries(goenkanPursuitsData).forEach(([month, events]) => {
      if (selectedMonth !== "ALL MONTHS" && selectedMonth !== month) {
        return;
      }

      const matchingEvents = events.filter((ev) => {
        const matchesGrade =
          selectedGrade === "all" ||
          (selectedGrade === "nur_ii" && ev.nur_ii) ||
          (selectedGrade === "iii_v" && ev.iii_v) ||
          (selectedGrade === "vi_viii" && ev.vi_viii) ||
          (selectedGrade === "ix_xii" && ev.ix_xii);

        if (!matchesGrade) return false;

        if (!query) return true;

        const combinedText = `${ev.day} ${ev.date} ${ev.nur_ii} ${ev.iii_v} ${ev.vi_viii} ${ev.ix_xii}`.toLowerCase();
        return combinedText.includes(query);
      });

      if (matchingEvents.length > 0) {
        result[month] = matchingEvents;
      }
    });

    return result;
  }, [selectedMonth, selectedGrade, searchQuery]);

  const totalEventCount = useMemo(() => {
    return Object.values(filteredSchedule).reduce((acc, events) => acc + events.length, 0);
  }, [filteredSchedule]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <Helmet>
        <title>Goenkan Pursuits 2026-27 - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Explore the month-wise activity calendar and Goenkan Pursuits schedule for the academic session 2026-27 at GD Goenka Public School Aligarh."
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative bgImage">
        <motion.img
          src={GoenkanBanner}
          alt="Goenkan Pursuits Banner"
          className="h-[35vh] md:h-[40vh] lg:h-[50vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <motion.div
          className="absolute bottom-6 left-4 md:left-12 text-white"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-[#2a3c7e] rounded-md text-white inline-block mb-2">
            Academic Session 2026–27
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            GOENKAN PURSUITS
          </h1>
          <p className="text-sm md:text-base text-gray-200 mt-1 max-w-xl">
            Month-wise co-curricular events, inter-house competitions, celebrations, and activity schedule.
          </p>
        </motion.div>
      </div>

      <NavigationPages />

      <section className="container max-w-7xl py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Controls & Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-bold text-[#2a3c7e] flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600 text-xl" />
                Goenkan Pursuits 2026–27 Calendar
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Showing <strong className="text-gray-800">{totalEventCount}</strong> scheduled dates & activities
              </p>
            </div>

            {/* Search and Print actions */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search activity, PTM, debate..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a3c7e] focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs p-1"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-[#2a3c7e] hover:text-white text-gray-700 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                title="Print Calendar"
              >
                <FaPrint />
                <span className="hidden sm:inline">Print Schedule</span>
              </button>
            </div>
          </div>

          {/* Grade Selector Tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <FaGraduationCap /> Grade:
            </span>
            {gradeFilters.map((gf) => (
              <button
                key={gf.id}
                onClick={() => setSelectedGrade(gf.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedGrade === gf.id
                    ? "bg-[#2a3c7e] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {gf.label}
              </button>
            ))}
          </div>

          {/* Month Selector Pills */}
          <div className="pt-4 overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex gap-2 min-w-max">
              {monthsList.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedMonth === m
                      ? "bg-blue-600 text-white font-semibold shadow-sm"
                      : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                  }`}
                >
                  {m === "ALL MONTHS" ? "🗓️ All Months" : m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Display */}
        {Object.keys(filteredSchedule).length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-blue-50 text-[#2a3c7e] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-semibold text-gray-800">No events found</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
              No pursuits or activities match your current search query "{searchQuery}" or selected grade filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedGrade("all");
                setSelectedMonth("ALL MONTHS");
              }}
              className="mt-4 px-4 py-2 bg-[#2a3c7e] text-white rounded-lg text-xs font-semibold hover:bg-blue-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(filteredSchedule).map(([month, events]) => (
              <div
                key={month}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
              >
                {/* Month Header Banner */}
                <div className="bg-gradient-to-r from-[#2a3c7e] to-[#1a2550] px-6 py-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <h3 className="text-lg md:text-xl font-bold tracking-wide">{month}</h3>
                  </div>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
                    {events.length} {events.length === 1 ? "Event / Date" : "Events / Dates"}
                  </span>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/80 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                        <th className="py-3.5 px-4 w-40">Date & Day</th>
                        <th className="py-3.5 px-4">Nursery – II</th>
                        <th className="py-3.5 px-4">Class III – V</th>
                        <th className="py-3.5 px-4">Class VI – VIII</th>
                        <th className="py-3.5 px-4">Class IX – XII</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                      {events.map((ev, i) => {
                        const isHolidayOrBreak =
                          (ev.nur_ii && ev.nur_ii.toLowerCase().includes("summer vacation")) ||
                          (ev.nur_ii && ev.nur_ii.toLowerCase().includes("good friday")) ||
                          (ev.nur_ii && ev.nur_ii.toLowerCase().includes("jayanti")) ||
                          (ev.day && ev.day.toLowerCase().includes("break"));

                        return (
                          <tr
                            key={i}
                            className={`transition-colors hover:bg-blue-50/50 ${
                              isHolidayOrBreak ? "bg-amber-50/40" : i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                            }`}
                          >
                            <td className="py-3.5 px-4 font-semibold text-[#2a3c7e] align-top whitespace-nowrap">
                              <div className="font-bold text-gray-900">{ev.date || "—"}</div>
                              {ev.day && (
                                <span className="inline-block mt-0.5 text-[11px] px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-medium">
                                  {ev.day}
                                </span>
                              )}
                            </td>

                            <td className="py-3.5 px-4 text-gray-800 align-top">
                              {ev.nur_ii ? (
                                <div className="whitespace-pre-line leading-relaxed">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle"></span>
                                  {ev.nur_ii}
                                </div>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>

                            <td className="py-3.5 px-4 text-gray-800 align-top">
                              {ev.iii_v ? (
                                <div className="whitespace-pre-line leading-relaxed">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 align-middle"></span>
                                  {ev.iii_v}
                                </div>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>

                            <td className="py-3.5 px-4 text-gray-800 align-top">
                              {ev.vi_viii ? (
                                <div className="whitespace-pre-line leading-relaxed">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mr-1.5 align-middle"></span>
                                  {ev.vi_viii}
                                </div>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>

                            <td className="py-3.5 px-4 text-gray-800 align-top">
                              {ev.ix_xii ? (
                                <div className="whitespace-pre-line leading-relaxed">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5 align-middle"></span>
                                  {ev.ix_xii}
                                </div>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards View */}
                <div className="block md:hidden divide-y divide-gray-100 p-3 space-y-3">
                  {events.map((ev, i) => (
                    <div key={i} className="p-3 bg-gray-50/70 rounded-xl space-y-2.5 border border-gray-100">
                      <div className="flex items-center justify-between pb-1 border-b border-gray-200">
                        <span className="font-bold text-sm text-[#2a3c7e]">{ev.date || "Date TBA"}</span>
                        {ev.day && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-semibold">
                            {ev.day}
                          </span>
                        )}
                      </div>

                      {ev.nur_ii && (
                        <div className="text-xs">
                          <span className="font-bold text-emerald-700 uppercase text-[10px] tracking-wide block mb-0.5">
                            Nursery – II
                          </span>
                          <p className="text-gray-800 whitespace-pre-line">{ev.nur_ii}</p>
                        </div>
                      )}

                      {ev.iii_v && (
                        <div className="text-xs">
                          <span className="font-bold text-blue-700 uppercase text-[10px] tracking-wide block mb-0.5">
                            Grade III – V
                          </span>
                          <p className="text-gray-800 whitespace-pre-line">{ev.iii_v}</p>
                        </div>
                      )}

                      {ev.vi_viii && (
                        <div className="text-xs">
                          <span className="font-bold text-indigo-700 uppercase text-[10px] tracking-wide block mb-0.5">
                            Grade VI – VIII
                          </span>
                          <p className="text-gray-800 whitespace-pre-line">{ev.vi_viii}</p>
                        </div>
                      )}

                      {ev.ix_xii && (
                        <div className="text-xs">
                          <span className="font-bold text-purple-700 uppercase text-[10px] tracking-wide block mb-0.5">
                            Grade IX – XII
                          </span>
                          <p className="text-gray-800 whitespace-pre-line">{ev.ix_xii}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default GoenkanPursuits;

