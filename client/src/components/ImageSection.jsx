import React from "react";
import mainImage from "../assets/admission_banner.png";
import "../css/ImageSection.css";
import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <div className="imageSection w-full flex flex-col bg-gradient-to-r  from-blue-50  to-blue-100 ">
      <div className="img  w-full">
        <Link
          to={`https://forms.gdgoenka.com/regisration-form/gdgaligarh/`}
        >
          <img
            className="w-full object-contain lg:rounded-b-[250px] lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:rounded-b-none aspect-[1600/748]"
            src={mainImage}
            alt="Gd-Goenka-School"
            width={1600}
            height={748}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
