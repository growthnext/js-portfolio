import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const skillCategories = [
    {
      title: 'Corporate Finance & Strategy',
      image: './images/exp/ec1.webp',
      skills: [
        'Corporate Finance & Strategic Financial Leadership',
        'Treasury, Banking & Fund Flow Optimization',
        'Project Finance, NCDs & Commercial Papers',
        'Working Capital & Structured Funding',
      ],
    },
    {
      title: 'Banking & Consortiums',
      image: './images/exp/ec2.webp',
      skills: [
        'Large Banking Consortium Management (20+ Banks)',
        'Nationalized, Private & Foreign Bank Relations',
        'NBFC Funding & Strategic Partnerships',
        'Credit Rating & Limit Enhancement',
      ],
    },
    {
      title: 'Treasury & Risk Management',
      image: './images/exp/ec3.webp',
      skills: [
        'Forex Risk Management & Hedging Strategies',
        'Multi-currency Exposure Management',
        'Forward Contracts, Options & Natural Hedging',
        'Cash Flow Optimization & Liquidity Management',
      ],
    },
    {
      title: 'Governance & Compliance',
      image: './images/exp/ec4.webp',
      skills: [
        'Cash Flow, MIS, Internal Controls & Compliance',
        'Board-level Financial Governance & Advisory',
        'Financial Reporting, Audit & Taxation',
        'Statutory Compliance & Regulatory Frameworks',
      ],
    },
    {
      title: 'Capital & Fund Raising',
      image: './images/exp/ec5.webp',
      skills: [
        'Equity Fund Raising (Raised ₹10,000 Cr+)',
        'Debt Structuring (Managed ₹12,000 Cr+)',
        'ECB, NCDs & Commercial Paper Issuance',
        'Investor Relations & Reporting',
      ],
    },
    {
      title: 'Strategic Advisory',
      image: './images/exp/ec6.webp',
      skills: [
        'CFO Advisory Services for MSMEs & Corporates',
        'Financial Discipline & Cost Optimization',
        'Growth Strategy & Business Transformation',
        'Mergers, Acquisitions & Restructuring',
      ],
    },
  ];


  const industries = [
    { name: 'Infrastructure & Road Assets', image: './images/ind/i1.webp' },
    { name: 'Real Estate & Housing', image: './images/ind/i2.webp' },
    { name: 'Manufacturing', image: './images/ind/i3.webp' },
    { name: 'Logistics', image: './images/ind/i4.webp' },
    { name: 'Warehousing', image: './images/ind/i5.webp' },
    { name: 'Promoter Led Business', image: './images/ind/i6.webp' },
  ];


  // Client logos array
  const clientLogos = Array.from({ length: 14 }, (_, i) => `./images/clients/c${i + 1}.webp`);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };


  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
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
            Core Competencies
          </motion.span>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 font-['Poppins']">
            Expertise &
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial leadership across all facets of corporate finance, treasury, and strategic management
          </p>
        </motion.div>


        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image at Top Middle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-center mb-6"
              >
                <div className="w-40 h-24 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>


              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-6 text-center group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>


              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.08 + idx * 0.04 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"
                    />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>


        {/* Industry Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-primary text-center mb-12">
            Industry <span className="text-gray-700">Experience</span>
          </h3>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.08, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with aspect ratio similar to expertise section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center mb-4"
                >
                  <div className="w-40 h-24 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="text-primary font-semibold">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Clients I Have Served Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-4xl font-bold text-primary text-center mb-12">
            Clients <span className="text-gray-700">I Have Served</span>
          </h3>


          {/* Infinite Scrolling Logo Container */}
          <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-3xl py-12 border border-gray-200">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1680], // 14 logos * 120px width = 1680px (adjust based on actual logo width + gap)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Skills;
