import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-btc-light py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl px-6"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-8xl font-poppins font-bold bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent mb-6"
        >
          404
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-btc-navy mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-btc-slate mb-8">
          Oops! We couldn't find the page you're looking for. It might have been
          moved or deleted. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-btc-teal to-emerald-700 hover:shadow-lg text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            <Home size={20} />
            Return to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-btc-teal text-btc-teal hover:bg-btc-teal hover:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Contact Support
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 text-6xl opacity-20"
        >
          🏗️
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
