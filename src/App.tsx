import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Menu, X, Star, Heart } from 'lucide-react';
import clsx from 'clsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

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
      name: 'Classic Leather Jacket',
      price: '$199.99',
      types: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800',
      ],
      rating: 4.5,
    },
    {
      name: 'Premium Denim Jeans',
      price: '$89.99',
      types: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800',
      ],
      rating: 4.8,
    },
    {
      name: 'Cotton T-Shirt',
      price: '$29.99',
      types: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800',
      ],
      rating: 4.3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="fixed inset-0 flex items-center justify-center bg-indigo-600 z-50"
          >
            <h1 className="text-6xl text-white font-['Lobster']">Welcome to Elkamel Store</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/logo.jpg" alt="Elkamel Store" className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-xl font-['Lobster'] text-gray-900">Elkamel Store</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 font-bold text-xl">
                <NavLink href="#products">Products</NavLink>
                <NavLink href="#portfolio">Featured</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <NavLink href="#products" isMobile>
                Products
              </NavLink>
              <NavLink href="#portfolio" isMobile>
                Featured
              </NavLink>
              <NavLink href="#contact" isMobile>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center" initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-5xl md:text-6xl font-['Lobster'] text-gray-900 mb-6">Discover Your Style</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Premium clothing and accessories for the modern fashion enthusiast.
            </p>
            <motion.button
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = '/#products')}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              image="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800"
              title="Summer Collection"
              category="Seasonal"
            />
            <PortfolioItem
              image="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800"
              title="Autumn Essentials"
              category="Featured"
            />
            <PortfolioItem
              image="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800"
              title="Winter Wear"
              category="New Arrival"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-['Lobster'] text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Questions about our products?</p>
          </motion.div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function NavLink({ href, children, isMobile }) {
  return (
    <a
      href={href}
      className={clsx(
        'text-gray-700 hover:text-indigo-600 transition-colors',
        isMobile ? 'block px-3 py-2 text-base font-medium' : 'px-3 py-2 text-sm font-medium'
      )}
    >
      {children}
    </a>
  );
}
function ProductCard({ name, price, types, rating }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(types[0]); // Default to the first image
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isCommandFormOpen, setIsCommandFormOpen] = useState(false); // State for form visibility
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false); // State for order submission confirmation

  // State for form inputs
  const [fullName, setFullName] = useState('Mohammed elkamal');
  const [phone, setPhone] = useState('0613276891');

  const handleCommandClick = () => {
    setIsCommandFormOpen(true); // Open the command form
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const orderData = {
      name: fullName,
      phone: phone,
      item: selectedImage, // The currently selected product image
    };

      console.log('Order submitted successfully:', orderData);

      // Show confirmation component
      setIsOrderSubmitted(true);
      setTimeout(() => {
        setIsOrderSubmitted(false); // Hide confirmation after 3 seconds
        setIsCommandFormOpen(false); // Close the form
        setFullName(''); // Reset form fields
        setPhone('');
      }, 3000);
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Large Product Image */}
          <motion.img
            src={selectedImage}
            alt={name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
            loading="lazy"
            onLoad={() => setIsImageLoading(false)}
          />
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <motion.div
            className="absolute inset-0 bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Quick Actions */}
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="Add to favorites"
              className="p-2 bg-white rounded-full shadow-md hover:bg-indigo-50 transition-colors"
            >
              <Heart className="w-5 h-5 text-indigo-600" />
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
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

          {/* Product Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {name}
          </h3>

          {/* Thumbnails for Image Selection */}
          <div className="flex flex-wrap gap-2 mb-4">
            {types.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                aria-label={`Select ${name} image ${index + 1}`}
                className={clsx(
                  'w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all hover:scale-105',
                  selectedImage === image ? 'border-indigo-600' : 'border-gray-200'
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

          {/* Price and Command Button */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-indigo-600">{price}</p>
            <motion.button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCommandClick}
            >
              Command
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Command Form Modal */}
      <AnimatePresence>
        {isCommandFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsCommandFormOpen(false)} // Close modal on outside click
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inside click
            >
              {/* Close Button */}
              <button
                aria-label="Close"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsCommandFormOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Form Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Place Your Order</h2>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="p-4 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-4 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Order
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Confirmation Component */}
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
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 10 }}
              >
                <Check className="w-16 h-16 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-lg">Thank you for your purchase.</p>
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
      <img src={image} alt={title} className="w-full h-64 object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p>{category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;