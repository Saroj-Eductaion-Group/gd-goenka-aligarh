import React, { useEffect, useRef } from "react";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./HouseSystem.css";

// Banner background image import
import bannerBg from "../assets/housebanner1.webp";

// Import house images
import vivekanandHouseImg from "../assets/houses/vivekanand-house.jpg";
import radhakrishnanHouseImg from "../assets/houses/radhakrishnan-house.jpg";
import tagoreHouseImg from "../assets/houses/tagore-house.jpg";
import teresaHouseImg from "../assets/houses/teresa-house.jpg";

// Import PDF document
import ccaCommitteePdf from "../assets/cca-committee-2025-26.pdf";  

const HouseSystem = () => {
  const houses = [
    {
      name: "Vivekanand House",
      tagline: "The Spirit of Zeal and Optimism",
      color: "#FFD700",
      image: vivekanandHouseImg,
      description: [
        "Recognizable by its vibrant yellow color, Vivekanand House is named in honor of Swami Vivekanand, the prominent Indian philosopher and spiritual leader.",
        "The color yellow, associated with feelings of happiness, joy, and optimism, perfectly captures the house's ethos. This bright and cheerful hue evokes a sense of warmth and sunshine, making it a color that truly stands out.",
        "Justifying this distinctive color, students of Vivekanand House consistently exhibit zeal, high energy levels, and infectious enthusiasm in every task they undertake, truly embodying the spirit of their namesake."
      ]
    },
    {
      name: "Radhakrishnan House",
      tagline: "The House of Vitality and Integrity",
      color: "#FF8C00",
      image: radhakrishnanHouseImg,
      description: [
        "Radhakrishnan House is distinguished by the powerful and energetic colour orange. This vibrant hue naturally evokes feelings of enthusiasm, warmth, and vitality, and is known for its ability to boost energy levels and create a lively, optimistic atmosphere.",
        "Students of Radhakrishnan House take immense pride in embodying the qualities of Dr. Sarvepalli Radhakrishnan, who was highly regarded for his intellectual integrity and honesty. He demonstrated an exemplary range of virtues, including: Humility, Tolerance and A deep appreciation for the value of education and cultural heritage.",
        "Just like their house color, Radhakrishnan students are known for their spirited dedication and commitment to upright values, bringing vitality and integrity to every endeavor."
      ]
    },
    {
      name: "Tagore House",
      tagline: "The Spirit of Renewal and Poetry",
      color: "#28a745",
      image: tagoreHouseImg,
      description: [
        "Tagore House is proudly named after Rabindranath Tagore, the first non-European Nobel Laureate, who served as the emotional and poetic vehicle of India's mission to the outside world.",
        "The house color, vibrant green, symbolizes new beginnings. Green is intrinsically associated with nature, representing the lush greenery of plants and trees, and is universally considered the harbinger of good times.",
        "When students don their house uniforms, they evoke a powerful feeling of renewal, perpetual youthfulness, and the flourishing of life, embodying the growth and vitality inherent in the color."
      ]
    },
    {
      name: "Teresa House",
      tagline: "The House of Compassion and Sincerity",
      color: "#007bff",
      image: teresaHouseImg,
      description: [
        "Teresa House is instantly recognizable by its serene blue color—a hue that vibrates between the infinite vastness of the sky above and the steady depth of the sea below.",
        "The house is named in honor of Mother Teresa, a figure whose life was defined by a deep and unwavering compassion for the poor and marginalized sections of society. She exemplified selfless service and profound dedication.",
        "True to their symbolic house color, which represents trust, loyalty, and sincerity, the students of Teresa House live by the principles of trustworthiness and sincerity. They strive to embody the quiet strength and empathetic spirit of their namesake, aiming to make a positive impact through their actions and character."
      ]
    }
  ];

  // CCA Committee Data
  const ccaCommittee = {
    principal: "Dr. Anubhav Lodhi",
    ccaCoordinator: "Mrs. Soniya Jain",
    vicePrincipal: "Pradeep Kumar",
    coScholasticMembers: [
      "Mr. Deepak Kumar",
      "Ms. Dipti Verma",
    ],
    houses: [
      {
        name: "Tagore House (Green)",
        houseMistress: "Ms. Kumari Ruby",
        members: [
          "Ms. Gunjan Rajput",
          "Mr. Tanveer Hussain"
        ]
      },
      {
        name: "Vivekanand House (Yellow)",
        houseMistress: "Ms. Nancy Maheshwari",
        members: [
          "Ms. Gunjan Sharma",
          "Mr. Pooran Singh"
        ]
      },
      {
        name: "Radhakrishnan House (Orange)",
        houseMistress: "Mrs. Sapna Chauhan",
        members: [
          "Ms. Divya Chauhan",
          "Ms. Himadri Varshney"
        ]
      },
      {
        name: "Teresa House (Blue)",
        houseMaster: "Mr. Siddhartha Gautam",
        members: [
          "Mrs. Himani Sharma",
          "Ms. Dipti Verma"
        ]
      }
    ]
  };

  // PDF iframe ref
  const pdfIframeRef = useRef(null);

  // Prevent PDF download/copy
  useEffect(() => {
    const preventContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e) => {
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "p" || e.key === "c")) ||
        (e.altKey && e.key === "PrintScreen")
      ) {
        e.preventDefault();
        return false;
      }
    };

    const preventCopyPaste = (e) => {
      e.preventDefault();
      return false;
    };

    if (pdfIframeRef.current) {
      const iframeDocument = pdfIframeRef.current.contentDocument || pdfIframeRef.current.contentWindow.document;

      iframeDocument.addEventListener("contextmenu", preventContextMenu);
      iframeDocument.addEventListener("keydown", preventKeyboardShortcuts);
      iframeDocument.addEventListener("copy", preventCopyPaste);
      iframeDocument.addEventListener("cut", preventCopyPaste);
      iframeDocument.addEventListener("paste", preventCopyPaste);

      // Disable text selection
      iframeDocument.body.style.userSelect = "none";
      iframeDocument.body.style.webkitUserSelect = "none";
      iframeDocument.body.style.msUserSelect = "none";
      iframeDocument.body.style.mozUserSelect = "none";
    }

    return () => {
      if (pdfIframeRef.current) {
        const iframeDocument = pdfIframeRef.current.contentDocument || pdfIframeRef.current.contentWindow.document;

        iframeDocument.removeEventListener("contextmenu", preventContextMenu);
        iframeDocument.removeEventListener("keydown", preventKeyboardShortcuts);
        iframeDocument.removeEventListener("copy", preventCopyPaste);
        iframeDocument.removeEventListener("cut", preventCopyPaste);
        iframeDocument.removeEventListener("paste", preventCopyPaste);
      }
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>House System - G D Goenka Public School, Aligarh</title>
        <meta name="description" content="Discover the House System at GD Goenka Public School Aligarh - fostering community, competition and excellence through four distinct houses." />
      </Helmet>
      
      <div className="house-system-page">
        {/* Banner Section */}
        <section className="house-banner">
          <div className="banner-background">
            <div className="banner-overlay">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="banner-content"
              >
                <h1 className="banner-title">The House System</h1>
                <h2 className="banner-subtitle">Building Community and Excellence</h2>
                <div className="banner-decoration">
                  <div className="banner-circle"></div>
                  <div className="banner-circle"></div>
                  <div className="banner-circle"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="introduction-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="intro-content"
            >
              <p>
                At G D Goenka Public School, Aligarh, the House System is central to our school life, 
                fostering a powerful environment of community, friendly competition, and collaboration 
                across all grade levels.
              </p>
              <p>
                When a child joins our school, they are immediately placed into one of our four distinct Houses. 
                This association is more than just a name; it's an identity that encourages students to develop 
                a strong sense of belonging, where every student takes pride in their House, cultivating loyalty 
                and powerful team spirit.
              </p>
              <p>
                Furthermore, the Houses create a smaller, more intimate group setting, providing excellent 
                opportunities to forge lasting relationships and build strong bonds with peers and teachers.
              </p>
              <p>
                Crucially, the House System is the primary platform for a wide range of co-curricular and 
                inter-House activities. Through these events, students gain invaluable experience in leadership, 
                strategy, teamwork, and healthy rivalry, pushing them to hone comprehensive skills and achieve 
                holistic development and excellence.
              </p>
              <div className="houses-highlight">
                <h3>Our Four Houses</h3>
                <p>Each house is proudly named after an iconic Indian personality and distinguished by its unique color</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Houses Grid Section with Images */}
        <section className="houses-grid-section">
          <div className="container">
            <div className="houses-grid">
              {houses.map((house, index) => (
                <motion.div
                  key={house.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="house-card"
                >
                  <div className="house-image-container">
                    <img 
                      src={house.image} 
                      alt={`${house.name} - ${house.tagline}`}
                      className="house-image"
                    />
                    <div 
                      className="house-color-overlay"
                      style={{ backgroundColor: house.color }}
                    ></div>
                  </div>
                  <div className="house-header">
                    <div 
                      className="house-color-strip"
                      style={{ backgroundColor: house.color }}
                    ></div>
                    <div className="house-title-section">
                      <h3>{house.name}</h3>
                      <p className="house-tagline">{house.tagline}</p>
                    </div>
                  </div>
                  <div className="house-content">
                    {house.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="house-footer">
                    <div 
                      className="color-indicator"
                      style={{ backgroundColor: house.color }}
                    ></div>
                    <span className="house-symbol">
                      {house.name.includes("Vivekanand") && "⚡"}
                      {house.name.includes("Radhakrishnan") && "🌟"}
                      {house.name.includes("Tagore") && "🎨"}
                      {house.name.includes("Teresa") && "💙"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CCA Committee Structure Section */}
        <section className="cca-committee-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="cca-header"
            >
              <h3 className="cca-title">CCA Committee Structure 2025-26</h3>
              <p className="cca-subtitle">The team that manages and coordinates all house activities and competitions</p>
            </motion.div>

            <div className="committee-structure">
              {/* Principal & CCA Coordinator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="committee-top"
              >
                <div className="principal-card">
                  <div className="role-badge principal-badge">Principal</div>
                  <p className="role-name">{ccaCommittee.principal}</p>
                </div>
                
                <div className="coordinator-card">
                  <div className="role-badge coordinator-badge">CCA Coordinator</div>
                  <p className="role-name">{ccaCommittee.ccaCoordinator}</p>
                </div>

                <div className="vice-principal-card">
                  <div className="role-badge vice-principal-badge">Vice Principal</div>
                  <p className="role-name">{ccaCommittee.vicePrincipal}</p>
                </div>
              </motion.div>

              {/* Houses Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="committee-houses-grid"
              >
                {ccaCommittee.houses.map((house, index) => (
                  <div key={index} className="committee-house-card">
                    <div className="committee-house-header">
                      <h4 className="committee-house-name">{house.name}</h4>
                    </div>
                    <div className="committee-house-content">
                      <div className="house-incharge">
                        <span className="incharge-label">
                          {house.houseMistress ? "House Mistress" : "House Master"}
                        </span>
                        <p className="incharge-name">
                          {house.houseMistress || house.houseMaster}
                        </p>
                      </div>
                      
                      <div className="house-members">
                        <span className="members-label">Members:</span>
                        {house.members.map((member, idx) => (
                          <p key={idx} className="member-name">{member}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Co-Scholastic Activities Members */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="co-scholastic-section"
              >
                <div className="co-scholastic-header">
                  <h4 className="co-scholastic-title">Co-Scholastic Activities Members</h4>
                </div>
                <div className="co-scholastic-members">
                  {ccaCommittee.coScholasticMembers.map((member, index) => (
                    <div key={index} className="co-scholastic-member">
                      <p className="member-text">{member}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PDF Document Section */}
        <section className="pdf-document-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pdf-header"
            >
              <h3 className="pdf-title">Official CCA Committee Document</h3>
              <p className="pdf-subtitle">View the complete official committee structure and details</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pdf-container"
            >
              <div className="pdf-wrapper">
                <iframe
                  ref={pdfIframeRef}
                  src={`${ccaCommitteePdf}#toolbar=0&navpanes=0&view=FitH`}
                  title="CCA Committee 2025-26 PDF"
                  className="pdf-iframe"
                  frameBorder="0"
                  style={{
                    pointerEvents: "auto",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                  }}
                ></iframe>
                <div className="pdf-overlay" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="values-content"
            >
              <h3>Why the House System Matters</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">👥</div>
                  <h4>Community Building</h4>
                  <p>Creates strong bonds and lasting relationships among students across different grades</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🏆</div>
                  <h4>Healthy Competition</h4>
                  <p>Fosters spirit of friendly rivalry and encourages students to excel in various activities</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌟</div>
                  <h4>Leadership Development</h4>
                  <p>Provides platforms for students to develop and demonstrate leadership qualities</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h4>Team Spirit</h4>
                  <p>Cultivates loyalty, cooperation and collective achievement among house members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HouseSystem;