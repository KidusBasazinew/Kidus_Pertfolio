"use client";
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "admission", title: "Admission" },
    { id: "why", title: "Why Us" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#home" className="text-2xl font-bold text-indigo-600">
              Fanadesh
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`${
                    activeSection === section.id
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                  } px-3 py-2 transition-colors`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {section.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Way to Fund Your Study Abroad
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/hero.png"
              alt="Study Abroad"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/about.png"
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our School
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Admission Open
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Apply Now
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="/images/admission.png"
              alt="Admission"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/why.png"
              alt="Why Choose Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
            <div className="h-96 bg-indigo-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/contact.jpg"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Fanadesh. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-indigo-400 transition">
              <img src="/images/fb.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <img
                src="/images/twitter.png"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Designed with ❤️ by Fanadesh Team
          </p>
        </div>
      </footer>
    </div>
  );
}
