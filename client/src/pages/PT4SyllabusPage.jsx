// src/pages/PT4SyllabusPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FaDownload, 
  FaFilePdf, 
  FaHome, 
  FaInfoCircle, 
  FaPhone, 
  FaCalendarAlt,
  FaBook,
  FaSchool,
  FaStar,
  FaClipboardCheck,
  FaClock,
  FaCalendarDay,
  FaChartLine,
  FaBookOpen,
  FaCalculator,
  FaLaptop,
  FaLanguage,
  FaGlobeAsia,
  FaFlask,
  FaUserFriends
} from "react-icons/fa";
import { Layout } from "../components/Layout";

function PT4SyllabusPage() {
  const classwiseSyllabus = [
    { 
      class: "Nursery", 
      pdf: "/pdfs/pt4-syllabus/nursery-pt4-syllabus.pdf",
      color: "from-pink-500 to-rose-600",
      icon: "🧸",
      subjects: [
        { name: "English", topics: ["CAPITAL ALPHABETS (A TO Z)", "SMALL ALPHABETS (a to z)", "Rhymes: Hot cross buns, Chubby cheeks"] },
        { name: "Hindi", topics: ["अ से अः (Oral)", "Rhymes: सवेरा, आदर्श बच्चे", "गिनती १ से १०"] },
        { name: "Maths", topics: ["Oral Counting (1 to 30)", "Names of Shapes", "Count and tell (1 to 20)", "Oral Missing Numbers 1 to 20"] },
        { name: "EVS", topics: ["Names of Games", "Names of Birds", "Names of Clothes", "Names of Colours"] }
      ],
      examPattern: "Oral assessment only - No written test"
    },
    { 
      class: "LKG", 
      pdf: "/pdfs/pt4-syllabus/lkg-pt4-syllabus.pdf",
      color: "from-purple-500 to-violet-600",
      icon: "🎨",
      subjects: [
        { name: "English", topics: ["Rhymes", "Three letter words (zip, zoo, yet, wet)", "Difference between he and she", "Dictation words", "Phonics sound"] },
        { name: "Hindi", topics: ["Rhymes", "Three letter words (कमल, नयन, हवन)", "Dictation words", "Matching letters with pictures"] },
        { name: "Maths", topics: ["Counting 1 to 100", "Number name One to Ten", "After and before numbers", "Shape recognition", "Heavy and light"] },
        { name: "EVS", topics: ["Domestic and wild animals", "Land and water animals", "Family members", "Festivals", "Community helpers", "Transport", "Winter season"] }
      ],
      examPattern: "Oral and activity based assessment"
    },
    { 
      class: "UKG", 
      pdf: "/pdfs/pt4-syllabus/ukg-pt4-syllabus.pdf",
      color: "from-blue-500 to-indigo-600",
      icon: "📝",
      subjects: [
        { name: "English", topics: ["Vowel teams words", "Water theme", "Opposite words", "Action words"] },
        { name: "Hindi", topics: ["छोटी ओ की मात्रा", "पाठ: रोली की होली", "बड़ी औ की मात्रा", "पाठ: बौना रौनक"] },
        { name: "Maths", topics: ["Table 2 to 5", "Numbers name 21 to 40", "Addition", "Subtraction"] },
        { name: "EVS", topics: ["Birds name", "Animals name", "Parts of plant", "Water sources"] }
      ],
      examPattern: "Oral assessment with simple worksheets"
    },
    { 
      class: "Class 1", 
      pdf: "/pdfs/pt4-syllabus/class1-pt4-syllabus.pdf",
      color: "from-green-500 to-emerald-600",
      icon: "📚",
      subjects: [
        { name: "English", topics: ["Poem: A happy child", "Chapter 9: Minoo and kitty", "High frequency words", "Sound words (ee, short oo, long oo)"] },
        { name: "Hindi", topics: ["पाठ १६: बनावटी सिंह", "पाठ १७: सफेद हंस"] },
        { name: "Maths", topics: ["Chapter 9: Measurement", "Chapter 10: Money"] },
        { name: "EVS", topics: ["Chapter 12: Travelling time", "Chapter 13: Weather"] },
        { name: "Computer", topics: ["Chapter 7: Data and memory"] }
      ],
      examPattern: "Written exams begin - Basic concepts"
    },
    { 
      class: "Class 2", 
      pdf: "/pdfs/pt4-syllabus/class2-pt4-syllabus.pdf",
      color: "from-yellow-500 to-amber-600",
      icon: "✏️",
      subjects: [
        { name: "English", topics: ["Poem: The mother bird", "Chapter 8: The new metro", "Sound words (ow, oi, oe, ou)", "High frequency words"] },
        { name: "Hindi", topics: ["पाठ 11: गप्पू की नाव", "पाठ 13: चतुर कछुआ", "व्याकरण: लिंग"] },
        { name: "Maths", topics: ["Chapter 9: Fraction", "Chapter 10: Measurement", "Tables from 5 to 13"] },
        { name: "EVS", topics: ["Chapter 13: Seasons", "Chapter 14: Pollution"] },
        { name: "Computer", topics: ["Chapter 7: MS Paint"] }
      ],
      examPattern: "Written exams with simple grammar"
    },
    { 
      class: "Class 3", 
      pdf: "/pdfs/pt4-syllabus/class3-pt4-syllabus.pdf",
      color: "from-orange-500 to-red-600",
      icon: "🔢",
      subjects: [
        { name: "English", topics: ["Reader: Tooth troubles", "Grammar: Adjectives"] },
        { name: "Hindi", topics: ["पाठ 7: बहादुर बच्चे", "पाठ 8: पृथ्वी", "व्याकरण: विशेषण"] },
        { name: "Maths", topics: ["Chapter 8: Metric Measures", "Chapter 9: Time"] },
        { name: "EVS", topics: ["Chapter 15: Water for all", "Chapter 16: Storing water"] },
        { name: "Computer", topics: ["Chapter 5: Editing text in MS-Word 2016", "Chapter 6: Formatting a document"] }
      ],
      examPattern: "Separate papers for all subjects"
    },
    { 
      class: "Class 4", 
      pdf: "/pdfs/pt4-syllabus/class4-pt4-syllabus.pdf",
      color: "from-teal-500 to-cyan-600",
      icon: "🧪",
      subjects: [
        { name: "English", topics: ["Reader: The Olympic games", "Grammar: Adverbs", "Grammar: Punctuation"] },
        { name: "Hindi", topics: ["पाठ 5: अर्जुन सिंह", "पाठ 9: डॉ० ए० पी० जे० अब्दुल कलाम", "व्याकरण: विशेषण"] },
        { name: "Maths", topics: ["Chapter 9: Measurement", "Chapter 10: Perimeter and area"] },
        { name: "EVS", topics: ["Chapter 15: Water for all", "Chapter 16: Storing water"] },
        { name: "Computer", topics: ["Chapter 5: Working with styles and objects", "Chapter 6: More about scratch"] }
      ],
      examPattern: "Advanced concepts - 70% syllabus coverage"
    },
    { 
      class: "Class 5", 
      pdf: "/pdfs/pt4-syllabus/class5-pt4-syllabus.pdf",
      color: "from-indigo-500 to-blue-700",
      icon: "🌍",
      subjects: [
        { name: "English", topics: ["Literature: Grandpa's tree", "Poem: Ice Golawalla", "Grammar: Tenses (Chapters 6,7,8)"] },
        { name: "Hindi", topics: ["पाठ: प्रायःश्चित", "अनेक शब्दों के लिए एक शब्द", "क्रिया"] },
        { name: "Maths", topics: ["Chapter 8: Measurement", "Chapter 9: Time and Temperature"] },
        { name: "EVS", topics: ["Chapter 10: Storage and Shortage of food", "Chapter 11: The Journey of food", "Chapter 12: Food for Plants"] },
        { name: "Computer", topics: ["Chapter 6: Formatting a presentation", "Chapter 7: Programming in scratch"] },
        { name: "Sanskrit", topics: ["पाठ: श्लोका:", "पाठ: परिवार जना:"] }
      ],
      examPattern: "Map work & project based assessment"
    },
    { 
      class: "Class 6", 
      pdf: "/pdfs/pt4-syllabus/class6-pt4-syllabus.pdf",
      color: "from-red-500 to-pink-600",
      icon: "📖",
      subjects: [
        { name: "English", topics: ["Literature: 'When Music was mightier than the pen'", "Poem: 'On the Grasshopper and Cricket'", "Grammar: Conditionals, Tenses"] },
        { name: "Hindi", topics: ["पाठ: जो देखकर भी नहीं देखते", "व्याकरण: विलोम शब्द, पर्यायवाची शब्द"] },
        { name: "Maths", topics: ["Chapter 5: Understanding Elementary Shapes", "Chapter 8: Decimals"] },
        { name: "Science", topics: ["Chapter 10: Living creatures: Exploring their characteristics"] },
        { name: "Social Science", topics: ["Geography: Our Country - India", "Civics: Panchayati Raj", "History: Kingdoms, Kings and an Early Republic"] },
        { name: "Computer", topics: ["Chapter 7: Log on to Flash CS6", "Chapter 8: Working with Flash CS6", "Chapter 9: Introduction to MS small basic"] },
        { name: "Sanskrit", topics: ["पाठ: सुभाषितानि", "संख्या"] }
      ],
      examPattern: "Practical & theory combined - Separate Science and SST"
    },
    { 
      class: "Class 7", 
      pdf: "/pdfs/pt4-syllabus/class7-pt4-syllabus.pdf",
      color: "from-fuchsia-500 to-purple-700",
      icon: "🔬",
      subjects: [
        { name: "English", topics: ["Literature: The Ransom of Red Chief", "Grammar: Finite and Nonfinite verbs, Tenses", "Writing: Notice Writing, Diary Entry"] },
        { name: "Hindi", topics: ["पाठ: वीर कुँवर सिंह", "व्याकरण: पर्यायवाची शब्द, क्रिया"] },
        { name: "Maths", topics: ["Chapter 12: Algebra Expression", "Chapter 8: Exponents Powers"] },
        { name: "Science", topics: ["Chapter 8: Reproduction in plants"] },
        { name: "Social Science", topics: ["Geography: Water", "History: Devotional Path to the Devine", "Civics: Growing up as a Girls & Boys"] },
        { name: "Computer", topics: ["Chapter 6: Looping & Graphics in Small Basic", "Chapter 7: Introduction to HTML (5)", "Chapter 8: More on CSS3"] },
        { name: "Sanskrit", topics: ["पाठ: विधाधनम्", "विलोम शब्द"] }
      ],
      examPattern: "Lab experiments included - Project work submission"
    },
    { 
      class: "Class 8", 
      pdf: "/pdfs/pt4-syllabus/class8-pt4-syllabus.pdf",
      color: "from-gray-700 to-gray-900",
      icon: "🎯",
      subjects: [
        { name: "English", topics: ["Literature: A Jungle Boy at Hockey, Authorship", "Grammar: Tense, Conditionals", "Writing: Email Writing, Diary Entry"] },
        { name: "Hindi", topics: ["पद्ध: कबीर की सखियां", "व्याकरण: वाक्य, पर्यायवाची शब्द, विलोम शब्द"] },
        { name: "Maths", topics: ["Chapter 11: Mensuration", "Chapter 12: Exponents and Powers"] },
        { name: "Science", topics: ["Chapter 11: Chemical effects of electric current", "Chapter 12: Some natural phenomena"] },
        { name: "Social Science", topics: ["History: Civilising the Native, Educating the Nation", "Civics: Understanding Marginalisation", "Geography: Industries"] },
        { name: "Computer", topics: ["Chapter 6: More on Photoshop CS6", "Chapter 7: Visual Studio Community (2015)", "Chapter 8: More on visual studio (2015)"] },
        { name: "Sanskrit", topics: ["पाठ: अमूल्य: समय:", "पर्यायवाची शब्द"] }
      ],
      examPattern: "Pre-boards preparation - Practical exams included"
    },
    { 
      class: "Class 9", 
      pdf: "/pdfs/pt4-syllabus/class9-pt4-syllabus.pdf",
      color: "from-blue-800 to-indigo-900",
      icon: "🎓",
      subjects: [
        { name: "English", topics: ["Beehive: My Childhood", "Poem: Men are Foreign", "Moments: The last leaf", "Grammar: Direct & Indirect speech", "Writing: Notice writing, Email writing"] },
        { name: "Hindi", topics: ["संचयन: गीत अगीत", "व्याकरण: वाक्य से तात्पर्य, वाक्य के भेद"] },
        { name: "Maths", topics: ["Chapter 13: Surface Area and Volume"] },
        { name: "Science", topics: ["Chapter 9: Gravitation"] },
        { name: "Social Science", topics: ["History: Forest society and colonialism", "Geography: Climate", "Economics: Food security in India", "Political science: Electoral politics"] },
        { name: "Computer", topics: ["Unit 3: Digital documentation", "Unit 4: Electronic spreadsheet"] }
      ],
      examPattern: "Final year preparation - 80 marks theory + 20 marks internal"
    }
  ];

  const examSchedule = {
    startDate: "March 15, 2025",
    endDate: "March 28, 2025",
    resultDate: "April 10, 2025",
    practicalStart: "March 10, 2025",
    practicalEnd: "March 14, 2025"
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-4 md:py-8 px-3 sm:px-4 font-poppins">
        {/* Decorative Background - Hidden on mobile for performance */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-16">
            <div className="relative inline-block mb-4 md:mb-8">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg md:blur-xl opacity-30 animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-28 md:h-28 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl">
                <FaBook className="text-2xl md:text-5xl text-white" />
              </div>
              <div className="absolute -top-1 -right-1 md:-top-3 md:-right-3 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg md:shadow-xl animate-bounce">
                <FaStar className="text-white text-xs md:text-lg" />
              </div>
            </div>
            
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-2 md:mb-4 px-2">
                PT-4 Syllabus 2025-26
              </h1>
              <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 md:px-8 md:py-4 rounded-full border border-blue-200 shadow-md md:shadow-lg mb-3 md:mb-4 mx-2">
                <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-blue-800">
                  Periodic Test - 4 (Nursery to Class 9)
                </h2>
              </div>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                G.D. Goenka Public School, Aligarh
              </p>
            </div>

            {/* Main Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-6 md:mb-10 px-2">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg md:shadow-xl border border-blue-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-4">
                    <FaCalendarDay className="text-white text-xs md:text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-sm text-gray-500">Exam Start</p>
                    <p className="font-bold text-gray-800 text-sm md:text-lg">{examSchedule.startDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-green-50 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg md:shadow-xl border border-green-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-4">
                    <FaClock className="text-white text-xs md:text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-sm text-gray-500">Exam End</p>
                    <p className="font-bold text-gray-800 text-sm md:text-lg">{examSchedule.endDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg md:shadow-xl border border-purple-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-4">
                    <FaChartLine className="text-white text-xs md:text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-sm text-gray-500">Result Date</p>
                    <p className="font-bold text-gray-800 text-sm md:text-lg">{examSchedule.resultDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg md:shadow-xl border border-orange-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mr-2 md:mr-4">
                    <FaClipboardCheck className="text-white text-xs md:text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-sm text-gray-500">Total Classes</p>
                    <p className="font-bold text-gray-800 text-sm md:text-lg">12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Banner */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 shadow-lg md:shadow-2xl max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] hidden md:block"></div>
              <div className="relative px-4 py-3 md:px-8 md:py-6 text-center">
                <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-1 md:mb-2">
                  G.D. Goenka Public School
                </p>
                <p className="text-blue-200 text-xs sm:text-sm md:text-lg">Session 2025-26 | Aligarh</p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              {/* Syllabus Coverage */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <FaInfoCircle className="text-blue-600 mr-2 md:mr-3 text-sm md:text-base" />
                  Exam Pattern
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="pb-2 md:pb-3 border-b border-gray-100">
                    <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">Nursery - UKG</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                      <div className="bg-green-500 h-2 md:h-3 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-right text-xs md:text-sm font-bold text-green-700 mt-1">Oral Only</p>
                  </div>
                  <div className="pb-2 md:pb-3 border-b border-gray-100">
                    <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">Class 1-5</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                      <div className="bg-blue-500 h-2 md:h-3 rounded-full w-4/5"></div>
                    </div>
                    <p className="text-right text-xs md:text-sm font-bold text-blue-700 mt-1">Written + Oral</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">Class 6-9</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                      <div className="bg-purple-500 h-2 md:h-3 rounded-full w-full"></div>
                    </div>
                    <p className="text-right text-xs md:text-sm font-bold text-purple-700 mt-1">Theory + Practical</p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-blue-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <FaPhone className="text-blue-600 mr-2 md:mr-3 text-sm md:text-base" />
                  Contact Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 md:p-4 rounded-lg md:rounded-xl">
                    <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">For Syllabus Queries</p>
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-sm md:text-lg font-bold text-blue-800 flex items-center">
                        <span className="bg-blue-600 text-white p-1 md:p-2 rounded md:rounded-lg mr-2 md:mr-3 text-xs">📞</span>
                        8126747489
                      </p>
                      <p className="text-sm md:text-lg font-bold text-blue-800 flex items-center">
                        <span className="bg-blue-600 text-white p-1 md:p-2 rounded md:rounded-lg mr-2 md:mr-3 text-xs">📞</span>
                        8265826237
                      </p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3">Timing: 9 AM - 4 PM</p>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-br from-white to-red-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-red-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <FaClipboardCheck className="text-red-600 mr-2 md:mr-3 text-sm md:text-base" />
                  Important Notes
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 text-xs">📌</span>
                    <span className="text-xs md:text-sm text-gray-700">Complete syllabus as per CBSE guidelines</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 text-xs">📌</span>
                    <span className="text-xs md:text-sm text-gray-700">Admit card compulsory for exams</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 text-xs">📌</span>
                    <span className="text-xs md:text-sm text-gray-700">Practical exams for Classes 6-9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-3">
              {/* Syllabus Cards Grid */}
              <div className="mb-8 md:mb-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8">
                  <div className="mb-4 sm:mb-0">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                      Detailed Syllabus by Class
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      Complete PT-4 syllabus for Nursery to Class 9
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-lg text-sm md:text-base">
                    Session 2025-26
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {classwiseSyllabus.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-b from-white to-gray-50 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300"
                    >
                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${item.color} p-4 md:p-6`}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
                              <span className="text-xl md:text-3xl">{item.icon}</span>
                            </div>
                            <div>
                              <h3 className="text-xl md:text-3xl font-bold text-white">{item.class}</h3>
                              <p className="text-white/80 text-sm md:text-base">PT-4 Syllabus</p>
                            </div>
                          </div>
                          <a
                            href={`${item.pdf}#toolbar=0`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm md:text-base"
                          >
                            <FaDownload className="mr-2" />
                            Download PDF
                          </a>
                        </div>
                      </div>
                      
                      {/* Card Body */}
                      <div className="p-4 md:p-6">
                        {/* Subjects Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                          {item.subjects.map((subject, subIndex) => (
                            <div key={subIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200">
                              <div className="flex items-center mb-2 md:mb-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded md:rounded-lg flex items-center justify-center mr-2 md:mr-3">
                                  {subject.name === "English" && <FaLanguage className="text-blue-600 text-sm md:text-base" />}
                                  {subject.name === "Hindi" && <span className="text-base md:text-xl">🇮🇳</span>}
                                  {subject.name === "Maths" && <FaCalculator className="text-blue-600 text-sm md:text-base" />}
                                  {subject.name === "Science" && <FaFlask className="text-blue-600 text-sm md:text-base" />}
                                  {subject.name === "EVS" && <FaGlobeAsia className="text-blue-600 text-sm md:text-base" />}
                                  {subject.name === "Computer" && <FaLaptop className="text-blue-600 text-sm md:text-base" />}
                                  {subject.name === "Social Science" && <FaUserFriends className="text-blue-600 text-sm md:text-base" />}
                                  {subject.name === "Sanskrit" && <span className="text-base md:text-xl">🕉️</span>}
                                </div>
                                <h4 className="font-bold text-base md:text-lg text-gray-900">{subject.name}</h4>
                              </div>
                              <ul className="space-y-1 md:space-y-2">
                                {subject.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="flex items-start text-xs md:text-sm">
                                    <span className="text-green-500 mr-1 md:mr-2 mt-0.5 md:mt-1">•</span>
                                    <span className="text-gray-700 break-words">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {/* Exam Pattern */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-blue-200">
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaClipboardCheck className="text-blue-600 mr-2 md:mr-3 text-sm md:text-base" />
                            <p className="font-bold text-blue-800 text-sm md:text-base">Exam Pattern:</p>
                          </div>
                          <p className="text-gray-700 text-xs md:text-sm">{item.examPattern}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Instructions */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8 shadow-lg md:shadow-xl">
                <div className="flex items-start mb-4 md:mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 md:p-4 rounded-lg md:rounded-xl mr-3 md:mr-4">
                    <span className="text-xl md:text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">General Instructions</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Please note the following important points for PT-4 examinations:
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-base md:text-lg">📋 For Nursery to UKG</h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        Only oral assessment
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        Activity based evaluation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        No written exams
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        Results in parent-teacher meeting
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-base md:text-lg">🎯 For Class 1-9</h4>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        80 marks theory + 20 marks internal
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        Practical exams for Science/Computer
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        Admit card compulsory
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-1 md:mr-2">✓</span>
                        Complete all dues before exams
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg md:shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  <div className="text-white text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Need More Information?</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Contact your class teacher or examination department for assistance
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg md:rounded-xl font-bold hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                    >
                      <FaHome className="mr-2 md:mr-3" />
                      Back to Home
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700 text-center">
                  <p className="text-gray-400 italic text-xs md:text-sm">
                    "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">
                    G.D. Goenka Public School, Aligarh © 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PT4SyllabusPage;