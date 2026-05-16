import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const STREET_VIEW_URL =
  "https://www.google.com/maps/@22.3021127,73.1979235,3a,75y,146.86h,94.87t/data=!3m6!1e1!3m4!1s8jtqaHXDEWglXhn_qGfVbQ!2e0!7i13312!8i6656?entry=ttu";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1741603396644!2d73.19345!3d22.2988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab28a2e1ad%3A0x3a0b9c5c2d7a2a2a!2sMona%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin";

// Combined map + street view pane with a toggle. The map is loaded as a Google
// Maps iframe, while the street view is a static screenshot (linking out to the
// live Google Street View) since embedding interactive Street View requires an
// API key.
const LocationView = () => {
  const [view, setView] = useState<"map" | "street">("map");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <div
          role="tablist"
          aria-label="Location view"
          className="inline-flex rounded-md bg-slate-900/70 p-1 shadow-inner border border-white/10"
        >
          <button
            type="button"
            role="tab"
            aria-selected={view === "street"}
            onClick={() => setView("street")}
            className={`px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded-md transition-colors cursor-pointer ${
              view === "street"
                ? "bg-gradient-to-r from-amber-800 to-amber-700 text-white shadow"
                : "text-blue-200 hover:text-white"
            }`}
          >
            Street View
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "map"}
            onClick={() => setView("map")}
            className={`px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded-md transition-colors cursor-pointer ${
              view === "map"
                ? "bg-gradient-to-r from-amber-800 to-amber-700 text-white shadow"
                : "text-blue-200 hover:text-white"
            }`}
          >
            Map View
          </button>
        </div>
      </div>

      <div className="relative h-[300px] sm:h-[450px] md:h-[550px] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        {!isMounted ? (
          <div className="h-full w-full bg-gray-200 animate-pulse"></div>
        ) : view === "map" ? (
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <a
            href={STREET_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-full w-full group"
            aria-label="Open street view in Google Maps"
          >
            <Image
              src="/images/street.png"
              alt="Hospital Street View - Mona Eye Hospital"
              fill
              sizes="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs sm:text-sm px-3 py-1.5 rounded-md flex items-center gap-1.5 group-hover:bg-black/90 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Google Maps
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

const hospitalSpaces = [
  {
    src: "/images/waiting-room.png",
    title: "Waiting Room",
    alt: "Hospital Waiting Room",
  },
  {
    src: "/images/OR.png",
    title: "Operating Room",
    alt: "Operating Room",
  },
  {
    src: "/images/office.png",
    title: "Office",
    alt: "Doctor's Office",
  },
  {
    src: "/images/entrance.jpg",
    title: "Entrance",
    alt: "Hospital Entrance with Timings",
  },
];

export const Contact: React.FC = () => {
  const [{ name, email, phone, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Using the same service ID, template ID, and user ID as in the original code
    emailjs
      .sendForm(
        "drketanpatel",
        "template_v8mbcli",
        e.currentTarget,
        "SlKaoEFS8KI6mSnkU",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          clearState();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r via-green-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="text-white relative z-10">Contact Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-xl -z-10 transform -translate-y-1/4 scale-150"></div>
        </h2>

        {/* Phone Numbers Card */}
        <div className="bg-gradient-to-r from-gray-950 via-indigo-900 to-gray-950 rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Call Us Directly
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <a
                href="tel:+919824030154"
                className="text-white font-medium flex items-center justify-center hover:text-red-300 transition-colors underline underline-offset-4"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                9824030154
              </a>
            </div>
            <div className="text-center">
              <a
                href="tel:+919898485037"
                className="text-white font-medium flex items-center justify-center hover:text-red-300 transition-colors underline underline-offset-4"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                9898485037
              </a>
            </div>
            <div className="text-center">
              <a
                href="tel:+912652412748"
                className="text-white font-medium flex items-center justify-center hover:text-red-300 transition-colors underline underline-offset-4"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                02652412748
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 rounded-lg shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-black bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-900 resize-none bg-gradient-to-r"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-blue-800 bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-900 resize-none bg-gradient-to-r "
                placeholder="Your Email"
                required
                onChange={handleChange}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-blue-800 bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-900 resize-none bg-gradient-to-r"
                placeholder="Your Phone Number"
                required
                onChange={handleChange}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-blue-800 bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-900 resize-none bg-gradient-to-r"
                placeholder="Your Message"
                required
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 hover:from-lime-700 hover:via-lime-600 hover:to-lime-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 disabled:opacity-70 cursor-pointer shadow-md"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="mt-4 text-teal-400 font-medium">
                  Email sent successfully! We&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-400 font-medium">
                  Failed to send email. Please try again or contact us directly.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Location Section */}
        <div id="location" className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Our Location
          </h3>

          <div className="flex flex-col gap-8 sm:gap-10 mb-8 sm:mb-16 max-w-full overflow-hidden">
            {/* Hospital Spaces Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {hospitalSpaces.map((space) => (
                <div
                  key={space.title}
                  className="group bg-gradient-to-br from-gray-950 via-purple-950/40 to-gray-950 rounded-lg overflow-hidden shadow-lg border border-white/5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-center pt-4 pb-1 sm:pt-4 sm:pb-2 text-sm sm:text-base font-medium leading-none bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent">
                    {space.title}
                  </p>
                  <div className="relative aspect-[3/4] bg-gray-950 overflow-hidden">
                    <Image
                      src={space.src}
                      alt={space.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Map + Street View Toggle */}
            <LocationView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
