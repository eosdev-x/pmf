import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

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
              Bringing hope and sustainable development to Panama's indigenous communities through faith,
              education, and community support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/panamamission.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/vince.payne.96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Twitter className="h-6 w-6" />
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
              <li>+507 123 4567</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Panama Mission Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;