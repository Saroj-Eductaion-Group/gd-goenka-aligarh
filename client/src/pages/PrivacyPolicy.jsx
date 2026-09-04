import React, { useState, useEffect, useMemo } from "react";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import NavigationPages from "./NavigationPages";
import { schoolPoliciesList } from "../data/schoolPoliciesData";
import {
  FaShieldAlt,
  FaSearch,
  FaBookOpen,
  FaPrint,
  FaShareAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaUserShield,
  FaHeartbeat,
  FaUsersCog,
  FaBuilding,
  FaFileAlt,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaInfoCircle,
} from "react-icons/fa";
import ActivitesBanner from "../assets/age.jpeg";

const CATEGORY_ICONS = {
  "Admissions & Administration": FaShieldAlt,
  "Academics & Pedagogy": FaGraduationCap,
  "Student Welfare & Conduct": FaUserShield,
  "Safety, Health & Emergency": FaHeartbeat,
  "Staff Empowerment & HR": FaUsersCog,
  "Campus & Infrastructure": FaBuilding,
};

const CATEGORIES = [
  "All",
  "Admissions & Administration",
  "Academics & Pedagogy",
  "Student Welfare & Conduct",
  "Safety, Health & Emergency",
  "Staff Empowerment & HR",
  "Campus & Infrastructure",
];

