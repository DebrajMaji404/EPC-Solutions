import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Zap,
  Wrench,
  Building2,
  Hammer,
  Lightbulb,
  Settings,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: "EPC Solutions",
      description:
        "Complete Engineering, Procurement & Construction services for industrial projects with end-to-end solutions.",
    },
    {
      icon: Hammer,
      title: "Civil & Structural",
      description:
        "Expert civil engineering and structural design for buildings, bridges, and industrial infrastructure.",
    },
    {
      icon: Wrench,
      title: "Mechanical Erection",
      description:
        "Professional mechanical equipment installation and erection with precision and expertise.",
    },
    {
      icon: Lightbulb,
      title: "Electrical Installation",
      description:
        "Complete electrical systems design and installation for industrial and commercial facilities.",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and technical support to ensure optimal performance of all systems.",
    },
    {
      icon: Zap,
      title: "Project Management",
      description:
        "Strategic project oversight and management ensuring timely delivery and quality standards.",
    },
  ];

  const achievements = [
    { value: 20, label: "Years Experience", suffix: "+" },
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 150, label: "Active Clients", suffix: "+" },
  ];

  const partners = [
    "Partner 1",
    "Partner 2",
    "Partner 3",
    "Partner 4",
    "Partner 5",
    "Partner 6",
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
        title="Engineering the Future"
        subtitle="With Integrity and Excellence - The Bharat Trading Company delivers world-class EPC solutions and industrial expertise."
        ctaText="Explore Services"
        ctaHref="#services"
      />

      {/* About BTC Section */}
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
                About The Bharat Trading Company
              </h2>
              <p className="text-btc-slate dark:text-gray-300 leading-relaxed mb-4">
                With over 20 years of expertise in the engineering and construction
                industry, The Bharat Trading Company has established itself as a
                trusted partner for complex industrial projects across India and
                beyond.
              </p>
              <p className="text-btc-slate dark:text-gray-300 leading-relaxed mb-6">
                Our commitment to excellence, integrity, and innovation drives every
                project we undertake. We combine cutting-edge technology with
                experienced teams to deliver results that exceed expectations.
              </p>
              <ul className="space-y-2 text-btc-slate dark:text-gray-300">
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                  <span className="text-btc-teal font-bold">✓</span> End-to-end
                  project solutions
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                  <span className="text-btc-teal font-bold">✓</span> Expert technical
                  teams
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                  <span className="text-btc-teal font-bold">✓</span> 20+ years of
                  experience
                </li>
                <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                  <span className="text-btc-teal font-bold">✓</span> Quality assurance
                  certified
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border dark:border-slate-700"
            >
              <div className="aspect-video bg-gradient-to-br from-btc-teal to-btc-accent rounded-xl flex items-center justify-center">
                <motion.svg
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 text-white opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="section-container">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive solutions tailored to your industrial needs"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-btc-navy text-white">
        <div className="section-container">
          <SectionTitle
            title="Our Achievements"
            subtitle="Trusted by industry leaders across India"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter
                  value={achievement.value}
                  label={achievement.label}
                  suffix={achievement.suffix}
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-16 border-t border-gray-600"
          >
            <h3 className="text-2xl font-poppins font-bold text-center mb-8 text-white">
              Why Choose BTC?
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Quality First",
                  desc: "ISO certified processes",
                },
                {
                  title: "On-Time Delivery",
                  desc: "Proven track record",
                },
                {
                  title: "Expert Teams",
                  desc: "20+ years experience",
                },
                {
                  title: "Cost Effective",
                  desc: "Competitive pricing",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-btc-teal/30 transition-all"
                >
                  <h4 className="font-poppins font-bold mb-2 bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 dark:text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners/Clients Section */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <SectionTitle
            title="Trusted by Industry Leaders"
            subtitle="Partnerships that drive success"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 flex items-center justify-center h-24 shadow-md hover:shadow-lg transition-shadow border dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-2xl font-poppins font-bold text-btc-navy dark:text-white">
                    {partner}
                  </div>
                </div>
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-btc-teal rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-btc-accent rounded-full blur-3xl"
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
              Get in touch with our team today and let's build the future together.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-gradient-to-r from-btc-teal to-btc-accent text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:shadow-2xl transition-all"
            >
              Contact Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
