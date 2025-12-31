import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Users, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Award,
      title: 'Chartered Accountant',
      description: 'M.Com with extensive expertise in finance, taxation, and company law',
    },
    {
      icon: TrendingUp,
      title: 'Financial Leadership',
      description: 'Led ₹30,000+ Cr enterprise structures and raised ₹10,000 Cr in equity',
    },
    {
      icon: Users,
      title: 'Board Advisor',
      description: 'Current board member at VVF Ltd. and Independent Director at IRB Group',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Expert in forex hedging, treasury optimization, and financial governance',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
          >
            About Me
          </motion.span>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 font-['Poppins']">
            Driving Financial
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seasoned financial leader with deep expertise across infrastructure, real estate, and manufacturing sectors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 backdrop-blur-xl rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 shadow-2xl">
                <img
                  src="./images/JS2.webp"
                  alt="CA Jitendra Sharma"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div class="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center"><span class="text-6xl font-bold text-primary">JS</span></div>';
                  }}
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-2xl"
                >
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </motion.div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-primary/20 rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              A distinguished <strong className="text-primary">Chartered Accountant</strong> and <strong className="text-primary">Board Advisor</strong> with over 25 years of exemplary leadership experience across Corporate Finance, Treasury & Banking, Project Funding, Forex Risk Management, and Strategic Financial Management.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-12"
            >
              Having worked at senior leadership levels with India's most respected organizations including <strong className="text-primary">IRB Infrastructure, Tata Housing, CEAT Tyres, VVF Ltd., Clariant Chemicals, and SuperMax Personal Care</strong>, I have successfully handled large-scale infrastructure financing, corporate treasury operations, multi-currency forex exposure, banking consortiums, and complex funding structures.
            </motion.p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <item.icon className="text-primary" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Current Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Current Leadership Roles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { role: 'Founder & Director', org: 'GrowthNEXT Consultants' },
                { role: 'Partner', org: 'JB & Company' },
                { role: 'Board Member', org: 'VVF Ltd.' },
                { role: 'Independent Director', org: 'Select Corporates' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <div className="text-primary font-semibold">{item.role}</div>
                    <div className="text-gray-600 text-sm">{item.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
