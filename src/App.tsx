import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Menu, X, Star, Heart, Contact, Loader } from 'lucide-react';
import clsx from 'clsx';
import logo from './assets/logo.jpg';
import b from './assets/b.mp4';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import emailjs from 'emailjs-com';

const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.div
        className="flex items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={handleLogoClick}
      >
        <img src={logo} alt="Elkamel Store" className="h-12 w-12 rounded-full" />
        {/* <span className="ml-2 text-xl font-black text-gray-900">Elkamel Store</span> */}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="h-screen fixed inset-0 flex items-center justify-center bg-black/90 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={logo}
                alt="Elkamel Store"
                className="h-80 w-80 rounded-full mx-auto mb-10"
              />
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const products = [
        {
            name: "Mini Focus, Montre chronographe à quartz dorée pour homme",
            types: ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/644046/1.jpg?7447", "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/644046/3.jpg?7449", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/644046/2.jpg?7447"],
            rating: 4.3,
            price: 399.00
        },
        {
            name: "Curren, Montre chronographe de sport résistante à l'eau",
            types: ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/272036/1.jpg?0527", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/272036/3.jpg?0527"],
            rating: 3.9,
            price: 299.00
        },
        {
            name: "CASIO, Pour Homme cadran argente - Dateur jours/mois - Bracelet cuir marron -MTP-1381L-7AVDF",
            types: [
              "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/358975/1.jpg?3481",
              "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/358975/4.jpg?3481",
                "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/358975/7.jpg?3481",
              ],
            rating: 4.1,
            price: 830.00
        },
        {
            name : "Curren, Montre chronographe de sport résistante à l'eau",
            types : ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/487536/1.jpg?6305", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/487536/2.jpg?6305"],
            rating : 4.5,
            price : 299.00
        },
        {
            name: "Benyar, Montre chronographe sport à quartz pour homme, noir et argent",
            types: ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/039116/1.jpg?8965", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/039116/3.jpg?8965", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/039116/4.jpg?8965"],
            rating: 4.1,
            price: 399.00
        },
        {
          name: "Benyar, Montre chronographe à quartz argentée et noire pour homme",
          types: ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/097685/2.jpg?1525", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/097685/1.jpg?1525", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/62/097685/3.jpg?1525"],
          rating: 4.7,
          price: 349.00,
        },
        {
          name: "Benyar, Montre à quartz chronographe pour homme avec bracelet en cuir marron et résistante à l'eau",
          types: ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/573445/1.jpg?3806","https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/573445/5.jpg?1759", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/573445/4.jpg?5931", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/573445/2.jpg?5981"],
          rating: 4.5,
          price: 349.00
        },
        {
            name: "Casio Homme - Cadran noir - Bracelet en acier inydable - MTP-1374D-1AVDF", 
            types: ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/069214/1.jpg?3003","https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/069214/2.jpg?9651",  "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/069214/3.jpg?9651"],
            rating: 4.3,
            price: 849.00
        },
        {
            name : "Curren La montre Homme Top Chrono bleu marine",
            types : ["https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/246336/1.jpg?7520", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/246336/2.jpg?7520"],
            rating : 4.3,
            price : 399.00
        },
        // {
        //     name : "Benyar, Montre à quartz chronographe pour homme avec bracelet en cuir marron et résistante à l'eau",
        //     types: ["https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/76/544046/1.jpg?3730", "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/76/544046/2.jpg?3730", "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/76/544046/3.jpg?3730"],
        //     rating: 4.3,
        //     price: 349.00
        // },
        // {
        //     name : "Curren, Montre à quartz chronographe pour homme avec bracelet en cuir marron et résistante à l'eau",
        //     types: ["https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/03/904445/1.jpg?3349", "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/03/904445/2.jpg?3349", "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/904445/4.jpg?3349"],
        //     rating: 4.3,
        //     price: 299.00
        // },
        // {
        //     name : "Benyar Montre homme Benyar BY-514",
        //     types: ["https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/12/360546/1.jpg?7049", "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/12/360546/2.jpg?7049", "https://ma.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/12/360546/4.jpg?7049"],
        //     rating: 4.3,
        //     price: 299.00
        // }
    ];

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
          >
            <h1 className="text-center w-full text-5xl sm:text-4xl md:text-6xl text-slate-200 font-black font-['Lobster']">
              Welcome to Elkamel Store
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Header />

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline  space-x-4 font-bold text-md text-slate-300">
                <a className='hover:text-slate-800 transition-colors' href="#products">Products</a>
                <a href="#portfolio">Featured</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-slate-400 transition-colors"
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
  <motion.div
    className="md:hidden fixed inset-0 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* Backdrop with blur effect */}
    <div 
      className="absolute inset-0"
      onClick={() => setIsMenuOpen(false)}
    />
    <motion.div
      className="relative mx-4 mt-20 rounded-xl overflow-hidden"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ type: "spring", damping: 25 }}
    >
      {/* Glass effect menu */}
      <div className="bg-white/20 backdrop-blur-lg shadow-xl">
        <div className="px-5 py-3 space-y-4">
          <a href="#products" isMobile className="text-slate-300 hover:text-slate-100 block px-3 py-2 rounded-lg hover:bg-white/10 transition-all">
            Products
          </a>
          <a href="#portfolio" isMobile className="text-slate-300 hover:text-slate-100 block px-3 py-2 rounded-lg hover:bg-white/10 transition-all">
            Featured
          </a>
          <a href="#contact" isMobile className="text-slate-300 hover:text-slate-100 block px-3 py-2 rounded-lg hover:bg-white/10 transition-all">
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
      </nav>

      <section className="min-h-screen relative px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Black background that will show until video loads */}
  <div className={`absolute inset-0 z-0 ${!videoLoaded ? 'bg-black' : ''}`}>
    {/* Optional loading indicator */}
    {!videoLoaded && (
      <div className="absolute inset-0 flex items-center justify-center">
      </div>
    )}
    
    {/* Video element with improved loading handling */}
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"  // Important for Instagram browser
      className={`w-full h-full object-cover ${!videoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      onCanPlay={() => {
        setVideoLoaded(true);
        // Force play in case Instagram browser blocks autoplay
        document.querySelector('video')?.play().catch(e => console.log('Autoplay prevented:', e));
      }}
      onWaiting={() => setVideoLoaded(false)}
      onError={() => setVideoLoaded(false)}
    >
      <source src={b} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Centered content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
    <motion.div 
      className="text-center w-full px-4 flex flex-col items-center"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <h1 className="text-5xl font-bold md:text-6xl font-['Lobster'] text-white mb-6">
        Discover Your Style
      </h1>
      <p className="text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
        Stylish accessories for today's trends
      </p>
      <div className="flex flex-col items-center font-black text-xl">
        <motion.button
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white 
          px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 
          transition-all shadow-lg flex items-center justify-center gap-2 "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => smoothScroll('products')}
        >
          Shop Now
          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-rotate-90"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-['Lobster'] text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Discover our latest collection</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 flex-wrap">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-['Lobster'] text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">Trending styles and seasonal favorites</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              image={image1}
              title="Summer Collection"
              category="Seasonal"
            />
            <PortfolioItem
              image={image2}
              title="Autumn Essentials"
              category="Featured"
            />
            <PortfolioItem
              image={image3}
              title="Winter Wear"
              category="New Arrival"
            />
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Show success notification
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
      
      // Hide notification after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     formData.message.trim();

  return (
    <>
      <div id="contact" className="my-10 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-black mb-6 text-gray-800">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : isFormValid 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg' 
                  : 'bg-gray-400 cursor-not-allowed'
            } transition-colors`}
          >
            {isSubmitting ? <div className="spinner"></div> : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Success Notification - Fixed at bottom-right */}
      {showSuccess && (
  <div className="fixed bottom-4 right-4 z-50 animate-toast-in">
    <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-xl flex items-center space-x-3">
      {/* Animated Checkmark Circle */}
      <div className="relative">
        <svg 
          className="w-6 h-6 animate-checkmark-circle"
          viewBox="0 0 24 24"
        >
          <circle 
            className="stroke-current text-white/20" 
            cx="12" 
            cy="12" 
            r="10" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            className="stroke-current text-white" 
            strokeDasharray="30" 
            strokeDashoffset="30" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M6 12l4 4 8-8" 
            style={{ animation: 'draw 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards' }}
          />
        </svg>
      </div>
      
      {/* Message */}
      <div>
        <p className="font-medium">Success!</p>
        <p className="text-sm opacity-90">Your message was sent successfully</p>
      </div>
    </div>
  </div>
)}
    </>
  );
}

