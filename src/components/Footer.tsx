import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-12 bg-[#222] text-gray-100 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Left Column: Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 text-blue-500 opacity-80" />
                <span className="text-sm">248-625-5911</span>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <MapPinIcon className="h-5 w-5 text-green-500 opacity-80" />
                <address className="not-italic text-sm">
                  6577 Dixie Hwy, Clarkston, MI 48346
                </address>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <ClockIcon className="h-5 w-5 text-purple-500 opacity-80" />
                <span className="text-sm">
                  Mon–Fri: 8 am – 5 pm, Sat: 8 am – 12 pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Divider and Social */}
        <div className="hidden md:block text-center">
          <div className="h-24 w-px bg-gray-700 mx-auto mb-6" />
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
            Connect
          </h3>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.facebook.com/clarkstonglass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:clarkstonglass@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:-translate-y-1"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Right Column: Logo & Copyright */}
        <div className="text-center md:text-right space-y-4">
          <Link
            href="/"
            className="inline-block opacity-90 hover:opacity-100 transition-opacity"
          >
            <div className="inline-block">
              <Image
                src="/Clarkston-Glass-logo.png"
                alt="Clarkston Glass company logo"
                width={100}
                height={57}
                className="h-auto w-24"
              />
            </div>
          </Link>
          <p className="text-sm">
            © {currentYear} Clarkston Glass. All rights reserved.
          </p>
          <div className="text-xs italic">
            Serving Southeast Michigan for 30+ years
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
