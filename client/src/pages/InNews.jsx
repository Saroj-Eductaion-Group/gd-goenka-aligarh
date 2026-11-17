import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import NavigationPages from "./NavigationPages";
import NewsBanner from "../assets/NewsBanner2.avif"; // Banner image import
import "./InNews.css";

const InNews = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [gallery] = useState([
    {
      id: 1,
      title: "Children's Day Sports Meet - Hindustan Coverage",
      image: "/images/Bal-Diwas-Sports-Meet.jpeg",
      caption:
        "Hindustan highlighted the grand Children's Day Sports Meet organized at G.D. Goenka Public School Aligarh. School Principal Dr. Anubhav Lodhi, Chairman Mr. Sunil Singh, and CEO Mr. Yashwendra Singh motivated students towards athletic excellence, fitness, and true sportsmanship.",
    },
    {
      id: 2,
      title: "Bal Diwas & Cultural Celebrations",
      image: "/images/Bal-Diwas-Celebration.jpeg",
      caption:
        "Children's Day was celebrated with great joy and enthusiasm at G.D. Goenka Public School. The event featured colorful cultural presentations, music, and sports competitions with leadership encouraging children's holistic growth and character.",
    },
    {
      id: 3,
      title: "Students' Voice on Outdoor Play & Digital Well-being - Hindustan Samvad",
      image: "/images/Digital-Kaid-Hindustan-Samvad.jpeg",
      caption:
        "In a prominent Hindustan Samvad feature, students of G.D. Goenka Public School Aligarh (Shivi Verma, Nikita Singh, Manikarnika Kaushik, Kandraap, and Aradhya) spoke on children needing freedom from excessive screen time and the essential value of outdoor playgrounds.",
    },
    {
      id: 4,
      title: "Ramayana Enactment & Deepotsav Celebrations",
      image: "/images/Ramayana-Diwali-Celebration.jpeg",
      caption:
        "Students of G.D. Goenka Public School brought the timeless ideals of Maryada Purushottam Shri Ram to life through an elaborate musical enactment during Deepotsav, earning widespread acclaim and news coverage.",
    },
    {
      id: 5,
      title: "Diwali Celebration",
      image: "/images/Diwali-Celebration.jpeg",
      caption:
        "Students and staff celebrated Diwali with vibrant performances and festive decorations.",
    },
    {
      id: 6,
      title: "Health Checkup Camp",
      image: "/images/Health-Checkup-Amar-Ujala.jpeg",
      caption:
        "In collaboration with Amar Ujala, the school hosted a comprehensive health checkup camp where students underwent medical screenings, received personalized wellness advice, and learned the importance of preventive healthcare through interactive sessions and expert talks.",
    },
    {
      id: 7,
      title: "Health Checkup",
      image: "/images/Health-Checkup.jpeg",
      caption:
        "Dedicated medical professionals conducted thorough health assessments for all students, focusing on hygiene, nutrition, and early detection. The initiative aimed to instill lifelong habits of self-care and health awareness within the school community.",
    },
    {
      id: 8,
      title: "Mother's Day Celebration",
      image: "/images/Mothers-Day.jpeg",
      caption:
        "A heartwarming celebration honoring mothers featured soulful student performances, handcrafted gifts, and emotional tributes. The event beautifully captured the essence of maternal love, leaving lasting memories for families and staff alike.",
    },
    {
      id: 9,
      title: "Examination Results and Award Distribution Ceremony",
      image: "/images/ATNews.jpeg",
      caption:
        "Academic achievers were honored during the results and award distribution ceremony, recognizing excellence in academics, co-curricular activities, and overall performance.",
    },
    {
      id: 10,
      title: "Jawahar Park Visit",
      image: "/images/Jawahar_Park.jpeg",
      caption:
        "Students of GD Goenka Public School Aligarh visited Jawahar Park as part of an educational excursion, exploring the historical and cultural significance of the park while enjoying a refreshing outdoor learning experience.",
    },
    {
      id: 11,
      title: "Important School Event",
      image: "/images/impotants.jpeg",
      caption:
        "A significant event was organized at GD Goenka Public School Aligarh, bringing together students, teachers, and parents to celebrate milestones and foster a spirit of unity, discipline, and academic excellence within the school community.",
    },
    {
      id: 12,
      title: "Swasth Bharat Abhiyan",
      image: "/images/swasth.jpeg",
      caption:
        "As part of the Swasth Bharat initiative, the school organized awareness activities promoting healthy lifestyle habits among students. The program emphasized balanced nutrition, physical fitness, and mental well-being for a healthier future generation.",
    },
    {
      id: 13,
      title: "Health Checkup Drive",
      image: "/images/Helath_Chekup.jpeg",
      caption:
        "A dedicated health checkup drive was conducted at the school premises where qualified medical professionals examined students and provided personalized health guidance, reinforcing the school's commitment to the overall well-being of every child.",
    },
  ]);

  return (
    <Layout>
      <Helmet>
        <title>In News - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Latest news and updates from GD Goenka Public School Aligarh."
        />
      </Helmet>

      {/* Banner Section */}
      <div className="news-banner">
        <div className="news-banner-overlay">
          <h1 className="news-banner-title">IN NEWS</h1>
          <p className="news-banner-subtitle">
            Latest highlights from GD Goenka Aligarh
          </p>
        </div>
      </div>

      <div className="innews-container">
        {/* Header */}
        <div className="news-header">
          <h1 className="news-title">In News</h1>
          <p className="news-subtitle">
            Glimpses of our achievements and events
          </p>
        </div>

        {/* Navigation Pages */}
        <NavigationPages />

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <span className="gallery-zoom-hint">Click to enlarge</span>
                </div>
                <div className="gallery-caption">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Image Modal */}
      {selectedImage && (
        <div
          className="news-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="news-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="news-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="news-modal-image"
            />
            <div className="news-modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default InNews;