import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import {
  Zap,
  Wrench,
  Building2,
  Hammer,
  Lightbulb,
  Settings,
  CheckCircle,
  Cog,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "EPC Solutions",
      description:
        "Complete Engineering, Procurement & Construction services from conceptualization to final commissioning. We handle all aspects of your industrial project with precision and expertise.",
      details: [
        "Project planning and feasibility studies",
        "Design and engineering",
        "Equipment procurement",
        "Construction and installation",
        "Testing and commissioning",
        "Project handover and support",
      ],
    },
    {
      icon: Hammer,
      title: "Civil & Structural",
      description:
        "Expert civil engineering and structural design for buildings, bridges, dams, and industrial infrastructure. Our team specializes in complex structural solutions.",
      details: [
        "Structural design and analysis",
        "Foundation engineering",
        "Concrete works",
        "Steel structure fabrication",
        "Building construction",
        "Infrastructure development",
      ],
    },
    {
      icon: Wrench,
      title: "Mechanical Erection",
      description:
        "Professional mechanical equipment installation and erection with highest precision standards. From heavy machinery to complex systems.",
      details: [
        "Equipment installation",
        "Alignment and calibration",
        "Pressure vessel erection",
        "Piping systems",
        "Mechanical testing",
        "Quality assurance",
      ],
    },
    {
      icon: Lightbulb,
      title: "Electrical Installation",
      description:
        "Complete electrical systems design and installation for industrial and commercial facilities. High-voltage and low-voltage solutions.",
      details: [
        "Power distribution systems",
        "Cable laying and termination",
        "Transformer installation",
        "Control panel design",
        "Lightning protection",
        "Testing and commissioning",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and technical support to ensure optimal performance and longevity of all systems installed by us.",
      details: [
        "Preventive maintenance",
        "Breakdown repairs",
        "Equipment upgrades",
        "Safety inspections",
        "Performance optimization",
        "24/7 support services",
      ],
    },
    {
      icon: Zap,
      title: "Project Management",
      description:
        "Strategic project oversight and management ensuring timely delivery, quality standards, and cost efficiency throughout the project lifecycle.",
      details: [
        "Schedule management",
        "Cost control",
        "Risk management",
        "Quality assurance",
        "Stakeholder coordination",
        "Performance reporting",
      ],
    },
  ];

  const industries = [
    "Power Plants",
    "Steel Plants",
    "Mining & Quarrying",
    "Chemical Plants",
    "Refineries",
    "Infrastructure",
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
        title="Our Services"
        subtitle="Comprehensive industrial solutions tailored to your specific needs and challenges"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border dark:border-slate-700"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-btc-navy dark:text-white mb-6">
              Why Choose BTC Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-btc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-btc-navy dark:text-white mb-1">Expertise</h4>
                    <p className="text-btc-charcoal dark:text-gray-300">
                      20+ years of experience across multiple industries
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-btc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-btc-navy dark:text-white mb-1">Quality</h4>
                    <p className="text-btc-charcoal dark:text-gray-300">
                      ISO certified processes and standards
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-btc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-btc-navy dark:text-white mb-1">Reliability</h4>
                    <p className="text-btc-charcoal dark:text-gray-300">
                      500+ projects delivered on time
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-btc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-btc-navy dark:text-white mb-1">Innovation</h4>
                    <p className="text-btc-charcoal dark:text-gray-300">
                      Latest technologies and best practices
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-btc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-btc-navy dark:text-white mb-1">Support</h4>
                    <p className="text-btc-charcoal dark:text-gray-300">
                      Comprehensive post-project support
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-btc-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-btc-navy dark:text-white mb-1">Partnership</h4>
                    <p className="text-btc-charcoal dark:text-gray-300">
                      Long-term relationships with clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="section-container">
          <SectionTitle
            title="Service Offerings"
            subtitle="End-to-end solutions for your industrial needs"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-4 bg-btc-light dark:bg-slate-800 rounded-lg"
                    >
                      <service.icon size={32} className="text-btc-blue" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-poppins font-bold text-btc-navy dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-btc-charcoal dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-btc-charcoal dark:text-gray-300"
                      >
                        <span className="text-btc-gold font-bold">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br from-btc-navy to-btc-blue rounded-2xl p-12 text-white flex items-center justify-center min-h-96 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4 opacity-50">
                      {[
                        "🏗️",
                        "🔧",
                        "⚙️",
                        "🔌",
                        "🛠️",
                        "📊",
                      ][index]}
                    </div>
                    <p className="text-gray-200">
                      {service.title} Solutions
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-btc-navy text-white">
        <div className="section-container">
          <SectionTitle
            title="Industries We Serve"
            subtitle="Expertise across diverse industrial sectors"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center cursor-pointer"
              >
                <h3 className="text-xl font-poppins font-bold text-btc-gold">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <SectionTitle
            title="Our Service Process"
            subtitle="Structured approach for project success"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-4 mt-12"
          >
            {[
              { step: "1", title: "Assessment", desc: "Understand requirements" },
              { step: "2", title: "Planning", desc: "Develop strategy" },
              { step: "3", title: "Execution", desc: "Implement solutions" },
              { step: "4", title: "Monitoring", desc: "Track progress" },
              { step: "5", title: "Delivery", desc: "Final handover" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-btc-blue text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h4 className="font-poppins font-bold text-btc-navy dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-btc-charcoal dark:text-gray-300">{item.desc}</p>
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-btc-accent rounded-full blur-3xl"
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
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your project requirements and get a
              personalized proposal.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-gradient-to-r from-btc-teal to-btc-accent text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:shadow-2xl transition-all"
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
