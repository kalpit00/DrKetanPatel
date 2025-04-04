import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-gradient-to-r from-black via-green-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Mona Eye Hospital
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5">
            Dr. Ketan Patel & Dr. Reena Patel
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Veteran M.S Ophthalmic Surgeons with <span className="font-medium text-white">25 years of experience</span> in Phacosurgery and Cataract Operations
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 mb-12 max-w-full overflow-hidden">
          {/* Dr. Ketan Patel */}
          <div className="flex flex-col items-center">
            <div className="mb-4 sm:mb-6 relative w-full max-w-[140px] sm:max-w-[240px] mx-auto h-48 sm:h-72 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/ketan.jpg"
                alt="Dr. Ketan Patel"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Dr. Ketan Patel</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-1">M.S. Ophthalmic Surgeon</p>
            <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-4">25+ Years Experience</p>
            <a href="tel:+919824030154" className="text-white font-medium mb-4 flex items-center justify-center hover:text-red-300 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              9824030154
            </a>
          </div>

          {/* Dr. Reena Patel */}
          <div className="flex flex-col items-center">
            <div className="mb-4 sm:mb-6 relative w-full max-w-[140px] sm:max-w-[240px] mx-auto h-48 sm:h-72 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/reena.jpg"
                alt="Dr. Reena Patel"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Dr. Reena Patel</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-1">M.S. Ophthalmic Surgeon</p>
            <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-4">25+ Years Experience</p>
            <a href="tel:+919898485037" className="text-white font-medium mb-4 flex items-center justify-center hover:text-red-300 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              9898485037
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-4 sm:p-8 mt-8 text-center sm:text-left bg-gradient-to-r from-black via-red-900 to-black rounded-lg border border-red-800 shadow-lg">
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Dr. Ketan Patel and Dr. Reena Patel are Veteran M.S Ophthalmic Surgeons with <span className="font-medium text-white">25 years of experience</span> in Phacosurgery and Cataract Operations. Their dedication to providing exceptional eye care has made them trusted specialists in Vadodara.
          </p>
        </div>

        <div className="bg-gradient-to-r from-black via-blue-900 to-black rounded-lg shadow-lg p-8 mt-4 border border-blue-800">
          <h3
            className="text-2xl font-bold text-white mb-6 text-center"
            id="contact-info"
          >
            Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-full overflow-hidden">
            {/* Address */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">Address</h4>
              <a
                href="https://maps.app.goo.gl/P8FxNfQNDn1uttgi9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300 underline decoration-gray-600 hover:decoration-gray-400"
              >
                C/O Mona Eye Hospital, 1st Floor Ankshira Apartment, Kharivav Road, Raopura, Vadodara - 390001
              </a>
              <div className="mt-2">
                <a
                  href="https://www.google.com/maps/@22.3021127,73.1979235,3a,75y,146.86h,94.87t/data=!3m6!1e1!3m4!1s8jtqaHXDEWglXhn_qGfVbQ!2e0!7i13312!8i6656?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  View Street View
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">Timings</h4>
              <p className="text-gray-300">
                <strong>Mon - Sat:</strong>
                <br />
                12:30 pm - 2:30 pm
                <br />
                5:30 pm - 7:00 pm
                <br />
                <strong>Sun:</strong> Closed
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">Phone Numbers</h4>
              <div className="text-white">
                <p className="mb-2">
                  <strong>Dr. Ketan Patel:</strong> 
                  <a href="tel:+919824030154" className="ml-1 hover:text-red-300 transition-colors">
                    9824030154
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Dr. Reena Patel:</strong> 
                  <a href="tel:+919898485037" className="ml-1 hover:text-red-300 transition-colors">
                    9898485037
                  </a>
                </p>
                <p>
                  <strong>Mona Eye Hospital:</strong> 
                  <a href="tel:+912652412748" className="ml-1 hover:text-red-300 transition-colors">
                    02652412748
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
