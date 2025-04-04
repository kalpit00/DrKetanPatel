import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <section id="header" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Eye care background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Dr. Ketan Patel & Dr. Reena Patel
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
          M.S Ophthalmic Surgeons
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          25 years of experience in Phacosurgery and Cataract Operations
        </p>
        <button 
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white text-blue-800 hover:bg-blue-100 font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default Header;
