import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Bannerbg from "../assets/visionBanner1.jpeg";
import vision from "../assets/vision.jpeg";
import mission from "../assets/mission.jpeg";
import { Helmet } from "react-helmet";
import { FaEye, FaBullseye, FaAward, FaGraduationCap, FaLeaf, FaHeart } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const VisionAndMission = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".section-content",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".section-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".section-image",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".section-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Vision, Mission & Motto - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Learn about G.D. Goenka Public School Aligarh's Vision, Mission Statement, and Motto 'Higher, Stronger, Brighter' focused on academic excellence, character development, and environmental awareness."
        />
      </Helmet>

      {/* Banner Section */}
      <div className="relative">
        <motion.img
          src={Bannerbg}
          alt="Vision And Mission"
          className="h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[62vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute bottom-4 md:bottom-6 shadow-md left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-90 px-5 py-2.5 rounded-lg border-l-4 border-[#bea05a]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          VISION & MISSION
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Main Content Sections */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-polymath">
        
        {/* Vision Section */}
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
            {/* Vision Image */}
            <motion.div
              className="relative order-1 md:order-2 mt-8 md:mt-0 section-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img src={vision} alt="Vision - GD Goenka Public School" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              className="relative order-2 md:order-1 section-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -z-10 top-0 left-0 text-gray-100 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold leading-none opacity-50 select-none">
                VISION
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-blue-50 text-[#2a3c7e] text-xl shadow-sm border border-blue-100">
                  <FaEye />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#bea05a]">
                  Our Forward Outlook
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2a3c7e] mb-4 sm:mb-6">
                Vision
              </h2>
              <div className="bg-gradient-to-r from-blue-50/80 to-transparent p-5 rounded-2xl border-l-4 border-[#2a3c7e] mb-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                  Empowering students to reach their full potential in a supportive and inclusive learning environment that fosters academic excellence, character development, and environmental awareness.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-2.5">
                  <FaGraduationCap className="text-[#2a3c7e] text-lg shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">Academic Excellence</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-2.5">
                  <FaHeart className="text-rose-600 text-lg shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">Character Building</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-2.5">
                  <FaLeaf className="text-emerald-600 text-lg shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">Eco-Consciousness</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
            {/* Mission Image */}
            <motion.div
              className="relative order-1 md:order-1 mt-8 md:mt-0 section-image z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={mission}
                  alt="Mission Statement - GD Goenka Public School"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Mission Content */}
            <motion.div
              className="relative order-2 md:order-2 section-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -z-10 top-0 lg:-left-48 left-0 md:-left-40 text-gray-100 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold leading-none opacity-50 select-none">
                MISSION
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-yellow-50 text-[#bea05a] text-xl shadow-sm border border-yellow-100">
                  <FaBullseye />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#bea05a]">
                  Our Purpose & Commitment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2a3c7e] mb-4 sm:mb-6">
                Mission Statement
              </h2>
              <div className="bg-gradient-to-r from-amber-50/80 to-transparent p-5 rounded-2xl border-l-4 border-[#bea05a] mb-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                  To provide a holistic education that empowers students to excel academically, develop strong character, and become environmentally conscious global citizens. We strive to create a supportive and inclusive learning environment that encourages curiosity, creativity, and critical thinking, enabling our students to reach their full potential and make a positive impact in the world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Motto Section */}
        <section className="container mx-auto max-w-7xl">
          <motion.div
            className="bg-gradient-to-br from-[#003963] via-[#2a3c7e] to-[#1a2550] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Decorative Graphic */}
            <div className="absolute -right-10 -bottom-10 opacity-10 text-[200px] select-none pointer-events-none">
              <FaAward />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bea05a] text-[#1a2550] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-4 shadow-md">
                <FaAward className="text-sm" /> School Motto
              </div>

              <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                Higher, Stronger, Brighter
              </h3>

              <div className="w-24 h-1 bg-[#bea05a] mx-auto rounded-full mb-6"></div>

              <p className="text-blue-100 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                The school motto captures the enduring Goenkan quest for excellence, an insatiable thirst for knowledge, and a commitment to nurturing future-ready global leaders.
              </p>
            </div>
          </motion.div>
        </section>

      </div>
    </Layout>
  );
};

export default VisionAndMission;
