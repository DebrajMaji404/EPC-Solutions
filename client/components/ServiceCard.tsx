import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-btc-teal/30 dark:hover:border-btc-teal/50 group"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="inline-block p-4 bg-gradient-to-br from-btc-teal/10 to-btc-accent/10 rounded-lg mb-4 group-hover:from-btc-teal/20 group-hover:to-btc-accent/20 transition-all duration-300"
      >
        <Icon size={32} className="text-btc-teal group-hover:text-btc-accent transition-colors duration-300" />
      </motion.div>

      <h3 className="text-xl md:text-2xl font-poppins font-bold text-btc-navy dark:text-white mb-3 group-hover:text-btc-teal dark:group-hover:text-btc-teal transition-colors duration-300">
        {title}
      </h3>

      <p className="text-btc-slate dark:text-gray-300 leading-relaxed">{description}</p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-1 w-12 bg-gradient-to-r from-btc-teal to-btc-accent mt-4 origin-left rounded-full"
      />
    </motion.div>
  );
}
