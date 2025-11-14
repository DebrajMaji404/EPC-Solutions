import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "all" | "power" | "steel" | "mining" | "other";
  image: string;
  description: string;
  details: string;
  location: string;
  duration: string;
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Thermal Power Plant - Phase II",
      category: "power",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "500 MW thermal power generation facility",
      details: "Complete EPC services for a 500 MW thermal power plant including civil works, mechanical erection, and electrical systems installation.",
      location: "Maharashtra, India",
      duration: "24 months",
    },
    {
      id: 2,
      title: "Steel Plant Expansion",
      category: "steel",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Advanced steel manufacturing facility",
      details: "Expansion of existing steel plant with new production lines and modern automation systems.",
      location: "West Bengal, India",
      duration: "18 months",
    },
    {
      id: 3,
      title: "Iron Ore Mining Complex",
      category: "mining",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Large-scale mining infrastructure",
      details: "Complete mining infrastructure development including extraction systems, processing plant, and logistics.",
      location: "Odisha, India",
      duration: "30 months",
    },
    {
      id: 4,
      title: "Chemical Processing Plant",
      category: "other",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "State-of-the-art chemical facility",
      details: "Design and construction of a modern chemical processing plant with advanced safety systems.",
      location: "Gujarat, India",
      duration: "20 months",
    },
    {
      id: 5,
      title: "Power Transmission Grid",
      category: "power",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "High-voltage transmission infrastructure",
      details: "Installation of 400 kV transmission lines and substations across multiple states.",
      location: "Multiple States",
      duration: "15 months",
    },
    {
      id: 6,
      title: "Steel Pipe Manufacturing",
      category: "steel",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Advanced pipe manufacturing unit",
      details: "State-of-the-art facility for manufacturing high-grade steel pipes for industrial applications.",
      location: "Haryana, India",
      duration: "22 months",
    },
    {
      id: 7,
      title: "Copper Mining Operations",
      category: "mining",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Large-scale copper mining project",
      details: "Complete mining operations setup with modern extraction and processing technologies.",
      location: "Jharkhand, India",
      duration: "28 months",
    },
    {
      id: 8,
      title: "Industrial Park Infrastructure",
      category: "other",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Comprehensive industrial park development",
      details: "Development of a 500-acre industrial park with complete utilities and infrastructure.",
      location: "Bangalore, India",
      duration: "36 months",
    },
    {
      id: 9,
      title: "Gas Power Station",
      category: "power",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Combined cycle gas power generation",
      details: "Installation of 300 MW combined cycle gas turbine power station with modern emission control.",
      location: "Tamil Nadu, India",
      duration: "20 months",
    },
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "power", label: "Power Plant" },
    { value: "steel", label: "Steel Plant" },
    { value: "mining", label: "Mining" },
    { value: "other", label: "Others" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <Hero
        title="Our Projects"
        subtitle="Showcasing our expertise across diverse industrial sectors and successful project completions"
      />

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <SectionTitle
            title="Featured Projects"
            subtitle="Filter by category to view our work"
          />

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter.value
                    ? "bg-gradient-to-r from-btc-teal to-btc-accent text-white shadow-lg shadow-btc-teal/30"
                    : "bg-white dark:bg-slate-800 text-btc-navy dark:text-white border-2 border-btc-navy dark:border-slate-700 hover:border-btc-teal dark:hover:border-btc-teal hover:bg-btc-teal dark:hover:bg-btc-teal hover:text-white"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    description={project.description}
                    index={index}
                    onView={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-btc-navy text-white rounded-full hover:bg-btc-blue transition-colors"
                >
                  <X size={24} />
                </motion.button>

                {/* Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-btc-gold/20 rounded-full mb-4">
                    <span className="text-xs font-semibold text-btc-gold uppercase">
                      {selectedProject.category}
                    </span>
                  </div>

                  <h2 className="text-3xl font-poppins font-bold text-btc-navy dark:text-white mb-4">
                    {selectedProject.title}
                  </h2>

                  <p className="text-btc-charcoal dark:text-gray-300 leading-relaxed mb-6">
                    {selectedProject.details}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-btc-charcoal dark:text-gray-400 font-semibold mb-1">
                        LOCATION
                      </p>
                      <p className="text-btc-navy dark:text-white font-semibold">
                        {selectedProject.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-btc-charcoal dark:text-gray-400 font-semibold mb-1">
                        DURATION
                      </p>
                      <p className="text-btc-navy dark:text-white font-semibold">
                        {selectedProject.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-btc-charcoal dark:text-gray-400 font-semibold mb-1">
                        CATEGORY
                      </p>
                      <p className="text-btc-navy dark:text-white font-semibold capitalize">
                        {selectedProject.category}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="w-full bg-btc-blue dark:bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-btc-navy dark:hover:bg-slate-600 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-btc-navy text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Industries Served", value: "10+" },
              { label: "Satisfied Clients", value: "150+" },
              { label: "Success Rate", value: "99%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-poppins font-bold text-btc-gold mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-btc-navy via-slate-900 to-btc-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              y: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-btc-accent rounded-full blur-3xl"
          />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how BTC can help you achieve your industrial goals with
              proven expertise and commitment.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-gradient-to-r from-btc-teal to-btc-accent text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:shadow-2xl transition-all"
            >
              Contact Our Team
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
