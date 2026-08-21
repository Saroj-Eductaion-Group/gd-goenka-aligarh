// // src/pages/WinterHolidaysHomework.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { 
//   FaDownload, 
//   FaFilePdf, 
//   FaHome, 
//   FaInfoCircle, 
//   FaPhone, 
//   FaCalendarAlt,
//   FaBook,
//   FaUserGraduate,
//   FaSchool,
//   FaStar,
//   FaClipboardCheck,
//   FaTasks
// } from "react-icons/fa";
// import { Layout } from "../components/Layout";

// function WinterHolidaysHomework() {
//   const classwiseHomework = [
//     { 
//       class: "Class 2", 
//       pdf: "/pdfs/homework/class2-winter-holidays.pdf",
//       color: "from-blue-500 to-blue-600",
//       icon: "📚",
//       pages: "12-15 Pages",
//       subjects: ["English", "Hindi", "Maths", "EVS"]
//     },
//     { 
//       class: "Class 3", 
//       pdf: "/pdfs/homework/class3-winter-holidays.pdf",
//       color: "from-emerald-500 to-green-600",
//       icon: "✏️",
//       pages: "15-18 Pages",
//       subjects: ["English", "Hindi", "Maths", "EVS", "GK"]
//     },
//     { 
//       class: "Class 4", 
//       pdf: "/pdfs/homework/class4-winter-holidays.pdf",
//       color: "from-purple-500 to-violet-600",
//       icon: "📝",
//       pages: "18-20 Pages",
//       subjects: ["English", "Hindi", "Maths", "Science", "SST"]
//     },
//     { 
//       class: "Class 5", 
//       pdf: "/pdfs/homework/class5-winter-holidays.pdf",
//       color: "from-amber-500 to-yellow-600",
//       icon: "🔬",
//       pages: "20-22 Pages",
//       subjects: ["English", "Hindi", "Maths", "Science", "SST"]
//     },
//     { 
//       class: "Class 6", 
//       pdf: "/pdfs/homework/class6-winter-holidays.pdf",
//       color: "from-rose-500 to-pink-600",
//       icon: "📖",
//       pages: "22-25 Pages",
//       subjects: ["English", "Hindi", "Maths", "Science", "SST"]
//     },
//     { 
//       class: "Class 7", 
//       pdf: "/pdfs/homework/class7-winter-holidays.pdf",
//       color: "from-indigo-500 to-blue-700",
//       icon: "🧮",
//       pages: "25-28 Pages",
//       subjects: ["English", "Hindi", "Maths", "Science", "SST"]
//     },
//     { 
//       class: "Class 8", 
//       pdf: "/pdfs/homework/class8-winter-holidays.pdf",
//       color: "from-fuchsia-500 to-purple-700",
//       icon: "🔭",
//       pages: "28-30 Pages",
//       subjects: ["English", "Hindi", "Maths", "Science", "SST"]
//     },
//     { 
//       class: "Class 9", 
//       pdf: "/pdfs/homework/class9-winter-holidays.pdf",
//       color: "from-teal-500 to-cyan-600",
//       icon: "🎓",
//       pages: "30-35 Pages",
//       subjects: ["English", "Hindi", "Maths", "Science", "SST"]
//     },
//   ];

//   const vacationStart = "December 27, 2025";
//   const vacationEnd = "January 10, 2026";
//   const submissionDate = "January 11, 2026";
//   const schoolReopens = "January 12, 2026";

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
//         {/* Decorative Background Elements */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto relative">
//           {/* Animated Header Section */}
//           <div className="text-center mb-16">
//             <div className="relative inline-block mb-8">
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
//               <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl">
//                 <FaBook className="text-5xl text-white" />
//               </div>
//               <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
//                 <FaStar className="text-white text-sm" />
//               </div>
//             </div>
            
//             <div className="mb-8">
//               <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
//                 Winter Holiday Homework
//               </h1>
//               <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full border border-blue-200 shadow-sm">
//                 <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
//                   Session 2025-26
//                 </h2>
//               </div>
//             </div>

