import React, { useState } from 'react';

const svgIcon = (d) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const docIcon = "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5M3 15h3m3 6l3-3m-3 0l-3 3M15 21l-3-3m3 0l3 3m-4.5-18H15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 3 13.5V4.5A2.25 2.25 0 0 1 5.25 2.25Z";
const calIcon = "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm-3-3h.008v.008H9V12Zm3-3h.008v.008H12V9Zm3 0h.008v.008H15V9Zm-3 6h.008v.008H12V15Zm-3 3h.008v.008H9V18Zm-3 3h.008v.008H6V21Z";

const volumes = [
  { label: 'NEWSLETTER Volume - I', pdf: 'News-Letter-Design-quarter-1st.pdf' },
  { label: 'NEWSLETTER Volume - II', pdf: 'News-Letter-Design-quarter-2nd.pdf' },
  { label: 'NEWSLETTER Volume - III', pdf: 'News-Letter-Design-quarter-3rd.pdf' },
  { label: 'NEWSLETTER Volume - IV', pdf: 'News-Letter-Design-quarter-4rd.pdf' },
];

const Newsletters = () => {
  const [showVolumes, setShowVolumes] = useState(false);

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-900">Important Documents</h2>
      <ul className="space-y-4">

        <li className="list-none">
          <a href="/pdfs/GDE-schoole.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(docIcon)}
              <span>School & Faculty Profile</span>
            </div>
          </a>
        </li>

        <li className="list-none">
          <a href="/pdfs/Term2SyllabusAllClass.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(docIcon)}
              <span>All Class Term 2 Syllabus</span>
            </div>
          </a>
        </li>

        <li className="list-none">
          <a href="/pdfs/Calendar2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(calIcon)}
              <span>Academic Calendar 2026-27</span>
            </div>
          </a>
        </li>

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

        <li className="list-none">
          <a href="/pdfs/Newsletter-2026-2027.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-[#2a3c7e] text-white hover:bg-blue-800 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              {svgIcon(docIcon)}
              <span>NEWSLETTER 2026-2027</span>
            </div>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Newsletters;
