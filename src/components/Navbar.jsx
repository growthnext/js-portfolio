import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Expertise' },
    { id: 'contact', label: 'Contact' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };


  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(15,115,255,0.1)] border-b border-[#0F73FF]/10'
            : 'bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo with CA Icon */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F73FF] to-[#4DA3FF] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                {/* White circular background for CA logo */}
                <div className="relative bg-white p-2 rounded-full shadow-[0_4px_16px_rgba(15,115,255,0.15)] border border-[#0F73FF]/10 group-hover:border-[#0F73FF]/30 transition-all duration-300">
                  <img 
                    src="./images/logos/ca.webp" 
                    alt="CA India" 
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#0F73FF] via-[#0B5ED7] to-[#0F73FF] bg-clip-text text-transparent font-['Poppins'] bg-size-200 animate-gradient">
                  Jitendra Sharma
                </h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wide">
                  Financial Excellence
                </p>
              </div>
            </motion.div>


            {/* Desktop Navigation with Glassmorphism Pills */}
            <div className="hidden md:flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-2 py-2 shadow-[0_4px_24px_rgba(15,115,255,0.08)] border border-white/60">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white shadow-[0_4px_16px_rgba(15,115,255,0.4)]'
                      : 'text-gray-600 hover:text-[#0F73FF] hover:bg-white/50'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#0F73FF] to-[#0B5ED7] rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {activeSection === link.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                      />
                    )}
                  </span>
                </motion.button>
              ))}
            </div>


            {/* Mobile Menu Button with Enhanced Design */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative p-3 rounded-xl bg-gradient-to-br from-[#0F73FF] to-[#0B5ED7] text-white shadow-[0_4px_16px_rgba(15,115,255,0.3)] hover:shadow-[0_6px_24px_rgba(15,115,255,0.4)] transition-shadow"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>


      {/* Enhanced Mobile Menu with Gradient Background */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-20 right-6 z-50 w-72 md:hidden"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_16px_48px_rgba(15,115,255,0.15)] border border-white/60 overflow-hidden">
                {/* Gradient Header */}
                <div className="h-2 bg-gradient-to-r from-[#0F73FF] via-[#4DA3FF] to-[#0B5ED7]" />
                
                <div className="p-6 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.06, duration: 0.3 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                        activeSection === link.id
                          ? 'bg-gradient-to-r from-[#0F73FF] to-[#0B5ED7] text-white shadow-[0_4px_16px_rgba(15,115,255,0.3)]'
                          : 'text-gray-700 hover:bg-[#EEF4FF] hover:text-[#0F73FF]'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {link.label}
                        {activeSection === link.id && (
                          <motion.span
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* Add to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </>
  );
};


export default Navbar;
