import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  index?: number;
  onView?: () => void;
}

export default function ProjectCard({
  title,
  category,
  image,
  description,
  index = 0,
  onView,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <motion.div
        className="relative h-64 overflow-hidden bg-gray-200"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          whileHover={{ opacity: 1, backdropFilter: "blur(4px)" }}
          className="absolute inset-0 bg-gradient-to-t from-btc-navy/90 via-btc-navy/50 to-transparent flex flex-col justify-end p-6 cursor-pointer"
          onClick={onView}
        >
          <h3 className="text-xl font-poppins font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-200 mb-4 line-clamp-2">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-btc-teal font-semibold hover:text-btc-accent transition-colors"
          >
            <Eye size={16} />
            View Project
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Card Info */}
      <div className="p-6 bg-white dark:bg-slate-800">
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-btc-teal/20 to-btc-accent/20 rounded-full mb-2">
          <span className="text-xs font-semibold text-btc-teal dark:text-btc-teal uppercase">
            {category}
          </span>
        </div>
        <h4 className="text-lg font-poppins font-bold text-btc-navy dark:text-white hover:text-btc-teal dark:hover:text-btc-teal transition-colors">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}
