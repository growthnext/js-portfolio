import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

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
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
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
            Get In Touch
          </motion.span>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 font-['Poppins']">
            Let's Connect &
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your financial strategy? Let's discuss how we can drive your business forward
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 10 }}
                className="block bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  >
                    <info.icon className="text-primary" size={28} />
                  </motion.div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">{info.title}</div>
                    <div className="text-primary text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Connect on Social Media</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary hover:text-white transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 backdrop-blur-xl rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-4 border border-gray-200 shadow-xl overflow-hidden">
                <img
                  src="/public/images/JS3.webp"
                  alt="CA Jitendra Sharma"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div class="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center"><span class="text-6xl font-bold text-primary">JS</span></div>';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="map"
            className="sticky top-24"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-xl overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
              
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-gray-200">
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
                whileHover={{ scale: 1.05 }}
                className="mt-6 bg-blue-50 rounded-xl p-4 text-center border border-gray-200"
              >
                <div className="text-primary font-semibold mb-1">GrowthNEXT Consultants</div>
                <div className="text-gray-600 text-sm">
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-200 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how strategic CFO advisory can accelerate your growth and optimize your financial operations
            </p>
            <motion.a
              href="tel:+919769955233"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,48,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all duration-300 text-lg shadow-lg"
            >
              <Phone size={24} />
              Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
