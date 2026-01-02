import React, { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Enhanced Loading fallback component with blue theme
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="flex justify-center items-center space-x-2 mb-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-blue-600 rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <p className="text-blue-600 font-semibold">Loading...</p>
    </div>
  </div>
);

// Memoized bouncing dots to prevent unnecessary re-renders
const BouncingDots = React.memo(() => {
  const circleVariants = {
    start: { y: "0%" },
    end: { y: "100%" },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <div className="flex justify-center items-center space-x-2 mb-6">
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="block w-3 h-3 bg-blue-600 rounded-full"
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            ...circleTransition,
            delay: index * 0.15,
          }}
        />
      ))}
    </div>
  );
});

BouncingDots.displayName = 'BouncingDots';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Enhanced Loading Screen with Blue Theme */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Main JS Text with Glow Effect */}
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6 font-['Poppins']"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(37, 99, 235, 0.3))",
                }}
              >
                JS
              </motion.h1>

              {/* Animated Bouncing Dots */}
              <BouncingDots />

              {/* Animated Progress Bar */}
              <div className="w-64 h-1 bg-blue-100 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full"
                  style={{
                    boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with Suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <div className="bg-white min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
