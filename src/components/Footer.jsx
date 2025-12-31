import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ca-jitendra-sharma-09412417/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/jitendra.growthnext/',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61582106235379',
      label: 'Facebook',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4 font-['Poppins']">
              CA Jitendra Sharma
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Strategic CFO Advisor & Board Director with 25+ years of excellence in Corporate Finance, Treasury & Banking
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 text-sm hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>CFO Advisory</li>
              <li>Fund Raising</li>
              <li>Treasury & Banking</li>
              <li>Credit Rating</li>
              <li>Tax & Audit</li>
              <li>Board Advisory</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919769955233"
                  className="flex items-start gap-3 text-gray-600 text-sm hover:text-primary transition-colors"
                >
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>+91 97699 55233</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jitendra.sharma@growthnext.co.in"
                  className="flex items-start gap-3 text-gray-600 text-sm hover:text-primary transition-colors"
                >
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span className="break-all">jitendra.sharma@growthnext.co.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-600 text-sm">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Thane, Mumbai, India</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>© {currentYear} CA Jitendra Sharma. All rights reserved.</p>
            <p>
              Crafted with precision by{' '}
              <a
                href="https://growthnext.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                GrowthNEXT
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
