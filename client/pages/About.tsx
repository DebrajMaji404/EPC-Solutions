import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  const milestones = [
    { year: "2004", title: "Company Founded", description: "BTC established with a vision for excellence" },
    { year: "2008", title: "First Major Project", description: "Successfully completed industrial complex project" },
    { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2008 quality management certification" },
    { year: "2016", title: "Market Expansion", description: "Expanded operations to multiple states across India" },
    { year: "2020", title: "Digital Transformation", description: "Implemented advanced project management systems" },
    { year: "2024", title: "500+ Projects", description: "Milestone of 500+ successfully completed projects" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Integrity",
      description: "Honest dealings and ethical practices in all business operations",
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "Commitment to highest quality standards in every project",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Building strong partnerships with clients and stakeholders",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Continuous improvement and adoption of new technologies",
    },
  ];

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
        title="About BTC"
        subtitle="20 years of engineering excellence, integrity, and innovation in industrial solutions"
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-btc-navy dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-btc-charcoal dark:text-gray-300 leading-relaxed mb-4">
                The Bharat Trading Company was founded in 2004 with a simple yet
                powerful vision: to become India's most trusted name in industrial
                engineering and construction. Over the past two decades, we've
                remained true to that vision.
              </p>
              <p className="text-btc-charcoal dark:text-gray-300 leading-relaxed mb-4">
                Starting from humble beginnings, we've grown to become a leading EPC
                contractor with expertise across power plants, steel plants, mining
                facilities, and various industrial infrastructure projects. Our
                growth has been driven by our commitment to quality, reliability, and
                customer satisfaction.
              </p>
              <p className="text-btc-charcoal dark:text-gray-300 leading-relaxed">
                Today, with over 500 completed projects, 150+ active clients, and a
                team of experienced professionals, BTC continues to set new standards
                in the industry.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-btc-navy to-slate-900 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6">Our Mission</h3>
              <p className="leading-relaxed mb-6">
                To deliver world-class engineering and construction solutions that
                drive industrial progress while maintaining the highest standards of
                integrity, safety, and sustainability.
              </p>
              <h3 className="text-2xl font-poppins font-bold mb-6">Our Vision</h3>
              <p className="leading-relaxed">
                To be the most trusted and preferred industrial contractor in India,
                recognized for innovation, excellence, and positive impact on the
                communities we serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="section-container">
          <SectionTitle
            title="Our Journey"
            subtitle="Milestones that shaped BTC"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)" }}
                className="p-6 bg-btc-light dark:bg-slate-800 rounded-xl border-l-4 border-gradient-to-b from-btc-teal to-btc-accent hover:shadow-lg transition-all dark:border-slate-700"
              >
                <div className="text-3xl font-poppins font-bold bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent mb-2">
                  {milestone.year}
                </div>
                <h4 className="text-lg font-poppins font-bold text-btc-navy dark:text-white mb-2 hover:text-btc-teal transition-colors">
                  {milestone.title}
                </h4>
                <p className="text-btc-slate dark:text-gray-300">{milestone.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-btc-navy text-white">
        <div className="section-container">
          <SectionTitle
            title="Our Core Values"
            subtitle="Principles that guide everything we do"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-btc-teal/50 text-center transition-all hover:shadow-lg hover:shadow-btc-teal/20"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-poppins font-bold mb-3 bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent">
                  {value.title}
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <SectionTitle
            title="Our Team"
            subtitle="Experienced professionals dedicated to excellence"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                role: "Project Managers",
                count: "50+",
                description: "Experienced professionals managing complex projects",
              },
              {
                role: "Engineers & Technicians",
                count: "200+",
                description: "Skilled professionals across all disciplines",
              },
              {
                role: "Support Staff",
                count: "100+",
                description: "Administrative and operational excellence team",
              },
            ].map((team, index) => (
              <motion.div
                key={team.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg border dark:border-slate-600"
              >
                <div className="text-4xl font-poppins font-bold bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent mb-2">
                  {team.count}
                </div>
                <h4 className="text-xl font-poppins font-bold text-btc-navy dark:text-white mb-3">
                  {team.role}
                </h4>
                <p className="text-btc-charcoal dark:text-gray-300">{team.description}</p>
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
            className="absolute top-0 right-1/4 w-96 h-96 bg-btc-teal rounded-full blur-3xl"
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
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Are you looking to build a career with a company that values integrity,
              excellence, and innovation? We'd love to hear from you.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-gradient-to-r from-btc-teal to-btc-accent text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:shadow-2xl transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
