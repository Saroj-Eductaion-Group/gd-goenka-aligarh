import React from "react";
import { Layout } from "../components/Layout";
import ActivitesBanner from "../assets/age.jpeg";
import { motion } from "framer-motion";
import NavigationPages from "./NavigationPages";
import { Helmet } from "react-helmet";
import { FaFilePdf, FaDownload } from "react-icons/fa";

const ageCriteria = [
  {
    className: "Nursery / PG",
    minAge: "3 Years",
    maxAge: "5 Years",
    bornBetween: "01-Apr-2021 – 01-Apr-2023",
  },
  {
    className: "LKG",
    minAge: "4 Years",
    maxAge: "6 Years",
    bornBetween: "01-Apr-2020 – 01-Apr-2022",
  },
  {
    className: "UKG",
    minAge: "5 Years",
    maxAge: "7 Years",
    bornBetween: "01-Apr-2019 – 01-Apr-2021",
  },
  {
    className: "Class 1",
    minAge: "6 Years",
    maxAge: "8 Years",
    bornBetween: "01-Apr-2018 – 01-Apr-2020",
  },
  {
    className: "Class 2",
    minAge: "7 Years",
    maxAge: "9 Years",
    bornBetween: "01-Apr-2017 – 01-Apr-2019",
  },
  {
    className: "Class 3",
    minAge: "8 Years",
    maxAge: "10 Years",
    bornBetween: "01-Apr-2016 – 01-Apr-2018",
  },
  {
    className: "Class 4",
    minAge: "9 Years",
    maxAge: "11 Years",
    bornBetween: "01-Apr-2015 – 01-Apr-2017",
  },
  {
    className: "Class 5",
    minAge: "10 Years",
    maxAge: "12 Years",
    bornBetween: "01-Apr-2014 – 01-Apr-2016",
  },
  {
    className: "Class 6",
    minAge: "11 Years",
    maxAge: "13 Years",
    bornBetween: "01-Apr-2013 – 01-Apr-2015",
  },
  {
    className: "Class 7",
    minAge: "12 Years",
    maxAge: "14 Years",
    bornBetween: "01-Apr-2012 – 01-Apr-2014",
  },
  {
    className: "Class 8",
    minAge: "13 Years",
    maxAge: "15 Years",
    bornBetween: "01-Apr-2011 – 01-Apr-2013",
  },
  {
    className: "Class 9",
    minAge: "14 Years",
    maxAge: "15 Years",
    bornBetween: "01-Apr-2010 – 01-Apr-2011",
  },
];

const AgeCriteria = () => {
  return (
    <Layout>
      <Helmet>
        <title>Age Criteria 2026-27 - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Check the official age requirements and eligible birth date ranges for admission to different classes (Session 2026-27) at GD Goenka Public School Aligarh."
        />
      </Helmet>

      {/* Banner Section */}
      <motion.div
        className="relative h-[28vh] md:h-[60vh] lg:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={ActivitesBanner}
          alt="Activities Banner"
          className="h-full w-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Age Criteria
        </motion.h1>
      </motion.div>

      <NavigationPages />

      <div className="max-w-4xl mx-auto my-8 p-6 bg-[#2a3c7e] shadow-xl rounded-2xl border border-blue-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-blue-800">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white text-center sm:text-left">
              Age Criteria for AY 2026–27 Admissions
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 text-center sm:text-left">
              Eligible birth date ranges calculated as on 31st March / 1st April 2026
            </p>
          </div>

          <a
            href="/pdfs/Age-Criteria-2026-27.pdf?v=26-27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#bea05a] to-[#d4b76a] hover:from-[#a88a44] hover:to-[#bea05a] text-[#1a2550] px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <FaFilePdf className="text-red-700 text-base" />
            <span>Download Official PDF</span>
          </a>
        </div>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-[#bea05a] text-white">
              <tr>
                <th className="border border-gray-400 px-4 py-3 text-center text-sm md:text-base font-bold">Class / Grade</th>
                <th className="border border-gray-400 px-4 py-3 text-center text-sm md:text-base font-bold">Min Age</th>
                <th className="border border-gray-400 px-4 py-3 text-center text-sm md:text-base font-bold">Max Age</th>
                <th className="border border-gray-400 px-4 py-3 text-center text-sm md:text-base font-bold">
                  Eligible Born Between Range
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-gray-800 text-xs sm:text-sm">
              {ageCriteria.map((item, index) => (
                <tr key={index} className="hover:bg-yellow-100 transition-colors border-b border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2.5 font-semibold text-gray-900 text-center">
                    {item.className}
                  </td>
                  <td className="border-r border-gray-300 px-4 py-2.5 text-center font-medium">
                    {item.minAge}
                  </td>
                  <td className="border-r border-gray-300 px-4 py-2.5 text-center font-medium">
                    {item.maxAge}
                  </td>
                  <td className="px-4 py-2.5 text-center font-bold text-[#2a3c7e]">
                    {item.bornBetween}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-blue-100 text-xs md:text-sm text-center leading-relaxed bg-blue-900/40 p-3 rounded-lg border border-blue-800">
          <strong>Note:</strong> The minimum age limit to appear for the CBSE
          Class 10th board exam is 14 years, meaning the candidate must have
          completed 14 years of age as of 31st December of the year of the
          examination.
        </p>
      </div>
    </Layout>
  );
};

export default AgeCriteria;
