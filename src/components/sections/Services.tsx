import React from "react";
import Image from "next/image";

export const Services: React.FC = () => {
  const services = [
    {
      title: "Cataract Surgery",
      description:
        "Advanced phacoemulsification with premium intraocular lens implantation for clearer vision and reduced dependency on glasses.",
      icon: "/images/cataract.svg",
      image: "/images/ketan-surgery.jpg",
      imageAlt: "Dr. Ketan performing cataract surgery",
    },
    {
      title: "Phacosurgery",
      description:
        "Specialized surgical procedures using state-of-the-art phacoemulsification technology for precise and effective treatment.",
      icon: "/images/phaco.svg",
      image: "/images/reena-surgery.jpg",
      imageAlt: "Dr. Reena performing phacosurgery",
    },
    {
      title: "Comprehensive Eye Checkup",
      description:
        "Complete evaluation of eye health including visual acuity, refraction, intraocular pressure, and retinal examination.",
      icon: "/images/checkup.svg",
      image: "/images/machine.png",
      imageAlt: "Advanced ophthalmic examination machine",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-r via-green-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="text-white relative z-10">Our Services</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-xl -z-10 transform -translate-y-1/4 scale-150"></div>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          With over{" "}
          <span className="font-medium text-red-400">
            25 years of experience
          </span>
          , our doctors provide exceptional eye care services using the latest
          techniques and technologies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-full overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 card-hover"
            >
              {/* Service Image */}
              <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom fade so the image blends into the card */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-gray-950 pointer-events-none"></div>
              </div>

              {/* Card Content */}
              <div className="relative px-3 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6">
                {/* Icon overlapping the image edge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto -mt-7 sm:-mt-8 mb-4 bg-gradient-to-r from-red-800 to-red-950 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-950">
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                    />
                  ) : (
                    <svg
                      className="w-8 h-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-center bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-16 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 rounded-lg shadow-lg p-4 sm:p-8">
          <h3 className="text-2xl font-bold text-center text-white mb-6 tracking-tight">
            Additional Eye Care Services
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-full overflow-hidden">
            {[
              "Glaucoma Management",
              "Diabetic Eye Care",
              "Refractive Error Correction",
              "Dry Eye Treatment",
              "Corneal Disorders",
              "Pediatric Eye Care",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900 to-gray-950 hover:from-gray-900 hover:to-violet-800 rounded-lg shadow p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-800 to-red-950 flex items-center justify-center text-white mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-center bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent font-medium">
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-gray-300 mb-4 sm:mb-5 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Our doctors are committed to providing{" "}
              <span className="font-medium text-amber-400">
                personalized care
              </span>{" "}
              for all your eye health needs with the highest standards of
              medical excellence.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 hover:from-lime-800 hover:via-lime-700 hover:to-lime-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-2 border border-black"
            >
              Schedule an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
