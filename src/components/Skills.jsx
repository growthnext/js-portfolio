import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  DollarSign,
  TrendingUp,
  Shield,
  Building,
  FileText,
  Target,
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Corporate Finance & Strategy',
      icon: DollarSign,
      skills: [
        'Corporate Finance & Strategic Financial Leadership',
        'Treasury, Banking & Fund Flow Optimization',
        'Project Finance, NCDs & Commercial Papers',
        'Working Capital & Structured Funding',
        'Large-scale Infrastructure Financing',
      ],
    },
    {
      title: 'Banking & Consortiums',
      icon: Building,
      skills: [
        'Large Banking Consortium Management (20+ Banks)',
        'Nationalized, Private & Foreign Bank Relations',
        'NBFC Funding & Strategic Partnerships',
        'Credit Rating & Limit Enhancement',
        'Bank Restructuring & Compliance Advisory',
      ],
    },
    {
      title: 'Treasury & Risk Management',
      icon: Shield,
      skills: [
        'Forex Risk Management & Hedging Strategies',
        'Multi-currency Exposure Management',
        'Forward Contracts, Options & Natural Hedging',
        'Cash Flow Optimization & Liquidity Management',
        'SAP Financial & Treasury Implementations',
      ],
    },
    {
      title: 'Governance & Compliance',
      icon: FileText,
      skills: [
        'Cash Flow, MIS, Internal Controls & Compliance',
        'Board-level Financial Governance & Advisory',
        'Financial Reporting, Audit & Taxation',
        'Statutory Compliance & Regulatory Frameworks',
        'ERP Systems & Financial Process Automation',
      ],
    },
    {
      title: 'Capital & Fund Raising',
      icon: TrendingUp,
      skills: [
        'Equity Fund Raising (Raised ₹10,000 Cr+)',
        'Debt Structuring (Managed ₹12,000 Cr+)',
        'ECB, NCDs & Commercial Paper Issuance',
        'Investor Relations & Reporting',
        'Credit Rating Advisory',
      ],
    },
    {
      title: 'Strategic Advisory',
      icon: Target,
      skills: [
        'CFO Advisory Services for MSMEs & Corporates',
        'Financial Discipline & Cost Optimization',
        'Growth Strategy & Business Transformation',
        'Mergers, Acquisitions & Restructuring',
        'Board Advisory & Leadership Consulting',
      ],
    },
  ];

  const industries = [
    { name: 'Infrastructure & Road Assets', icon: Building },
    { name: 'Real Estate & Housing', icon: Building },
    { name: 'Manufacturing', icon: Building },
    { name: 'Chemicals & Personal Care', icon: Building },
    { name: 'Automotive & Tyres', icon: Building },
    { name: 'Financial Services', icon: DollarSign },
  ];

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
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <category.icon className="text-primary" size={32} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-blue-600 transition-colors">
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
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <industry.icon className="text-primary" size={28} />
                </motion.div>
                <div className="text-primary font-semibold">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Delivering Strategic Value
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              'Financial Discipline',
              'Cost of Fund Reduction',
              'Treasury Transformation',
              'Risk Mitigation',
              'Sustainable Growth',
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center"
              >
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3"></div>
                <div className="text-gray-700 font-medium text-sm">{value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
