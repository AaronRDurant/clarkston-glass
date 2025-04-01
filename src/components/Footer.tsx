import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full px-6 py-12 border-t border-gray-200 dark:border-gray-700 transition-all duration-300"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Left Column: Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 text-blue-500 opacity-80" />
                <a
                  href="tel:+12486255911"
                  className="text-lg font-medium text-[var(--text)] transition-all duration-300 md:hidden"
                >
                  248-625-5911
                </a>
                <span className="text-lg font-medium text-[var(--text)] hidden md:inline-block transition-all duration-300">
                  248-625-5911
                </span>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <MapPinIcon className="h-5 w-5 text-green-500 opacity-80" />
                <address className="not-italic text-sm text-[var(--text)] transition-all duration-300">
                  6577 Dixie Hwy, Clarkston, MI 48346
                </address>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <ClockIcon className="h-5 w-5 text-purple-500 opacity-80" />
                <span className="text-sm text-[var(--text)] transition-all duration-300">
                  Mon–Fri: 8 am – 5 pm, Sat: 8 am – 12 pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Vertical Divider and Social Links */}
        <div className="hidden md:block text-center">
          <div className="h-24 w-px bg-gray-200 dark:bg-gray-700 mx-auto mb-6"></div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Connect
            </h3>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.facebook.com/clarkstonglass"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="h-6 w-6"
                  aria-label=" Visit Clarkston Glass on Facebook"
                />
              </Link>
              <Link
                href="mailto:clarkstonglass@gmail.com"
                className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope
                  className="h-6 w-6"
                  aria-label="Email Clarkston Glass"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Branding and Copyright */}
        <div className="text-center md:text-right space-y-4">
          <Link
            href="/"
            className="inline-block opacity-90 hover:opacity-100 transition-opacity"
          >
            <div
              className="p-2 rounded-full inline-block"
              style={{
                backgroundColor: "var(--bg-dark-mode-background)",
              }}
            >
              <Image
                src="/Clarkston-Glass-logo.png"
                alt="Clarkston Glass company logo"
                width={100}
                height={57}
                className="h-auto w-24"
              />
            </div>
          </Link>
          <p className="text-sm text-[var(--text)] transition-all duration-300">
            © {currentYear} Clarkston Glass. All rights reserved.
          </p>
          <div className="text-xs text-[var(--text)] transition-all duration-300 italic">
            Serving Southeast Michigan for 30+ years
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
