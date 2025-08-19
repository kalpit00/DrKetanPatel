import { useState, useEffect, useCallback } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// Client-side only component for the Google Maps iframe
const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-full w-full bg-gray-200 animate-pulse"></div>;
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1741603396644!2d73.19345!3d22.2988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab28a2e1ad%3A0x3a0b9c5c2d7a2a2a!2sMona%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

// Simple carousel component
interface CarouselImage {
  src: string;
  alt: string;
  style?: {
    objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
    objectPosition: string;
  };
}

const SimpleCarousel = ({ images }: { images: CarouselImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  return (
    <div className="relative h-[250px] sm:h-96 bg-gray-900 rounded-lg overflow-hidden">
      {/* Current image */}
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          sizes="100%"
          style={
            images[currentIndex].style || {
              objectFit: "cover",
              objectPosition: "center",
            }
          }
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-r-md hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-l-md hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [{ name, email, phone, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        "SlKaoEFS8KI6mSnkU"
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
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-black via-green-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="text-white relative z-10">Contact Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-xl -z-10 transform -translate-y-1/4 scale-150"></div>
        </h2>

        {/* Phone Numbers Card */}
        <div className="bg-gradient-to-r from-black via-red-900 to-black rounded-lg shadow-lg p-6 sm:p-8 border border-red-800 mb-8">
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
        <div className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 rounded-lg shadow-lg p-6 sm:p-8 border border-blue-800">
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
                className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 hover:from-emerald-950 hover:via-emerald-800 hover:to-emerald-950 text-white font-bold py-3 px-8 rounded-md transition duration-300 disabled:opacity-70 cursor-pointer shadow-md"
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

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-16 max-w-full overflow-hidden">
            {/* Map */}
            <div className="h-[250px] sm:h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <MapComponent />
            </div>

            {/* Hospital Images Carousel */}
            <div>
              <div className="h-[350px] sm:h-96 rounded-lg overflow-hidden shadow-lg">
                <SimpleCarousel
                  images={[
                    {
                      src: "/images/entrance.jpg",
                      alt: "Hospital Entrance with Timings",
                      style: {
                        objectFit: "cover",
                        objectPosition: "top",
                      },
                    },
                    {
                      src: "/images/hospital.jpg",
                      alt: "Hospital Interior",
                      style: {
                        objectFit: "cover",
                        objectPosition: "center",
                      },
                    },
                    {
                      src: "/images/street.png",
                      alt: "Hospital Street View",
                      style: {
                        objectFit: "cover",
                        objectPosition: "center",
                      },
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
