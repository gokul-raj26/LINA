import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Forward Ltd.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'LINA Leathers has been our trusted partner for premium leather goods. Their attention to detail and consistent quality has helped us maintain our reputation in the luxury market.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Urban Style Co.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'Working with LINA Leathers for over 3 years now. They understand our design requirements perfectly and always deliver on time. Exceptional craftsmanship!',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      company: 'Elite Accessories Inc.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'The quality of leather products from LINA is unmatched. Our customers love the durability and premium feel of every piece. Highly recommended for any fashion business.',
      rating: 5,
    },
    {
      name: 'David Park',
      company: 'Global Fashion House',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'LINA Leathers combines traditional craftsmanship with modern designs perfectly. They have become an integral part of our supply chain and we trust them completely.',
      rating: 5,
    },
    {
      name: 'Sophia Williams',
      company: 'Luxury Goods International',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'Outstanding service and product quality. LINA Leathers understands the luxury market demands and consistently exceeds our expectations with every order.',
      rating: 5,
    },
  ];

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
            What Our <span className="text-orange-500">Clients</span> Say
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't just take our word for it. Hear from the brands and businesses 
            who trust LINA Leathers for their premium leather needs.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-orange-500">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stats Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-orange-600/20 to-amber-500/20 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">
                Trusted by <span className="text-orange-500">Industry Leaders</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
                  <p className="text-slate-300">Satisfied Clients</p>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                  <p className="text-slate-300">Countries Served</p>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                  <p className="text-slate-300">Years Experience</p>
                </motion.div>
              </div>

              <motion.p
                className="text-xl text-slate-300 mt-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                From boutique fashion houses to international retailers, our commitment 
                to quality has made us the preferred choice for premium leather goods worldwide.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;