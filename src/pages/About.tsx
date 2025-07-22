import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    {
      year: '2008',
      title: 'Humble Beginnings',
      description: 'Started as a small leather workshop in Mumbai with a vision for quality craftsmanship.',
    },
    {
      year: '2012',
      title: 'First Export',
      description: 'Expanded internationally, delivering our first export order to European markets.',
    },
    {
      year: '2016',
      title: 'Digital Presence',
      description: 'Launched online presence and partnerships with major e-commerce platforms.',
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Achieved worldwide distribution across 25+ countries with 100+ retail partners.',
    },
    {
      year: '2024',
      title: 'Innovation Focus',
      description: 'Continuing to innovate with sustainable practices and cutting-edge designs.',
    },
  ];

  const clients = [
    'Fashion Forward Ltd.',
    'Urban Style Co.',
    'Premium Leather Exports',
    'Global Fashion House',
    'Elite Accessories Inc.',
    'Luxury Goods International',
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
            Our <span className="text-orange-500">Story</span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From a small workshop to a global brand, LINA Leathers has been crafting 
            exceptional leather goods that combine traditional techniques with modern aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Journey of <span className="text-orange-500">Excellence</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-600 to-amber-500 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-12`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 max-w-md">
                    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3 text-amber-400">{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full relative z-10 my-4 md:my-0" />

                  <div className="flex-1 max-w-md hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our <span className="text-orange-500">Partners</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by leading fashion brands and retailers across the globe, 
              we've built lasting partnerships based on quality and reliability.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-orange-500">{client}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-orange-600/20 to-amber-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                Serving 100+ Clients Worldwide
              </h3>
              <p className="text-slate-300 text-lg">
                From India to international markets, our quality leather goods reach customers 
                across continents, building trust one product at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;