//             {/* Main Info Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
//               <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
//                     <FaCalendarAlt className="text-white text-xl" />
//                   </div>
//                   <div className="text-left">
//                     <p className="text-sm text-gray-500">Vacation Period</p>
//                     <p className="font-bold text-gray-800">{vacationStart} - {vacationEnd}</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-xl border border-green-100 transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
//                     <FaClipboardCheck className="text-white text-xl" />
//                   </div>
//                   <div className="text-left">
//                     <p className="text-sm text-gray-500">Submission Date</p>
//                     <p className="font-bold text-gray-800">{submissionDate}</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-xl border border-purple-100 transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
//                     <FaSchool className="text-white text-xl" />
//                   </div>
//                   <div className="text-left">
//                     <p className="text-sm text-gray-500">School Reopens</p>
//                     <p className="font-bold text-gray-800">{schoolReopens}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Motto Banner */}
//             <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 shadow-2xl max-w-3xl mx-auto">
//               <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
//               <div className="relative px-8 py-6 text-center">
//                 <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
//                   "GDGPS... because YOU deserve the BEST!!!"
//                 </p>
//                 <p className="text-blue-100 mt-2">G.D. Goenka Public School, Aligarh</p>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Left Sidebar - Instructions */}
//             <div className="lg:col-span-1 space-y-6">
//               {/* Quick Stats */}
//               <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                   <FaInfoCircle className="text-blue-600 mr-3" />
//                   Quick Stats
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                     <span className="text-gray-600">Total Classes</span>
//                     <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">8</span>
//                   </div>
//                   <div className="flex justify-between items-center pb-3 border-b border-gray-100">
//                     <span className="text-gray-600">Pages per Class</span>
//                     <span className="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">12-35</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Vacation Days</span>
//                     <span className="font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">15</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Card */}
//               <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border border-blue-200">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                   <FaPhone className="text-blue-600 mr-3" />
//                   Contact Support
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
//                     <p className="text-sm text-gray-600 mb-2">School Office</p>
//                     <div className="space-y-2">
//                       <p className="text-lg font-bold text-blue-800 flex items-center">
//                         <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">📞</span>
//                         8126747489
//                       </p>
//                       <p className="text-lg font-bold text-blue-800 flex items-center">
//                         <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">📞</span>
//                         8265826237
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-500 text-center italic">
//                     Available during office hours
//                   </p>
//                 </div>
//               </div>