function NavLink({ href, children, isMobile }) {
  return (
    <a
      href={href}
      className={clsx(
        'text-gray-700 hover:text-purple-600 transition-colors',
        isMobile ? 'block px-3 py-2 text-base font-medium' : 'px-3 py-2 text-sm font-medium'
      )}
    >
      {children}
    </a>
  );
}

function ProductCard({ name, price, types, rating }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(types[0]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isCommandFormOpen, setIsCommandFormOpen] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleCommandClick = () => {
    setIsCommandFormOpen(true);
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (fullName.length > 30) {
      setNameError('Name must be less than 30 characters.');
      isValid = false;
    } else {
      setNameError('');
    }

    const moroccanPhoneRegex = /^0[5-7]\d{8}$/;
    if (!moroccanPhoneRegex.test(phone)) {
      setPhoneError('Please enter a valid phone number.');
      isValid = false;
    } else {
      setPhoneError('');
    }
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    const orderData = {
      name: fullName,
      phone: phone,
      articleName: name,
      item: selectedImage,
    };

    try {
      await emailjs.send(
        'service_yz7s7a6',
        'template_epjkkrt',
        orderData,
        'vSlM4dzbfh-MbQPdq'
      );

      setIsOrderSubmitted(true);
      setIsCommandFormOpen(false);
      setTimeout(() => {
        setIsOrderSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
<motion.div
  className="bg-slate-200 rounded-2xl shadow-lg overflow-hidden group relative flex flex-col h-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
>
  {/* Image Section */}
  <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
    <button onClick={handleCommandClick} aria-label="Command" className="absolute inset-0 z-10">
      <motion.img
        src={selectedImage}
        alt={name}
        className="w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
        loading="lazy"
        onLoad={() => setIsImageLoading(false)}
      />
    </button>
    {isImageLoading && (
      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
    )}
    <motion.div
      className="absolute inset-0 bg-black/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />

    <motion.div
      className="absolute top-4 right-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        aria-label="Add to favorites"
        className="p-2 bg-white rounded-full shadow-md hover:bg-purple-50 transition-colors"
      >
        <Heart className="w-5 h-5 text-slate-500" />
      </button>
    </motion.div>
  </div>

  {/* Content Section - grows to fill space */}
  <div className="p-6 flex flex-col flex-grow">
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={clsx(
            'w-4 h-4',
            i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
          )}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}</span>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
      {name}
    </h3>

    <div className="flex flex-wrap gap-2 mb-4">
      {types.map((image, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(image)}
          aria-label={`Select ${name} image ${index + 1}`}
          className={clsx(
            'w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all hover:scale-105',
            selectedImage === image ? 'border-purple-600' : 'border-gray-200'
          )}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </button>
      ))}
    </div>

    {/* Price and Button Section - pushes button to bottom */}
    <div className="mt-auto pt-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-bold text-emerald-500">{price}<span className="ml-1 text-slate-600">Dhs</span></p>
      </div>
      
      {/* Full-width Command button */}
      <motion.button
        className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCommandClick}
      >
        Command
      </motion.button>
    </div>
  </div>
</motion.div>

      <AnimatePresence>
        {isCommandFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsCommandFormOpen(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* <h2 className="text-center w-full text-2xl font-bold text-gray-900 mb-6">Make Your Order</h2> */}
              <div className="mb-6 text-center">
                <img
                  src={selectedImage}
                  alt={name}
                  className="w-48 h-36 mx-auto object-cover rounded-lg shadow-md"
                />
                {/* <h3 className="mt-2 text-lg font-semibold text-gray-900">{name}</h3> */}
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Name"
                    value={fullName}
                    onChange={handleNameChange}
                    className="p-2 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                  {nameError && (
                    <p className="font-bold text-red-500 text-sm mt-1">{nameError}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="06xxxxxxxx"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="p-2 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                  {phoneError && (
                    <p className="font-bold text-red-500 text-sm mt-1">{phoneError}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="spinner"></div>
                  ) : (
                    'Submit Order'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOrderSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-8 text-center text-white shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
              >
                <Check className="w-16 h-16 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-lg">Thank you for your visit.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PortfolioItem({ image, title, category }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p>{category}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-400 text-center">
              We are dedicated to providing high-quality products and exceptional customer service.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/elkamelstore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="/"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://wa.me/0613276891"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Elkamel-Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;