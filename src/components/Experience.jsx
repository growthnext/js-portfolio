import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'GrowthNEXT Consultants Pvt. Ltd.',
      role: 'Founder & Director',
      period: 'March 2022 – Present',
      location: 'Mumbai, India',
      logo: './images/logos/growthnext.png',
      achievements: [
        'Providing strategic CFO advisory services to MSMEs, Mid-Corporate, and Large Corporates',
        'Leading fundraising initiatives, taxation planning, and audit & assurance services',
        'Delivering credit rating advisory and comprehensive treasury & banking solutions',
        'Implementing banking strategy, restructuring, and compliance advisory frameworks',
        'Establishing robust financial governance and MIS systems for client organizations',
      ],
    },
    {
      company: 'JB & Company',
      role: 'Partner',
      period: 'July 2022 – Present',
      location: 'Mumbai, India',
      logo: './images/logos/jb.png',
      achievements: [
        'Partnering in chartered accountancy practice focused on audit and taxation',
        'Providing comprehensive compliance and regulatory advisory services',
        'Managing client relationships across diverse industry sectors',
        'Leading statutory audit engagements for corporates and SMEs',
      ],
    },
    {
      company: 'IRB Infrastructure Trust',
      role: 'Chief Financial Officer',
      period: 'December 2019 – February 2022',
      location: 'Mumbai, Maharashtra',
      logo: './images/logos/irb.png',
      achievements: [
        'Managed road infrastructure assets with enterprise value exceeding ₹30,000 Crores',
        'Successfully raised ₹10,000 Crores in equity funding from GIC (sovereign wealth fund)',
        'Oversaw ₹12,000 Crores in borrowings and structured ₹10,000 Crores in equity infusions',
        'Led treasury operations managing relationships with 20+ banking partners',
        'Established comprehensive investor reporting and financial governance frameworks',
      ],
    },
    {
      company: 'Tata Housing Development Company Ltd.',
      role: 'Deputy General Manager – Treasury & Banking',
      period: 'June 2012 – June 2014',
      location: 'Mumbai, Maharashtra',
      logo: './images/logos/tata.png',
      achievements: [
        'Established innovative working capital facilities for residential projects',
        'Facilitated issuance of long-term bonds (3-5 years) at competitive rates',
        'Spearheaded successful launch of Commercial Paper program',
        'Managed forex operations, corporate borrowing strategies, and ECB arrangements',
      ],
    },
    {
      company: 'CEAT Limited',
      role: 'Manager – Treasury',
      period: 'February 2006 – November 2007',
      location: 'Mumbai, Maharashtra',
      logo: './images/logos/ceat.png',
      achievements: [
        'Managed consortium of 14 banking partners for working capital',
        'Negotiated favorable interest rate reductions and enhanced MPBF limits',
        'Secured ECB of USD 10 Million for Radial project expansion',
        'Implemented receivables discounting and working capital term loans',
      ],
    },
    {
      company: 'Clariant Chemicals (India) Limited',
      role: 'Manager – Treasury Controls',
      period: 'December 2007 – February 2010',
      location: 'Mumbai, Maharashtra',
      logo: './images/logos/clariant.png',
      achievements: [
        'Established multi-banking working capital facilities with foreign banks',
        'Managed credit control, export & import banking, and forex management',
        'Obtained CRISIL credit rating for enhanced bank limit capabilities',
        'Implemented CMS and customer channel financing solutions',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
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
            Professional Journey
          </motion.span>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 font-['Poppins']">
            Career
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of financial leadership across India's most respected organizations
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
                className={`hidden lg:block absolute top-8 ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                } transform translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-20`}
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 group hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Logo */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      loading="lazy"
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += `<span class="text-2xl font-bold text-primary">${exp.company.charAt(0)}</span>`;
                      }}
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xl text-gray-700 font-semibold mb-3">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 + idx * 0.08 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 text-gray-700 leading-relaxed"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                      />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 grid md:grid-cols-4 gap-6"
        >
          {[
            { value: '₹30,000+ Cr', label: 'Assets Managed' },
            { value: '₹10,000 Cr', label: 'Equity Raised' },
            { value: '20+ Banks', label: 'Consortium Led' },
            { value: '6+ Sectors', label: 'Industry Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-200 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
