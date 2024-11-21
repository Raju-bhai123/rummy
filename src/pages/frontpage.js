import React from 'react';
import Logo from './../img/logo.jpg';

// Reusable InfoCard Component
const InfoCard = ({ title, version }) => (
  <div className="flex flex-col sm:flex-row justify-between w-full space-y-4 sm:space-y-0 mb-5 sm:space-x-4 px-4">
    {/* Logo */}
    <div className="flex justify-center sm:justify-start flex-shrink-0">
      <img src={Logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
    </div>

    {/* Information Section */}
    <div className="flex-1 text-center sm:text-left">
      <div className="text-xl font-semibold text-gray-900">{title}</div>
      <div className="flex justify-center sm:justify-start mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-orange-600">
          <path fill="#ed5807" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5-12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
        <span className="ml-3 text-sm">{version} +Android</span>
      </div>
    </div>
  </div>
);

function InfoSection() {
  const versions = [
    { title: "TeenPattiMaster", version: "06.08.01" },
    { title: "TeenPatti Master pro", version: "09.05.09" },
    { title: "TeenPatti Master Latest Version", version: "09.08.01" },
    { title: "TeenPatti Master Old Version", version: "04.08.01" },
    { title: "TeenPatti Master Gold App", version: "10.08.01" },
    { title: "TeenPatti Master Club App", version: "12.01.01" },
    { title: "TeenPatti Master Rummy", version: "06.05.01" },
    { title: "TeenPatti Master 2021", version: "06.01.01" },
    { title: "TeenPatti Master Dragon Tiger", version: "Not Available" }
  ];

  return (
    <>
      {versions.map((item, index) => (
        <a key={index} href="https://www.earntp.com/m/0pfw8k" target="_blank" rel="noopener noreferrer">
          <InfoCard title={item.title} version={item.version} />
        </a>
      ))}
    </>
  );
}

export default InfoSection;
