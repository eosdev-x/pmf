import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = 2024;

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Mission Statement */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Panama Mission Foundation</h3>
            <p className="text-gray-600 mb-6">
              Bringing hope and the word of God to Panama's indigenous communities through faith,
              education, and community support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/panamamission.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/vicente.pmf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@vinnybp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
                            <a
                href="https://github.com/eosdev-x/pmf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-600 hover:text-green-600 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>Panama City, Panama</li>
              <li>vince@panamamission.org</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            {currentYear} Panama Mission Foundation. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Panama Mission Foundation is a 501(c)(3) tax-exempt organization
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">Site by:{' '}  
              <a
                href="https://eosdev.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                eosdev
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
