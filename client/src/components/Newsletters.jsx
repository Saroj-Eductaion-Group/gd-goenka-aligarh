import React, { useState } from 'react';

const svgIcon = (d) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const docIcon = "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5M3 15h3m3 6l3-3m-3 0l-3 3M15 21l-3-3m3 0l3 3m-4.5-18H15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 3 13.5V4.5A2.25 2.25 0 0 1 5.25 2.25Z";
const calIcon = "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm-3-3h.008v.008H9V12Zm3-3h.008v.008H12V9Zm3 0h.008v.008H15V9Zm-3 6h.008v.008H12V15Zm-3 3h.008v.008H9V18Zm-3 3h.008v.008H6V21Z";
const examIcon = "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.272.75 2.378 1.83 2.766";

const volumes = [
  { label: 'NEWSLETTER Volume - I', pdf: 'News-Letter-Design-quarter-1st.pdf' },
  { label: 'NEWSLETTER Volume - II', pdf: 'News-Letter-Design-quarter-2nd.pdf' },
  { label: 'NEWSLETTER Volume - III', pdf: 'News-Letter-Design-quarter-3rd.pdf' },
  { label: 'NEWSLETTER Volume - IV', pdf: 'News-Letter-Design-quarter-4rd.pdf' },
];

const Newsletters = () => {
  const [showVolumes, setShowVolumes] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState('term1');
  const [openPT, setOpenPT] = useState({ pt1: true, pt2: false });

  const togglePT = (key) => {
    setOpenPT((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-900">Important Documents</h2>
      <ul className="space-y-4">

        {/* 1. Digital Prospectus */}
        <li className="list-none">
          <a href="/pdfs/GDE-schoole.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(docIcon)}
              <span>Digital Prospectus</span>
            </div>
          </a>
        </li>

        {/* 2. Examination 2026-2027 */}
        <li className="list-none">
          <div
            onClick={() => setShowExam(!showExam)}
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {svgIcon(examIcon)}
                <span className="font-medium">Examination 2026-2027</span>
              </div>
              <span className="text-xs">{showExam ? '▲' : '▼'}</span>
            </div>
          </div>

          {showExam && (
            <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg space-y-3">
              {/* Term 1st & Term-2 Switcher Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTerm('term1')}
                  className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                    selectedTerm === 'term1'
                      ? 'bg-[#2a3c7e] text-white shadow-md'
                      : 'bg-white text-[#2a3c7e] border border-[#2a3c7e] hover:bg-blue-100'
                  }`}
                >
                  Term 1st
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTerm('term2')}
                  className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                    selectedTerm === 'term2'
                      ? 'bg-[#2a3c7e] text-white shadow-md'
                      : 'bg-white text-[#2a3c7e] border border-[#2a3c7e] hover:bg-blue-100'
                  }`}
                >
                  Term-2
                </button>
              </div>

              {/* Term 1st Content */}
              {selectedTerm === 'term1' && (
                <div className="space-y-2 pt-1">
                  {/* Periodic Test 1st */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                    <div
                      onClick={() => togglePT('pt1')}
                      className="p-2.5 bg-blue-100/70 hover:bg-blue-100 cursor-pointer flex justify-between items-center text-xs sm:text-sm font-semibold text-[#2a3c7e]"
                    >
                      <span>Periodic Test 1st</span>
                      <span className="text-[10px]">{openPT.pt1 ? '▲' : '▼'}</span>
                    </div>
                    {openPT.pt1 && (
                      <div className="p-2 space-y-1.5 bg-white">
                        <a
                          href="/pdfs/PT-1-Syllabus-All-Classes-2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded bg-blue-50 hover:bg-[#2a3c7e] hover:text-white text-xs text-gray-800 transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            {svgIcon(docIcon)}
                            <span>PT-1 Syllabus</span>
                          </span>
                          <span className="text-[10px] uppercase font-bold text-blue-600">PDF ↗</span>
                        </a>
                        <a
                          href="/pdfs/Date-Sheet-PT-1-2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded bg-blue-50 hover:bg-[#2a3c7e] hover:text-white text-xs text-gray-800 transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            {svgIcon(calIcon)}
                            <span>PT-1 Date Sheet</span>
                          </span>
                          <span className="text-[10px] uppercase font-bold text-blue-600">PDF ↗</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Periodic Test 2nd */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                    <div
                      onClick={() => togglePT('pt2')}
                      className="p-2.5 bg-blue-100/70 hover:bg-blue-100 cursor-pointer flex justify-between items-center text-xs sm:text-sm font-semibold text-[#2a3c7e]"
                    >
                      <span>Periodic Test 2nd</span>
                      <span className="text-[10px]">{openPT.pt2 ? '▲' : '▼'}</span>
                    </div>
                    {openPT.pt2 && (
                      <div className="p-2 space-y-1.5 bg-white">
                        <a
                          href="/pdfs/PT-2-Syllabus-All-Classes-2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded bg-blue-50 hover:bg-[#2a3c7e] hover:text-white text-xs text-gray-800 transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            {svgIcon(docIcon)}
                            <span>PT-2 Syllabus</span>
                          </span>
                          <span className="text-[10px] uppercase font-bold text-blue-600">PDF ↗</span>
                        </a>
                        <a
                          href="/pdfs/Date-Sheet-PT-2-2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded bg-blue-50 hover:bg-[#2a3c7e] hover:text-white text-xs text-gray-800 transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            {svgIcon(calIcon)}
                            <span>PT-2 Date Sheet</span>
                          </span>
                          <span className="text-[10px] uppercase font-bold text-blue-600">PDF ↗</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Half Yearly Exam */}
                  <div className="p-2.5 bg-gray-100 border border-gray-200 rounded-md flex justify-between items-center text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Half Yearly Exam</span>
                    <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-semibold">Coming Soon</span>
                  </div>
                </div>
              )}

              {/* Term-2 Content */}
              {selectedTerm === 'term2' && (
                <div className="space-y-2 pt-1">
                  <div className="p-2.5 bg-gray-100 border border-gray-200 rounded-md flex justify-between items-center text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Periodic Test 3rd</span>
                    <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-semibold">Coming Soon</span>
                  </div>
                  <div className="p-2.5 bg-gray-100 border border-gray-200 rounded-md flex justify-between items-center text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Periodic Test 4th</span>
                    <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-semibold">Coming Soon</span>
                  </div>
                  <div className="p-2.5 bg-gray-100 border border-gray-200 rounded-md flex justify-between items-center text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Annual Exam</span>
                    <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-semibold">Coming Soon</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </li>

        {/* 3. Academic Calendar */}
        <li className="list-none">
          <a href="/pdfs/Calendar2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(calIcon)}
              <span>Academic Calendar 2026-27</span>
            </div>
          </a>
        </li>

        {/* 4. Newsletter 2025-2026 */}
        <li className="list-none">
          <div onClick={() => setShowVolumes(!showVolumes)}
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {svgIcon(docIcon)}
                <span>NEWSLETTER 2025-2026</span>
              </div>
              <span>{showVolumes ? '▲' : '▼'}</span>
            </div>
          </div>
          {showVolumes && (
            <ul className="mt-2 space-y-2 pl-2">
              {volumes.map((item) => (
                <li key={item.label} className="list-none">
                  <a href={`/pdfs/${item.pdf}#toolbar=0&navpanes=0&scrollbar=0`} target="_blank" rel="noopener noreferrer"
                    className="block p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-900 transition-colors duration-200">
                    <div className="flex items-center space-x-2">
                      {svgIcon(docIcon)}
                      <span>{item.label}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* 5. Newsletter 2026-2027 */}
        <li className="list-none">
          <a href="/pdfs/Newsletter-2026-2027.pdf?v=2026-27#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(docIcon)}
              <span>NEWSLETTER 2026-2027</span>
            </div>
          </a>
        </li>

        {/* 6. School Year Magazine */}
        <li className="list-none">
          <a href="/pdfs/Year-Magazine-2025-26.pdf?v=1#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(docIcon)}
              <span>SCHOOL YEAR MAGAZINE</span>
            </div>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Newsletters;
