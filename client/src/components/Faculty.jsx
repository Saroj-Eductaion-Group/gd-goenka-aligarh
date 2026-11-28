import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import fallbackFaculty from "../data/facultyFallback.json";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
  desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

function Faculty() {
  const [facultyList, setFacultyList] = useState(fallbackFaculty || []);
  const apiUrl = process.env.REACT_APP_BASE_URL || "";

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/faculty`);
        const result = response?.data?.data;
        if (result && result.length > 0) {
          setFacultyList(result);
        }
      } catch (err) {
        // fallbackFaculty is already set
      }
    };
    fetchFaculty();
  }, [apiUrl]);

  return (
    <section className="py-12 px-4 w-full bg-white">
      <div className="mx-auto max-w-7xl">
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a3c7e] mb-4">
          Meet Our Expert Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced educators and industry experts
          </p>
        </motion.div>

        <div className="hidden lg:flex justify-center mb-8">
          <NavLink to={"/our-faculty"}>
            <button className="bg-[#2a3c7e] text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              Explore More Faculty
            </button>
          </NavLink>
        </div>

        <div className="px-2 py-2">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={true}
            showDots={false}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            itemClass="px-2"
            className="z-20"
          >
            {facultyList.map((faculty, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center p-2"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    loading="lazy"
                    decoding="async"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-800 text-center">
                  {faculty.name}
                </h3>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Faculty;