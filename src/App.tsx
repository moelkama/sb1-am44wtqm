import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Menu, X, Star, Heart } from 'lucide-react';
import clsx from 'clsx';
import logo from './assets/logo.jpg';
import emailjs from 'emailjs-com';

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
          <h1 className="text-center w-full text-2xl sm:text-4xl md:text-6xl text-white font-['Lobster']">
            Welcome to Elkamel Store
          </h1>
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
              <img src={logo} alt="Elkamel Store" className="h-12 w-12 rounded-full" />
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
                  className="p-2 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-2 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="p-2 font-bold mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
      <Footer />
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
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  // State for form inputs
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  // const [isValidForm, setIsValidForm] = useState(false);

  const handleCommandClick = () => {
    setIsCommandFormOpen(true); // Open the command form
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    // validateForm(); // Validate the form on input change
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    // validateForm(); // Validate the form on input change
  }

  const validateForm = () => {
    let isValid = true;

    // Name validation
    if (fullName.length > 30) {
      setNameError('Name must be less than 30 characters.');
      isValid = false;
    } else {
      setNameError('');
    }

    // Moroccan phone number validation
    const moroccanPhoneRegex = /^0[5-7]\d{8}$/; // Matches Moroccan phone numbers starting with 05, 06, or 07
    if (!moroccanPhoneRegex.test(phone)) {
      setPhoneError('Please enter a valid phone number.');
      isValid = false;
    } else {
      setPhoneError('');
    }
    return isValid;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
     // Validate the form before submission
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }
    setIsLoading(true); // Show loading indicator

    // Prepare the data to send
    const orderData = {
      name: fullName,
      phone: phone,
      articleName: name, // The name of the product/article
      item: selectedImage, // The currently selected product image
    };

    try {
      await emailjs.send(
        'service_yz7s7a6', // Replace with your EmailJS service ID
        'template_epjkkrt', // Replace with your EmailJS template ID
        orderData, // Pass the orderData object directly
        'vSlM4dzbfh-MbQPdq' // Replace with your EmailJS user ID
      );

      console.log('Order submitted successfully:', orderData);

      // Show confirmation component
      setIsOrderSubmitted(true);
      setIsCommandFormOpen(false); // Close the form
      setTimeout(() => {
        setIsOrderSubmitted(false); // Hide confirmation after 3 seconds
      }, 3000);
    } catch (error) {
      console.error('Error submitting order:', error); // Log the error
      alert('Failed to submit order. Please try again.');
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
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
              {/* Product Image */}
              <h2 className="text-center w-full text-2xl font-bold text-gray-900 mb-6">Make Your Order</h2>
              <div className="mb-6 text-center">
                <img
                  src={selectedImage}
                  alt={name}
                  className="w-48 h-36 mx-auto object-cover rounded-lg shadow-md"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{name}</h3>
              </div>

              {/* Form Title */}

              {/* Form */}
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
                    className="p-2 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                    className="p-2 font-bold h-12 mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  {phoneError && (
                    <p className="font-bold text-red-500 text-sm mt-1">{phoneError}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? (
                    <div className="spinner"></div> // Show spinner when loading
                  ) : (
                    'Submit Order'
                  )}
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

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-400 text-center">
              We are dedicated to providing high-quality products and exceptional customer service. Explore our collection and find the perfect fit for your style.
            </p>
          </div>


          {/* Social Media Section */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/elkamelstore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
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

              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
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

              {/* WhatsApp */}
              <a
                href="https://wa.me/0613276891"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
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

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Elkamel-Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}