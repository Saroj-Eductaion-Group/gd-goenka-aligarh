import React, { useState } from "react";
// import 'animate.css';
import logo from "../assets/GD-Goenka-logo.png";
import "../css/Header1.css";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TopScrollButton from "./TopScrollButton";
import { Link, NavLink } from "react-router-dom";

function Header1() {
  const [isSmallSidebar, setIsSmallSidebar] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [showVolumes, setShowVolumes] = useState(false);

  const sideToggle = () => {
    setIsSmallSidebar(!isSmallSidebar);
  };

  const sideBar = () => {
    setIsSmallSidebar(false); // Close sidebar
  };

  const mobileSidebarToggle = () => {
    setIsSidebar(!isSidebar);
  };

  const mobileSidebar = () => {
    setIsSidebar(false);
  };

  return (
    <header className="sticky">
      <div className="header sticky  w-full bg-gray-100 flex justify-between items-center text-black py-4 px-2 md:w-full drop-shadow-md">
        <Link to="/" aria-label="GD Goenka Home">
          <img
            src={logo}
            alt="GD Goenka Public School Aligarh"
            className="gdGoenkaLogo hover:scale-110 transition-transform duration-300 ease-in-out"
            width={160}
            height={42}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-4  text-base relative right-[60px] font-polymath font-light">
          <NavLink to="/">
            <li className="p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all flex items-center gap-1">
              <span>HOME</span>
            </li>
          </NavLink>

          <li className="peer p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
            ABOUT US
          </li>

          <ul
            className="pt-4  top-[49px] font-light absolute hidden peer-hover:flex hover:flex w-[240px] 
                flex-col bg-white drop-shadow-lg rounded-md gap-2 transition-all duration-100 ease-in"
          >
            <NavLink to={"/about/principal-message"}>
              <li className="menu-item cursor-pointer  mb-[-8px] hover:text-white">
                PRINCIPAL'S MESSAGE
              </li>
            </NavLink>{" "}
            <hr />
            <NavLink to={"/about/management"}>
              <li className="menu-item cursor-pointer hover:text-white mt-[-8px] mb-[-8px]">
                MANAGEMENT
              </li>
            </NavLink>
            <hr />
            <NavLink to={"/about/vision-and-mission"}>
              {" "}
              <li className="menu-item cursor-pointer hover:text-white mt-[-9px]">
                VISION & MISSION
              </li>
            </NavLink>
            {/* <NavLink to={"/about/mandatory-disclosure"}>
              {" "}
              <li className="menu-item cursor-pointer hover:text-white mt-[-9px]">
                MANDATORY DISCLOSURE
              </li>
            </NavLink> */}
          </ul>

          <div className="relative peer group">
            <li className="relative peer p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
              ACADEMICS
            </li>

            <ul
              className="academics_drop pt-2 pb-2 top-[49px] font-extralight absolute hidden peer-hover:flex hover:flex w-[320px]
      flex-col bg-white drop-shadow-lg rounded-md overflow-hidden"
            >
              {/* NEW MENUS */}
              <a
                href="/pdfs/Calendar2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  Academic Calendar 2026-27
                </li>
              </a>

              <hr className="my-1" />

              <a
                href="/pdfs/Handbook-for-Teachers.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  TEACHER'S HANDBOOK
                </li>
              </a>

              <hr className="my-1" />

              <a
                href="/pdfs/NEP2020.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  NEP 2020
                </li>
              </a>

              <hr className="my-1" />

              <a
                href="/pdfs/National-Curricculam-Framework 2023.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  NCF 2023
                </li>
              </a>

              <hr className="my-1" />

              {/* OLD MENUS */}
              <NavLink to={"/academics/faculty-&-curriculum"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  FACULTY & CURRICULUM
                </li>
              </NavLink>

              <hr className="my-1" />

              <NavLink to={"/academics/teaching-methodology"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  TEACHING METHODOLOGY
                </li>
              </NavLink>

              <hr className="my-1" />

              <NavLink to={"/academics/igniting-minds"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  IGNITING MINDS
                </li>
              </NavLink>

              <hr className="my-1" />

              <NavLink to={"/academics/competition-&-awards"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  COMPETITIONS & AWARDS
                </li>
              </NavLink>

              <hr className="my-1" />

              <a
                href="/pdfs/HolidayPlanner2025-26.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  Holiday Planner 2025-26
                </li>
              </a>

              <hr className="my-1" />

              <NavLink to={"/academics/goenkan-pursuits"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  GOENKAN PURSUITS
                </li>
              </NavLink>

              <hr className="my-1" />

              <a
                href={"/academics/authorised-book-seller"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white transition-colors whitespace-nowrap">
                  LIST OF AUTHORISED BOOK SELLERS
                </li>
              </a>

              <hr className="my-1" />

            </ul>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
              BEYOND ACADEMICS
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[220px]
      flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4 z-50"
            >
              <NavLink to={"/beyond-academics"}>
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px] hover:text-white leading-none">
                  Beyond Academics
                </li>
              </NavLink>
              <hr />
              <NavLink to={"/beyond-academics/house-system"}>
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white leading-none">
                  The House System
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
              our campus
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[240px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <NavLink to={"/our-campus/class-infrastructure"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white whitespace-nowrap">
                  class infrastructure
                </li>
              </NavLink>
              <hr />
              <NavLink to={"/our-campus/labs-and-library"}>
                <li className="menu-item cursor-pointer px-3 py-2 hover:bg-[#003963] hover:text-white whitespace-nowrap">
                  labs and library
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
              Students
            </li>
            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[250px]
      flex-col bg-white drop-shadow-lg rounded-md delay-[2s]"
            >
              <a
                href="/pdfs/Daily-Routine-Junior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white whitespace-nowrap">
                  Junior Daily Routine
                </li>
              </a>
              <hr className="my-0" />
              <a
                href="/pdfs/Daily-Routine-Senior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white whitespace-nowrap">
                  Senior Daily Routine
                </li>
              </a>
              <hr className="my-0" />
              <a
                href="/pdfs/GD-GOENKA-LUNCH-SCHEDULE.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white">
                  Lunch time
                </li>
              </a>
              <hr className="my-0" />
              <a
                href="/pdfs/Notice-for-New-Session1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white">
                  New Session
                </li>
              </a>
              <hr className="my-0" />
              <a
                href="/pdfs/Student-Council-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white">
                  Student Council
                </li>
              </a>
              <hr className="my-0" />
              <a
                href="/pdfs/Class-Perfect-2025.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white">
                  Class Perfect 2025
                </li>
              </a>
              <hr className="my-0" />
              <NavLink to={"/academics/holiday-engagement-2026"}>
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white whitespace-nowrap">
                  Holiday Engagement 2026
                </li>
              </NavLink>
              <hr className="my-0" />
              <a
                href="/pdfs/Date_Sheet_(2026-27).pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white">
                  Date Sheet 2026-27
                </li>
              </a>
              <hr className="my-0" />
              <a
                href="/pdfs/PT-2_Syllabus_(2026-27).pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-3 py-2 hover:bg-[#003963] hover:text-white">
                  Syllabus 2026-27
                </li>
              </a>
            </ul>
          </div>

          {/* committee  */}
          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
              Committee
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[260px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <a
                href="/pdfs/PTA 2025-26.docx#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px]  hover:text-white leading-none">
                  PTA 2025-26
                </li>
              </a>
              <hr />

              <a
                href="/pdfs/Sexual-Harassment-Committee-GDGOENKA.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px]  hover:text-white leading-none">
                  Harassment Committee
                </li>
              </a>
              <hr />

              <a
                href="/pdfs/Pocso-Committee-of-GD-Goenka.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white">
                  Pocso Committee
                </li>
              </a>
            </ul>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
              admissions
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[280px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <NavLink to={"/admission/application-form"}>
                {" "}
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px]  hover:text-white">
                  application form
                </li>
              </NavLink>
              <hr />
              <a
                href="/pdfs/Syllabus-of-Entrance-Exam-2026-2027.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex mt-[-16px] mb-[-16px] leading-none whitespace-nowrap">
                  Entrance exam syllabus 2026-27
                </li>
              </a>
              <hr />
              <a
                href="/pdfs/admission-procedure.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                  Admission Procedure
                </li>
              </a>
              <hr />
              <NavLink to={"/admission/age-criteria"}>
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                  Age Criteria
                </li>
              </NavLink>
              <hr />
              <a
                href="/fee-payment/fees-structure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white">
                  Fee structure
                </li>
              </a>
            </ul>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
              NEWSLETTERS
            </li>
            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[280px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <a
                href="/pdfs/GDE-schoole.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 px-3 py-2 hover:bg-[#003963] hover:text-white flex justify-between items-center whitespace-nowrap">
                  SCHOOL & FACULTY PROFILE
                </li>
              </a>
              <hr className="my-0" />
              <li
                className="menu-item cursor-pointer ps-2 px-3 py-2 hover:bg-[#003963] hover:text-white flex justify-between items-center whitespace-nowrap mt-[-16px]"
                onClick={(e) => { e.stopPropagation(); setShowVolumes(!showVolumes); }}
              >
                NEWSLETTER 2025-2026 <span>{showVolumes ? "▲" : "▼"}</span>
              </li>
              {showVolumes && (
                <>
                  <a href="/pdfs/News-Letter-Design-quarter-1st.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer">
                    <li className="menu-item cursor-pointer px-3 py-2 ps-6 hover:bg-[#003963] hover:text-white">NEWSLETTER Volume - I</li>
                  </a>
                  <hr className="my-0" />
                  <a href="/pdfs/News-Letter-Design-quarter-2nd.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer">
                    <li className="menu-item cursor-pointer px-3 py-2 ps-6 hover:bg-[#003963] hover:text-white">NEWSLETTER Volume - II</li>
                  </a>
                  <hr className="my-0" />
                  <a href="/pdfs/News-Letter-Design-quarter-3rd.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer">
                    <li className="menu-item cursor-pointer px-3 py-2 ps-6 hover:bg-[#003963] hover:text-white">NEWSLETTER Volume - III</li>
                  </a>
                  <hr className="my-0" />
                  <a href="/pdfs/News-Letter-Design-quarter-4rd.pdf#toolbar=0&navpanes=0&scrollbar=0" target="_blank" rel="noopener noreferrer">
                    <li className="menu-item cursor-pointer px-3 py-2 ps-6 hover:bg-[#003963] hover:text-white">NEWSLETTER Volume - IV</li>
                  </a>
                </>
              )}
              <hr />
              <a
                href="/pdfs/Newsletter-2026-2027.pdf?v=2026-27#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white leading-none">
                  NEWSLETTER 2026-2027
                </li>
              </a>
            </ul>
          </div>

          <div className="relative peer">
            <NavLink to={"/contact-us"}>
              {" "}
              <li className="relative peer p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
                CONTACT US
              </li>
            </NavLink>
          </div>

          <div
            className="nav_toggler cursor-pointer text-xl text-[#003963]"
            onClick={sideToggle}
          >
            <FaBars />
          </div>
        </ul>

        <div
          className="mobileNavigation cursor-pointer opacity-100 xl:hidden pr-3 text-2xl"
          onClick={mobileSidebarToggle}
        >
          <FaBars />
        </div>
      </div>

      {/*PC SIDEBAR */}
      <div
        className={`smallSidebar ${
          isSmallSidebar ? "open" : ""
        } hidden xl:flex`}
      >
        <ul className="side_bar absolute bg-white border-black w-[380px] h-full right-0 top-0">
          <div className="smallSidebarCross">
            <div className="cross pt-4" onClick={sideBar}>
              <RxCross1 />
            </div>
          </div>

          <div className="scrollSidebarOne">
            <Accordion>
              <NavLink to="/">
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="uppercase flex items-center gap-2"
                >
                  HOME
                </AccordionSummary>
              </NavLink>
            </Accordion>

            {/* ADMISSION ACCORDIAN */}

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                Career
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <NavLink to={"/career/current-openings"}>
                    {" "}
                    <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                      current opening
                    </li>
                  </NavLink>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                <NavLink to={"/about/mandatory-disclosure"}>
                  MANDATORY DISCLOSURE
                </NavLink>
              </AccordionSummary>
            </Accordion>

            {/* IMAGE GALLERY ACCORDIAN */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                gallery
              </AccordionSummary>{" "}
              <AccordionDetails>
                <ul>
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    <NavLink to="/activities">Activities</NavLink>
                  </li>
                  <hr />
                  <li className="menu-item cursor-pointer ps-1 leading-none flex uppercase ms-[-4px]">
                    <NavLink to="/in-news">In-News</NavLink>
                  </li>
                  <hr />
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    <NavLink to="/gallery">View all gallery</NavLink>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </ul>
      </div>

      {/* RESPONSIVE SIDEBAR */}
      <div className={`screenSidebar ${isSidebar ? "open" : ""}`}>
        <div className="sidebarCross">
          <div className="cross pt-4" onClick={mobileSidebar}>
            <RxCross1 />
          </div>
        </div>

        <div className="scrollSidebar">
          <Accordion>
            <NavLink to="/">
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                className="uppercase flex items-center gap-2"
              >
                HOME
              </AccordionSummary>
            </NavLink>
          </Accordion>
          {/* ABOUT ACCORDIAN MOBILE*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              about
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/about/principal-message"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    principal's message
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about/management"}>
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    management
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about/vision-and-mission"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] ms-[-4px] uppercase">
                    vision & mission
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about/mandatory-disclosure"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none uppercase">
                    mandatory disclosure
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* ACADEMICS ACCORDIAN MOBILE */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              academics
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <a
                  href="/pdfs/Calendar2026-27.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[6px] ms-[-4px] uppercase">
                    academic Calendar 2026-27
                  </li>
                </a>
                <hr />

                <a
                  href="/pdfs/Newsletter-Volume-I.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    NEWSLETTER VOLUME I
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/Newsletter-Volume-II.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    NEWSLETTER VOLUME II
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/Newsletter-Volume-III.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    NEWSLETTER VOLUME III
                  </li>
                </a>
                <hr />

                <a
                  href="/pdfs/Handbook-for-Teachers.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    TEACHER'S HANDBOOK
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/NEP2020.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    NEP 2020
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/National-Curricculam-Framework 2023.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    NCF 2023
                  </li>
                </a>
                <hr />

                <NavLink to={"/academics/faculty-&-curriculum"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    faculty & curriculum
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/faculty-&-curriculum"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    faculty & curriculum
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/teaching-methodology"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    teaching methodology
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/igniting-minds"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    igniting minds
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/competition-&-awards"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    Competition & awards
                  </li>
                </NavLink>
                <hr />
                <a
                  href="/pdfs/HolidayPlanner2025-26.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    {" "}
                    Holiday Planner 2025-26
                  </li>
                </a>
                <hr />
                <NavLink to={"/academics/goenkan-pursuits"}>
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    GOENKAN PURSUIT
                  </li>
                </NavLink>
                <hr />
                <a
                  href={"/academics/authorised-book-seller"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <li className="menu-item cursor-pointer  ms-[-4px] leading-none uppercase">
                    List of authorised book sellers
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* OUR CAMPUS ACCORDIAN MOBILE */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              our campus
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/our-campus/class-infrastructure"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    class infrastructure
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/our-campus/labs-and-library"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    labs & library
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* CAREER ACCORDIAN MOBILE */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              career
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/career/current-openings"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    current opening
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* ERP ACCORDIAN MOBILE*/}
          <Accordion>
            <a
              href="https://gdgaligarh.gdgoenka.com/Index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                className="uppercase"
              >
                erp
              </AccordionSummary>
            </a>
          </Accordion>

          {/* FEE PAYMENT MOBILE */}
          <Accordion>
            <a
              href="https://smartpay.easebuzz.in/75872/AdmissionFee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                fee payment
              </AccordionSummary>
            </a>
          </Accordion>

          {/* BEYOND ACADEMICS ACCORDIAN MOBILE */}
          <Accordion>
            <AccordionSummary>BEYOND ACADEMICS</AccordionSummary>

            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/beyond-academics"}>
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    beyond academics
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/beyond-academics/house-system"}>
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    the house system
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* ALUMNI ACCORDIAN MOBILE*/}
          <Accordion>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              alumni
            </AccordionSummary>
          </Accordion>

          {/* Routine mobile*/}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              Students
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <a
                  href="/pdfs/Daily-Routine-Junior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    Junior Daily Routine
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/Daily-Routine-Senior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    Senior Daily Routine
                  </li>
                </a>
                <hr />

                <a
                  href="/pdfs/GD-GOENKA-LUNCH-SCHEDULE.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    Lunch time
                  </li>
                </a>
                <hr />

                <a
                  href="/pdfs/Notice-for-New-Session1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                    New Session
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/Student-Council-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    Student Council
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/Class-Perfect-2025.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    Class Perfect 2025
                  </li>
                </a>
                <hr />
                <NavLink to={"/academics/holiday-engagement-2026"}>
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    Holiday Engagement 2026
                  </li>
                </NavLink>
                <hr />
                <a
                  href="/pdfs/Date_Sheet_(2026-27).pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    Date Sheet 2026-27
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/PT-2_Syllabus_(2026-27).pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    Syllabus 2026-27
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* committee mobile */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              Committee
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <a
                  href="/pdfs/PTA 2025-26.docx#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    PTA 2025-26
                  </li>
                </a>
                <hr />

                <a
                  href="/pdfs/Sexual-Harassment-Committee-GDGOENKA.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[6px] ms-[-4px] uppercase">
                    Harassment Committee
                  </li>
                </a>

                <hr />

                <a
                  href="/pdfs/Pocso-Committee-of-GD-Goenka.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                    Pocso Committee
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* NEWSLETTER ACCORDIAN mobile*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              Newsletters
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <a
                  href="/pdfs/GDE-schoole.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    SCHOOL & FACULTY PROFILE
                  </li>
                </a>
                <hr />
                <li
                  className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase justify-between items-center"
                  onClick={() => setShowVolumes(!showVolumes)}
                >
                  <span>NEWSLETTER 2025-2026</span>
                  <span className="pr-2">{showVolumes ? "▲" : "▼"}</span>
                </li>
                {showVolumes && (
                  <div className="pl-4 py-1 space-y-1 bg-gray-50 rounded">
                    <a
                      href="/pdfs/News-Letter-Design-quarter-1st.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="menu-item cursor-pointer ps-2 text-sm uppercase">
                        NEWSLETTER Volume - I
                      </li>
                    </a>
                    <a
                      href="/pdfs/News-Letter-Design-quarter-2nd.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="menu-item cursor-pointer ps-2 text-sm uppercase">
                        NEWSLETTER Volume - II
                      </li>
                    </a>
                    <a
                      href="/pdfs/News-Letter-Design-quarter-3rd.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="menu-item cursor-pointer ps-2 text-sm uppercase">
                        NEWSLETTER Volume - III
                      </li>
                    </a>
                    <a
                      href="/pdfs/News-Letter-Design-quarter-4rd.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="menu-item cursor-pointer ps-2 text-sm uppercase">
                        NEWSLETTER Volume - IV
                      </li>
                    </a>
                  </div>
                )}
                <hr />
                <a
                  href="/pdfs/Newsletter-2026-2027.pdf?v=2026-27#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex mb-[-4px] uppercase ms-[-4px]">
                    NEWSLETTER 2026-2027
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* ADMISSION ACCORDIAN mobile*/}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              admissions
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <NavLink to={"/admission/application-form"}>
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    application form
                  </li>
                </NavLink>
                <hr />

                <a
                  href="/pdfs/Syllabus-of-Entrance-Exam-2026-2027.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    Entrance exam syllabus 2026-27
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/admission-procedure.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    Admission Procedure
                  </li>
                </a>
                <hr />
                <NavLink to={"/admission/age-criteria"}>
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    {" "}
                    Age Criteria
                  </li>
                </NavLink>
                <hr />

                <a
                  href="/fee-payment/fees-structure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                    fees structure
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* IMAGE GALLERY ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              gallery
            </AccordionSummary>{" "}
            <AccordionDetails>
              <ul>
                <NavLink to={"/activities"}>
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    activities
                  </li>
                </NavLink>
                <hr />
                <NavLink to="/in-news">
                  <li className="menu-item cursor-pointer ps-1 leading-none flex uppercase ms-[-4px]">
                    In-News
                  </li>
                </NavLink>
                <hr />

                <NavLink to={"/gallery"}>
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                    View all gallery
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <NavLink to={"/contact-us"}>
              {" "}
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                Contact-us
              </AccordionSummary>
            </NavLink>
          </Accordion>
        </div>
      </div>
      {/* NAVIGATION ENDS */}
      <TopScrollButton />
    </header>
  );
}

export default Header1;
