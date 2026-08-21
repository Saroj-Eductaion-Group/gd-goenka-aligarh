import React from 'react';
import FeesStructurePdf from '../assets/Fee-Structure-GDG.pdf';

const FeeStructure = () => {
  document.title = 'Fee Structure 2026-27 - GDGPS Aligarh';
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <iframe
        src={`${FeesStructurePdf}#toolbar=0`}
        title="Fees Structure Pdf"
        className="w-full h-full"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default FeeStructure;
