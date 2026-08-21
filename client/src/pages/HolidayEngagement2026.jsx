import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaFilePdf, FaHome, FaBookOpen, FaSun } from "react-icons/fa";
import { Layout } from "../components/Layout";

const classes = [
  { label: "Nursery", pdf: "/pdfs/homework/class-nursery-holiday-engagement-2026.pdf", color: "from-pink-400 to-rose-500", bg: "bg-pink-50", border: "border-pink-200", emoji: "🌸" },
  { label: "KG", pdf: "/pdfs/homework/class-kg-holiday-engagement-2026.pdf", color: "from-purple-400 to-violet-500", bg: "bg-purple-50", border: "border-purple-200", emoji: "🦋" },
  { label: "Class 1", pdf: "/pdfs/homework/class-1-holiday-engagement-2026.pdf", color: "from-blue-400 to-blue-600", bg: "bg-blue-50", border: "border-blue-200", emoji: "✏️" },
  { label: "Class 2", pdf: "/pdfs/homework/class-2-holiday-engagement-2026.pdf", color: "from-cyan-400 to-teal-500", bg: "bg-cyan-50", border: "border-cyan-200", emoji: "📚" },
  { label: "Class 3", pdf: "/pdfs/homework/class-3-holiday-engagement-2026.pdf", color: "from-emerald-400 to-green-600", bg: "bg-emerald-50", border: "border-emerald-200", emoji: "🌿" },
  { label: "Class 4", pdf: "/pdfs/homework/class-4-holiday-engagement-2026.pdf", color: "from-amber-400 to-yellow-500", bg: "bg-amber-50", border: "border-amber-200", emoji: "⭐" },
  { label: "Class 5", pdf: "/pdfs/homework/class-5-holiday-engagement-2026.pdf", color: "from-orange-400 to-red-500", bg: "bg-orange-50", border: "border-orange-200", emoji: "🔬" },
  { label: "Class 6", pdf: "/pdfs/homework/class-6-holiday-engagement-2026.pdf", color: "from-indigo-400 to-blue-700", bg: "bg-indigo-50", border: "border-indigo-200", emoji: "🧮" },
  { label: "Class 7", pdf: "/pdfs/homework/class-7-holiday-engagement-2026.pdf", color: "from-fuchsia-400 to-purple-700", bg: "bg-fuchsia-50", border: "border-fuchsia-200", emoji: "🎨" },
  { label: "Class 8", pdf: "/pdfs/homework/class-8-holiday-engagement-2026.pdf", color: "from-sky-400 to-blue-600", bg: "bg-sky-50", border: "border-sky-200", emoji: "🏆" },
  { label: "Class 9", pdf: "/pdfs/homework/class-9-holiday-engagement-2026.pdf", color: "from-teal-400 to-cyan-600", bg: "bg-teal-50", border: "border-teal-200", emoji: "🧪" },
  { label: "Class 10", pdf: "/pdfs/homework/class-10-holiday-engagement-2026.pdf", color: "from-rose-500 to-pink-700", bg: "bg-rose-50", border: "border-rose-200", emoji: "🎓" },
  { label: "Summer Vacation Notice", pdf: "/pdfs/homework/summer-vacation-notice-2026-27.pdf", color: "from-yellow-400 to-orange-500", bg: "bg-yellow-50", border: "border-yellow-200", emoji: "📢" },
];

function HolidayEngagement2026() {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#003963] via-[#005a8e] to-[#0077b6] py-16 px-4 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400 opacity-10 rounded-full" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-6 shadow-lg">
            <FaSun className="text-yellow-300 text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Holiday Engagement
          </h1>
          <div className="inline-block bg-yellow-400 text-[#003963] font-bold text-xl md:text-2xl px-8 py-2 rounded-full mb-4 shadow-md">
            Summer 2026
          </div>
          <p className="text-blue-100 text-lg md:text-xl mt-2">
            G.D. Goenka Public School, Aligarh
          </p>
          <p className="text-blue-200 mt-2 text-sm">
            Download your class holiday engagement PDF below
          </p>
        </div>
      </div>

      {/* Info Strip */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-yellow-800 font-medium">
          <span className="flex items-center gap-2">📋 13 Documents</span>
          <span className="flex items-center gap-2">📄 PDF Format</span>
          <span className="flex items-center gap-2">🏫 Nursery to Class 10</span>
          <span className="flex items-center gap-2">📅 Session 2025–26</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              <FaBookOpen className="text-[#003963]" />
              Class-wise Downloads
            </h2>
            <p className="text-gray-500">Click on any card to download the PDF for your class</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {classes.map((item, index) => (
              <a
                key={index}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${item.bg} ${item.border} border-2 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform block`}
              >
                {/* Top bar */}
                <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${item.color} mb-4`} />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <FaFilePdf className="text-red-400 text-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">{item.label}</h3>
                <p className="text-xs text-gray-500 mb-4">Holiday Engagement 2026</p>

                <div className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-semibold bg-gradient-to-r ${item.color} group-hover:opacity-90 transition-opacity shadow-sm`}>
                  <FaDownload className="group-hover:animate-bounce" />
                  Download PDF
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-blue-50 border-t border-blue-100 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#003963] mb-3 flex items-center gap-2">
              📌 Important Note
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Complete all activities neatly and submit on time.</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Parent's signature is mandatory on the completed work.</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> For any queries, contact the school office.</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> School Contact: 8126747489 / 8265826237</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#003963] py-8 px-4 text-center">
        <p className="text-blue-200 italic mb-4 text-lg">
          "GDGPS... because YOU deserve the BEST!!!"
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003963] rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}

export default HolidayEngagement2026;
