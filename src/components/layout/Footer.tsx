import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-950 light:from-slate-50 light:via-emerald-100 light:to-slate-50 light:border-t light:border-slate-200 text-white light:text-slate-700 py-8 shadow-inner transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white light:text-slate-700 tracking-wide font-light">
          © {currentYear}{" "}
          <span className="font-medium light:text-slate-900">Dr. Ketan Patel & Dr. Reena Patel</span>{" "}
          | Mona Eye Hospital
        </p>
        <p className="text-white light:text-slate-500 text-sm mt-1">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
