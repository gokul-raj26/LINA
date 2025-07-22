import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-serif text-amber-400 mb-4">LINA Leathers</h3>
            <p className="text-sm leading-relaxed">
              Crafting premium leather goods with timeless elegance. From artisan hands 
              to global fashion, we deliver quality that speaks for itself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-orange-500" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-orange-500" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-orange-500" />
                <span className="text-sm">info@linaleathers.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <div className="space-y-2">
              <a href="/products" className="block text-sm hover:text-orange-500 transition-colors">Products</a>
              <a href="/about" className="block text-sm hover:text-orange-500 transition-colors">About Us</a>
              <a href="/contact" className="block text-sm hover:text-orange-500 transition-colors">Contact</a>
              <a href="#" className="block text-sm hover:text-orange-500 transition-colors">Privacy Policy</a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
          <p className="text-sm">
            © 2024 LINA Leathers. All rights reserved. | Crafted with passion for leather excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;