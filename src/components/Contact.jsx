import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Calendar } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 97699 55233',
      link: 'tel:+919769955233',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jitendra.sharma@growthnext.co.in',
      link: 'mailto:jitendra.sharma@growthnext.co.in',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Thane, Mumbai, India',
      link: '#map',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ca-jitendra-sharma-09412417/',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/jitendra.growthnext/',
      color: 'hover:bg-pink-600',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61582106235379',
      color: 'hover:bg-blue-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      {/* Background Decorations - Optimized for mobile */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 md:top-20 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 md:px-6 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs md:text-sm font-medium mb-4 md:mb-6"
          >
            Get In Touch
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 font-['Poppins'] leading-tight px-4">
            Let's Connect &
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to transform your financial strategy? Let's discuss how we can drive your business forward
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info - Mobile First */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-5 md:space-y-6 lg:space-y-8"
          >
            {/* Contact Cards - Optimized for touch */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 group hover:shadow-2xl hover:border-primary/30 transition-all duration-300 touch-manipulation"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/10 to-blue-50 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-blue-100 transition-all"
                  >
                    <info.icon className="text-primary" size={window.innerWidth < 768 ? 22 : 28} />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-500 text-xs md:text-sm mb-1 uppercase tracking-wide">{info.title}</div>
                    <div className="text-primary text-base md:text-lg lg:text-xl font-semibold group-hover:text-blue-600 transition-colors break-words">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links - Touch Optimized */}
            <motion.div
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 md:mb-6">Connect on Social Media</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/10 to-blue-50 rounded-xl flex items-center justify-center text-primary hover:text-white transition-all duration-300 ${social.color} touch-manipulation shadow-sm hover:shadow-md`}
                    aria-label={social.name}
                  >
                    <social.icon size={window.innerWidth < 768 ? 20 : 24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats/Info Card - New Addition */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/5 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-primary" size={window.innerWidth < 768 ? 22 : 28} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-primary mb-2">Business Hours</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    <strong>Monday - Friday</strong><br />
                    10:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Map - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="map"
            className="lg:sticky lg:top-24"
          >
            <motion.div
              whileHover={{ scale: 1.005 }}
              className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 shadow-xl overflow-hidden"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 md:mb-6">Our Location</h3>
              
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0!2d72.9!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43094bfff60fb557!2sGrowthNEXT%20Consultants!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GrowthNEXT Consultants Location"
                ></iframe>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="mt-4 md:mt-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-lg md:rounded-xl p-4 md:p-5 text-center border border-primary/10 shadow-sm"
              >
                <div className="text-primary font-bold text-sm md:text-base mb-2">GrowthNEXT Consultants</div>
                <div className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  703, Oriana Business Park, Opp. GST Office,
                  <br />
                  Road No 22, Wagle Industrial Estate,
                  <br />
                  Thane, Mumbai, India - 400604
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50 border border-primary/20 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4 leading-tight px-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              Let's discuss how strategic CFO advisory can accelerate your growth and optimize your financial operations
            </p>
            <motion.a
              href="tel:+919769955233"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0,0,48,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full hover:from-primary/90 hover:to-blue-700 transition-all duration-300 text-sm md:text-base lg:text-lg shadow-lg hover:shadow-2xl touch-manipulation"
            >
              <Phone size={window.innerWidth < 768 ? 20 : 24} />
              <span className="whitespace-nowrap">Schedule a Consultation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
