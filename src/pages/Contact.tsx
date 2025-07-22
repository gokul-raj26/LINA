import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-900 to-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In <span className="text-orange-500">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to discuss your leather goods requirements? We'd love to hear from you 
            and explore how we can bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-serif mb-6 text-orange-500">Send us a Message</h2>
                
                {showConfirmation && (
                  <motion.div
                    className="bg-green-600/20 border border-green-500 text-green-300 p-4 rounded-lg mb-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    Thanks for reaching out – we'll get back within 24 hours!
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-8 rounded-2xl">
                <h2 className="text-2xl font-serif mb-6 text-orange-500">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Address</h3>
                      <p className="text-slate-300">
                        123 Leather Street, Dharavi Industrial Area<br />
                        Mumbai, Maharashtra 400017<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Phone</h3>
                      <p className="text-slate-300">+91 98765 43210</p>
                      <p className="text-slate-300">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <EnvelopeIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Email</h3>
                      <p className="text-slate-300">info@linaleathers.com</p>
                      <p className="text-slate-300">sales@linaleathers.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <ClockIcon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-400 mb-1">Business Hours</h3>
                      <p className="text-slate-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-amber-500/20 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">Why Choose Us?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    15+ years of industry experience
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    100% quality guarantee
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Global shipping & export services
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Custom manufacturing capabilities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    Competitive pricing for bulk orders
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;