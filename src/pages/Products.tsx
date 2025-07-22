import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const products = [
    {
      name: 'Premium Leather Handbags',
      description: 'Elegant handcrafted handbags for the modern woman',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      amazonLink: 'https://amazon.in/leather-handbags',
      flipkartLink: null,
      category: 'Bags',
    },
    {
      name: 'Classic Leather Jackets',
      description: 'Timeless leather jackets with contemporary styling',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600',
      amazonLink: null,
      flipkartLink: 'https://flipkart.com/leather-jackets',
      category: 'Jackets',
    },
    {
      name: 'Genuine Leather Belts',
      description: 'Sophisticated belts crafted from finest leather',
      image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600',
      amazonLink: 'https://amazon.in/leather-belts',
      flipkartLink: null,
      category: 'Belts',
    },
    {
      name: 'Designer Sling Bags',
      description: 'Modern sling bags for urban lifestyle',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      amazonLink: null,
      flipkartLink: 'https://flipkart.com/sling-bags',
      category: 'Sling Bags',
    },
    {
      name: 'Executive Briefcases',
      description: 'Professional leather briefcases for business',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      amazonLink: 'https://amazon.in/leather-briefcases',
      flipkartLink: null,
      category: 'Bags',
    },
    {
      name: 'Luxury Wallets',
      description: 'Premium leather wallets with exquisite craftsmanship',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      amazonLink: 'https://amazon.in/leather-wallets',
      flipkartLink: 'https://flipkart.com/leather-wallets',
      category: 'Accessories',
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
            Our <span className="text-orange-500">Products</span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our curated collection of premium leather goods, 
            each piece crafted with precision and available through trusted retail partners.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="group bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-500">
                    {product.name}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Purchase Links */}
                  <div className="flex flex-col gap-3">
                    {product.amazonLink && (
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        View on Amazon
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    )}
                    
                    {product.flipkartLink && (
                      <a
                        href={product.flipkartLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 py-3 px-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                      >
                        Buy on Flipkart
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600/10 to-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Custom Manufacturing Services
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Looking for custom leather goods for your brand? We offer complete manufacturing 
              services with your specifications, branding, and quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Request Quote
              </a>
              <a
                href="/about"
                className="border border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;