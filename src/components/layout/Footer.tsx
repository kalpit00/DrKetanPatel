import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black via-green-900 to-black text-white py-8 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white tracking-wide font-light">
          © {currentYear} <span className="font-medium">Dr. Ketan Patel & Dr. Reena Patel</span> | Mona Eye Hospital
        </p>
        <p className="text-white text-sm mt-1">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