const PrivacyPolicy = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePolicyId, setActivePolicyId] = useState(
    schoolPoliciesList[0]?.id || "privacy-and-data-protection"
  );
  const [copiedLink, setCopiedLink] = useState(false);
  const [fontSize, setFontSize] = useState("base"); // 'sm' | 'base' | 'lg'

  // Hash-based or query-based direct policy linking
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const match = schoolPoliciesList.find(
        (p) => p.id.toLowerCase() === hash.toLowerCase()
      );
      if (match) {
        setActivePolicyId(match.id);
      }
    }
  }, []);

  const handleSelectPolicy = (id) => {
    setActivePolicyId(id);
    window.history.replaceState(null, "", `#${id}`);
    const detailElement = document.getElementById("policy-viewer-pane");
    if (detailElement) {
      detailElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${activePolicyId}`;
    navigator.clipboard?.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Filter policies based on category and search query
  const filteredPolicies = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return schoolPoliciesList.filter((policy) => {
      const matchesCategory =
        selectedCategory === "All" || policy.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!q) return true;

      const inTitle = policy.title.toLowerCase().includes(q);
      const inSummary = policy.summary?.toLowerCase().includes(q);
      const inCategory = policy.category?.toLowerCase().includes(q);
      const inParagraphs = policy.paragraphs?.some((p) =>
        p.toLowerCase().includes(q)
      );

      return inTitle || inSummary || inCategory || inParagraphs;
    });
  }, [selectedCategory, searchQuery]);

  // Find active policy object
  const activePolicy = useMemo(() => {
    return (
      schoolPoliciesList.find((p) => p.id === activePolicyId) ||
      filteredPolicies[0] ||
      schoolPoliciesList[0]
    );
  }, [activePolicyId, filteredPolicies]);

  // Previous & Next navigation
  const currentIndex = schoolPoliciesList.findIndex(
    (p) => p.id === activePolicy?.id
  );
  const prevPolicy = currentIndex > 0 ? schoolPoliciesList[currentIndex - 1] : null;
  const nextPolicy =
    currentIndex < schoolPoliciesList.length - 1
      ? schoolPoliciesList[currentIndex + 1]
      : null;

  const ActiveIcon =
    CATEGORY_ICONS[activePolicy?.category] || FaFileAlt;

  return (
    <Layout>
      <Helmet>
        <title>
          {activePolicy
            ? `${activePolicy.title} | School Policies & Privacy Policy - GD Goenka Public School Aligarh`
            : "School Policies & Privacy Policy - GD Goenka Public School Aligarh"}
        </title>
        <meta
          name="description"
          content="Comprehensive School Policies, Student Welfare, Safety Protocols, Academic Framework and Website Data Privacy at G.D. Goenka Public School Aligarh."
        />
        <meta
          name="keywords"
          content="GD Goenka School Policies, Privacy Policy Aligarh, Admission Policy, School Discipline, Safety SOP, Disaster Management, Student Empowerment"
        />
      </Helmet>

      {/* Hero Banner Section */}
      <div className="relative h-[25vh] md:h-[38vh] overflow-hidden bg-[#003963]">
        <img
          src={ActivitesBanner}
          alt="School Policies Banner"
          className="h-full w-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002240] via-[#003963]/90 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#bea05a] text-[#1a2550] mb-2 shadow-sm">
              <FaShieldAlt className="text-xs" /> Institutional Governance & Trust
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              School Policies <span className="text-[#bea05a]">&</span> Privacy
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base mt-2 max-w-2xl font-light leading-relaxed">
              Official guidelines, regulatory compliance, safety protocols, and digital data privacy standards for Session 2026–27.
            </p>
          </div>
        </div>
      </div>

      <NavigationPages />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003963] flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100">
              {schoolPoliciesList.length}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">Official Index</p>
              <p className="text-sm font-bold text-gray-900 truncate">26 School Policies</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-yellow-50 text-[#bea05a] flex items-center justify-center font-bold text-lg shrink-0 border border-yellow-100">
              6
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">Governance</p>
              <p className="text-sm font-bold text-gray-900 truncate">Core Categories</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0 border border-emerald-100">
              ✓
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">Regulatory Framework</p>
              <p className="text-sm font-bold text-gray-900 truncate">CBSE & NEP 2020</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center gap-3.5">
            <div className="px-3 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 border border-purple-100">
              2026–27
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 font-medium">Active Session</p>
              <p className="text-sm font-bold text-gray-900 truncate">Academic Year 2026–27</p>
            </div>
          </div>
        </div>

        {/* Search and Category Filter Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-md mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search policy title, clause, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#003963] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  title="Clear search"
                >
                  <FaTimes className="text-xs" />
                </button>
              )}
            </div>

            {/* Direct Jump to Privacy Policy */}
            <button
              onClick={() => handleSelectPolicy("privacy-and-data-protection")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                activePolicy?.id === "privacy-and-data-protection"
                  ? "bg-[#003963] text-white ring-2 ring-[#bea05a]"
                  : "bg-[#bea05a]/15 text-[#8c6d1d] hover:bg-[#bea05a]/25"
              }`}
            >
              <FaShieldAlt />
              <span>Website Privacy Policy</span>
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 mt-3 border-t border-gray-100 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? schoolPoliciesList.length
                  : schoolPoliciesList.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#003963] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isSelected
                        ? "bg-[#bea05a] text-[#1a2550]"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Policy Index & Content Reader Grid (Full Page View, No Overlaps, No Inner Scrollbars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Policy Directory (Full Page Height, No Sticky Overlap) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FaBookOpen className="text-[#003963]" />
                  <h2 className="font-bold text-gray-900 text-sm md:text-base">
                    Policy Directory
                  </h2>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {filteredPolicies.length} {filteredPolicies.length === 1 ? "Policy" : "Policies"}
                </span>
              </div>

              {/* Policy List without internal scrollbar */}
              <div className="space-y-1.5">
                {filteredPolicies.length === 0 ? (
                  <div className="text-center py-8 px-4 text-gray-500">
                    <p className="text-sm font-medium">No policies found matching your search.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      className="mt-3 text-xs text-[#003963] font-bold underline"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  filteredPolicies.map((policy) => {
                    const isActive = activePolicy?.id === policy.id;
                    const PolicyIcon =
                      CATEGORY_ICONS[policy.category] || FaFileAlt;

                    return (
                      <button
                        key={policy.id}
                        onClick={() => handleSelectPolicy(policy.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-3 group border ${
                          isActive
                            ? "bg-[#003963] text-white border-[#003963] shadow-md"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-800 border-transparent hover:border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <span
                            className={`p-2 rounded-lg text-xs mt-0.5 shrink-0 ${
                              isActive
                                ? "bg-white/10 text-[#bea05a]"
                                : "bg-blue-50 text-[#003963] group-hover:bg-blue-100"
                            }`}
                          >
                            <PolicyIcon />
                          </span>
                          <div className="min-w-0">
                            <p
                              className={`text-xs md:text-sm font-semibold leading-tight ${
                                isActive ? "text-white" : "text-gray-900 group-hover:text-[#003963]"
                              }`}
                            >
                              {policy.title}
                            </p>
                            <p
                              className={`text-[11px] mt-0.5 truncate ${
                                isActive ? "text-blue-200" : "text-gray-500"
                              }`}
                            >
                              {policy.category}
                            </p>
                          </div>
                        </div>

                        <FaChevronRight
                          className={`text-xs mt-2 shrink-0 transition-transform ${
                            isActive
                              ? "text-[#bea05a] translate-x-1"
                              : "text-gray-400 group-hover:translate-x-0.5"
                          }`}
                        />
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Right Pane: Policy Detailed View (Full Page View) */}
          <div
            id="policy-viewer-pane"
            className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8 lg:p-10 scroll-mt-28"
          >
            {activePolicy ? (
              <div>
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#003963] border border-blue-100">
                      <ActiveIcon className="text-xs" /> {activePolicy.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <FaCheckCircle className="text-[10px]" /> Active Session 2026–27
                    </span>
                  </div>

                  {/* Actions Toolbar */}
                  <div className="flex items-center gap-2">
                    {/* Font Size Adjust */}
                    <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1 text-xs">
                      <button
                        onClick={() => setFontSize("sm")}
                        className={`px-2 py-0.5 rounded font-bold ${
                          fontSize === "sm" ? "bg-white shadow text-[#003963]" : "text-gray-600"
                        }`}
                        title="Smaller font"
                      >
                        A-
                      </button>
                      <button
                        onClick={() => setFontSize("base")}
                        className={`px-2 py-0.5 rounded font-bold ${
                          fontSize === "base" ? "bg-white shadow text-[#003963]" : "text-gray-600"
                        }`}
                        title="Default font"
                      >
                        A
                      </button>
                      <button
                        onClick={() => setFontSize("lg")}
                        className={`px-2 py-0.5 rounded font-bold ${
                          fontSize === "lg" ? "bg-white shadow text-[#003963]" : "text-gray-600"
                        }`}
                        title="Larger font"
                      >
                        A+
                      </button>
                    </div>

                    {/* Copy Link */}
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors"
                      title="Copy link to this policy"
                    >
                      <FaShareAlt className="text-xs" />
                      <span>{copiedLink ? "Copied!" : "Share"}</span>
                    </button>

                    {/* Print Button */}
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#003963] hover:bg-[#002d4f] text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
                      title="Print this policy"
                    >
                      <FaPrint className="text-xs" />
                      <span>Print</span>
                    </button>
                  </div>
                </div>

                {/* Policy Title */}
                <div className="my-6">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003963] tracking-tight leading-snug">
                    {activePolicy.title}
                  </h1>
                  {activePolicy.filename && (
                    <p className="text-xs text-gray-400 mt-1 font-mono">
                      Document Source: {activePolicy.filename}
                    </p>
                  )}
                </div>

                {/* Executive Summary Card */}
                {activePolicy.summary && (
                  <div className="bg-amber-50/70 border-l-4 border-[#bea05a] p-4 rounded-r-xl mb-6">
                    <div className="flex items-start gap-2">
                      <FaInfoCircle className="text-[#bea05a] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#8c6d1d]">
                          Policy Summary & Purpose
                        </p>
                        <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                          {activePolicy.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Policy Paragraphs & Content */}
                <div
                  className={`space-y-4 text-gray-700 leading-relaxed font-normal ${
                    fontSize === "sm"
                      ? "text-xs sm:text-sm"
                      : fontSize === "lg"
                      ? "text-base sm:text-lg"
                      : "text-sm sm:text-base"
                  }`}
                >
                  {activePolicy.paragraphs?.map((para, pIdx) => {
                    const isHeading =
                      para.length < 90 &&
                      (para.startsWith("1.") ||
                        para.startsWith("2.") ||
                        para.startsWith("3.") ||
                        para.startsWith("4.") ||
                        para.startsWith("5.") ||
                        para.startsWith("6.") ||
                        para.startsWith("7.") ||
                        para.startsWith("8.") ||
                        para.startsWith("9.") ||
                        para.startsWith("10.") ||
                        para.startsWith("Section") ||
                        para.startsWith("Part ") ||
                        para.startsWith("Clause") ||
                        para.endsWith(":"));

                    const isBullet =
                      para.trim().startsWith("•") ||
                      para.trim().startsWith("-") ||
                      para.trim().startsWith("*");

                    if (isHeading) {
                      return (
                        <h3
                          key={pIdx}
                          className="text-base sm:text-lg font-bold text-[#003963] pt-3 pb-1 border-b border-gray-100 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#bea05a]"></span>
                          {para}
                        </h3>
                      );
                    }

                    if (isBullet) {
                      return (
                        <div key={pIdx} className="flex items-start gap-2 pl-3">
                          <span className="text-[#bea05a] mt-1.5 text-xs">▪</span>
                          <p className="flex-1">{para.replace(/^[•\-*]\s*/, "")}</p>
                        </div>
                      );
                    }

                    return (
                      <p key={pIdx} className="text-justify leading-relaxed">
                        {para}
                      </p>
                    );
                  })}
                </div>

                {/* Previous / Next Policy Navigation */}
                <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {prevPolicy ? (
                    <button
                      onClick={() => handleSelectPolicy(prevPolicy.id)}
                      className="w-full sm:w-auto flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-left transition-colors"
                    >
                      <FaArrowLeft className="text-xs text-[#003963]" />
                      <div>
                        <p className="text-[10px] text-gray-500 font-medium uppercase">Previous Policy</p>
                        <p className="text-xs font-bold text-gray-900 truncate max-w-[200px]">
                          {prevPolicy.title}
                        </p>
                      </div>
                    </button>
                  ) : <div />}

                  {nextPolicy ? (
                    <button
                      onClick={() => handleSelectPolicy(nextPolicy.id)}
                      className="w-full sm:w-auto flex items-center justify-end gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-right transition-colors sm:ml-auto"
                    >
                      <div>
                        <p className="text-[10px] text-gray-500 font-medium uppercase">Next Policy</p>
                        <p className="text-xs font-bold text-gray-900 truncate max-w-[200px]">
                          {nextPolicy.title}
                        </p>
                      </div>
                      <FaArrowRight className="text-xs text-[#003963]" />
                    </button>
                  ) : <div />}
                </div>

                {/* Grievance / Inquiries Box */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#003963]">
                        Questions, Clarifications or Policy Feedback?
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5">
                        For official clarifications or grievance redressal, contact the administrative office.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="mailto:admission@gdgpsaligarh.com"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#003963] hover:bg-[#002d4f] text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
                      >
                        <FaEnvelope className="text-xs" /> Email Office
                      </a>
                      <a
                        href="tel:+919810054878"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#bea05a] hover:bg-[#a68b49] text-[#1a2550] rounded-lg text-xs font-semibold shadow-sm transition-colors"
                      >
                        <FaPhoneAlt className="text-xs" /> Call Admin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-gray-500">
                <FaFileAlt className="text-4xl mx-auto text-gray-300 mb-3" />
                <p className="text-base font-semibold text-gray-700">Select a policy to view details</p>
                <p className="text-xs text-gray-400 mt-1">
                  Choose from the index list on the left or use the search bar.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
