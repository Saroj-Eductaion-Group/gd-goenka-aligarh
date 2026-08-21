import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { useFetchData } from "../hooks/useFetchData";
import { useNavigate } from "react-router-dom";
import NavigationPages from "./NavigationPages";
import careerBanner from "../assets/CareerBanner1.jpeg";
import { Helmet } from "react-helmet";
const CurrentOpening = () => {
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/job/`;
  const { data, loading, error } = useFetchData(apiURL);

  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  const jobs = data?.data || [];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    navigate("/job-application-form", { state: { job } });
  };

  return (
    <Layout>
      <Helmet>
        <title>Career Opportunities - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Explore current job openings and career opportunities at GD Goenka Public School Aligarh."
        />
      </Helmet>

      <div className="relative bgImage">
        <h1 className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded">
          CAREER
        </h1>
        <img
          src={careerBanner}
          alt="Career Banner"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] w-full object-cover"
        />
      </div>

      <NavigationPages />

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Current Job Openings</h1>
        <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-sm border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Send your application to:
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Email:</span>
                <a
                  href="mailto:hr@gdgpsaligarh.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline flex items-center gap-1"
                >
                  hr@gdgpsaligarh.com
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && <p>Loading job listings...</p>}

        {/* Error State */}
        {error && <p className="text-red-500">{`Error: ${error}`}</p>}

        {/* Jobs List */}
        {!loading && !error && jobs.length === 0 && (
          <p>No job openings at the moment.</p>
        )}

        <ul className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border p-4 rounded-lg shadow-md flex flex-row items-center"
            >
              <div className="w-5/6">
                <h3 className="text-xl font-semibold">Profile: {job.name}</h3>
                <p className="text-black font-bold">Subject: {job.subject}</p>
                <p className="text-gray-500">
                  Posted on:{" "}
                  {new Date(job.createdAt).toLocaleDateString("en-GB")}
                </p>
              </div>

              <div className="w-2/12 flex justify-end">
                <button
                  onClick={() => handleApplyClick(job)}
                  className="text-blue-500 hover:underline"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CurrentOpening;