//               {/* Tips Card */}
//               <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-xl border border-amber-200">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                   <FaTasks className="text-amber-600 mr-3" />
//                   Pro Tips
//                 </h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 text-amber-700 rounded-full p-1 mr-3">💡</span>
//                     <span className="text-gray-700">Start early to avoid last-minute rush</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 text-amber-700 rounded-full p-1 mr-3">📅</span>
//                     <span className="text-gray-700">Make a daily schedule & stick to it</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 text-amber-700 rounded-full p-1 mr-3">✅</span>
//                     <span className="text-gray-700">Check off completed tasks daily</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right Main Content */}
//             <div className="lg:col-span-3">
//               {/* Class Cards Grid */}
//               <div className="mb-12">
//                 <div className="flex items-center justify-between mb-8">
//                   <div>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                       Class-wise Assignments
//                     </h2>
//                     <p className="text-gray-600">
//                       Download homework for Classes 2 to 9
//                     </p>
//                   </div>
//                   <div className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg">
//                     Session 2025-26
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {classwiseHomework.map((item, index) => (
//                     <div
//                       key={index}
//                       className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2"
//                     >
//                       {/* Card Header with Gradient */}
//                       <div className={`relative h-2 bg-gradient-to-r ${item.color}`}>
//                         <div className="absolute -bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
//                           <span className="text-2xl">{item.icon}</span>
//                         </div>
//                       </div>
                      
//                       {/* Card Body */}
//                       <div className="p-6 pt-10">
//                         <div className="flex justify-between items-start mb-4">
//                           <div>
//                             <h3 className="text-2xl font-bold text-gray-900">{item.class}</h3>
//                             <p className="text-gray-500 text-sm">Winter Vacation 2025-26</p>
//                           </div>
//                           <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full">
//                             <span className="font-bold text-gray-700">{item.pages}</span>
//                           </div>
//                         </div>

//                         {/* Subjects Tags */}
//                         <div className="mb-6">
//                           <p className="text-sm text-gray-500 mb-2">Subjects Included:</p>
//                           <div className="flex flex-wrap gap-2">
//                             {item.subjects.map((subject, idx) => (
//                               <span 
//                                 key={idx}
//                                 className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
//                               >
//                                 {subject}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Download Button */}
//                         <a
//                           href={`${item.pdf}#toolbar=0`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block w-full bg-gradient-to-r from-gray-900 to-black text-white text-center py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden"
//                         >
//                           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                           <div className="relative flex items-center justify-center">
//                             <FaDownload className="mr-3 text-lg group-hover:animate-bounce" />
//                             Download PDF
//                             <span className="ml-3 text-xs bg-white/20 px-3 py-1 rounded-full">
//                               {item.class}
//                             </span>
//                           </div>
//                         </a>

//                         {/* File Info */}
//                         <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
//                           <div className="flex items-center">
//                             <FaFilePdf className="mr-2 text-red-500" />
//                             <span>PDF Format</span>
//                           </div>
//                           <div className="flex items-center">
//                             <span className="mr-2">📏</span>
//                             <span>A4 Sheets</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Important Notice Section */}
//               <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 mb-8 shadow-xl">
//                 <div className="flex items-start mb-6">
//                   <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-xl mr-4">
//                     <span className="text-2xl">⚠️</span>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Important Notice</h3>
//                     <p className="text-gray-700">
//                       Clear all dues up to 3rd quarter (Oct-Dec) by <span className="font-bold text-red-600">December 31, 2025</span> to avoid late fees.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-white rounded-xl p-5 shadow-sm">
//                     <h4 className="font-bold text-gray-800 mb-3 text-lg">📦 Submission Format</h4>
//                     <ul className="space-y-2 text-gray-700">
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         Decorate newspaper folder
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         Include daily diary
//                       </li>
//                       <li className="flex items-center">
//                         <span className="text-green-500 mr-2">✓</span>
//                         Parent's signature required
//                       </li>
//                     </ul>
//                   </div>
                  
//                   <div className="bg-white rounded-xl p-5 shadow-sm">
//                     <h4 className="font-bold text-gray-800 mb-3 text-lg">📅 Key Dates</h4>
//                     <ul className="space-y-2 text-gray-700">
//                       <li className="flex justify-between">
//                         <span>Vacation Ends:</span>
//                         <span className="font-bold">{vacationEnd}</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span>Submission:</span>
//                         <span className="font-bold">{submissionDate}</span>
//                       </li>
//                       <li className="flex justify-between">
//                         <span>School Reopens:</span>
//                         <span className="font-bold">{schoolReopens}</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Footer CTA */}
//               <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//                   <div className="text-white">
//                     <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
//                     <p className="text-gray-300">
//                       Contact your class teacher or school office for assistance
//                     </p>
//                   </div>
                  
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <Link
//                       to="/"
//                       className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                     >
//                       <FaHome className="mr-3" />
//                       Back to Home
//                     </Link>
                    
//                     {/* <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//                       <FaFilePdf className="mr-3" />
//                       Download All
//                     </button> */}
//                   </div>
//                 </div>
                
//                 <div className="mt-8 pt-6 border-t border-gray-700 text-center">
//                   <p className="text-gray-400 italic">
//                     "This winter break, go make a change, learn, explore, grow, and rearrange."
//                   </p>
//                   <p className="text-gray-500 text-sm mt-2">
//                     G.D. Goenka Public School, Aligarh © 2025
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default WinterHolidaysHomework;