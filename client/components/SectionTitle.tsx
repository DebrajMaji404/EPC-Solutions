import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="section-title dark:text-white">{title}</h2>
      {subtitle && <p className="section-subtitle dark:text-gray-400">{subtitle}</p>}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1.5 w-24 bg-gradient-to-r from-btc-teal via-btc-accent to-btc-teal mx-auto mt-4 origin-center rounded-full shadow-lg shadow-btc-teal/30"
      />
    </motion.div>
  );
}
