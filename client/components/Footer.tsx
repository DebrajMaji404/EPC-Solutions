import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-btc-navy dark:bg-slate-950 text-white py-12 md:py-16">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-poppins font-bold mb-4 bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent">
              BTC
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Bharat Trading Company - Engineering the Future with Integrity
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-btc-teal transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-btc-teal transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-btc-teal transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-btc-teal transition-colors duration-300">
                  Projects
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">EPC Solutions</li>
              <li className="text-gray-300">Civil & Structural</li>
              <li className="text-gray-300">Mechanical Erection</li>
              <li className="text-gray-300">Electrical Installation</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-btc-teal mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+91 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-btc-teal mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 break-all">info@btccompany.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-btc-teal mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">New Delhi, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-700 pt-8">
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-btc-teal transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-btc-teal transition-colors duration-300"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-btc-teal transition-colors duration-300"
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              &copy; 2024 The Bharat Trading Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
