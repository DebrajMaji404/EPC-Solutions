import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundGradient?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaHref = "#",
  backgroundGradient = true,
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    { icon: CheckCircle2, text: "20+ Years Experience" },
    { icon: Shield, text: "ISO Certified" },
    { icon: Zap, text: "Proven Track Record" },
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      backgroundGradient
        ? "bg-gradient-to-br from-btc-navy via-slate-900 to-slate-800"
        : "bg-btc-navy"
    }`}>
      {/* Background Animation Elements */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-80 h-80 bg-btc-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-btc-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-btc-teal/30 rounded-full blur-3xl" />
      </motion.div>

      {/* Decorative Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-96 h-96 border border-btc-teal rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="section-container relative z-10 text-center py-20"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="h-1 w-24 bg-gradient-to-r from-btc-teal to-btc-accent rounded-full mx-auto mb-6 shadow-lg shadow-btc-teal/50" />
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                animate={floatingVariants.animate}
                transition={{
                  ...floatingVariants.animate.transition,
                  delay: i * 0.2,
                }}
                className="flex items-center gap-3 text-btc-teal"
              >
                <Icon size={24} className="flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-gray-100">
                  {feature.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            href={ctaHref}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-btc-teal/50 hover:border-btc-teal hover:bg-btc-teal/10 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-2xl mx-auto text-gray-100"
        >
          {[
            { number: "500+", label: "Projects" },
            { number: "20+", label: "Years" },
            { number: "150+", label: "Clients" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              animate={floatingVariants.animate}
              transition={{
                ...floatingVariants.animate.transition,
                delay: i * 0.15,
              }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 hover:border-btc-teal/30 hover:bg-white/10 transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold text-btc-teal mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white text-center">
            <p className="text-xs mb-3 text-gray-300 font-light">Scroll to explore</p>
            <motion.svg
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5 mx-auto text-btc-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
