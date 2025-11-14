import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 (XXX) XXX-XXXX",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@btccompany.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "New Delhi, India",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can help you achieve your goals"
      />

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-btc-light dark:bg-slate-800">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-btc-navy dark:text-white mb-8">
                Contact Information
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8 mb-12"
              >
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="flex items-start gap-6"
                    >
                      <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-btc-teal to-btc-accent text-white rounded-lg flex-shrink-0 shadow-lg"
                  >
                    <Icon size={32} />
                  </motion.div>
                      <div>
                        <h3 className="text-xl font-poppins font-bold text-btc-navy dark:text-white mb-2">
                          {info.title}
                        </h3>
                        <p className="text-btc-charcoal dark:text-gray-300">{info.content}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-200 dark:bg-slate-700"
              >
                <div className="w-full h-full bg-gradient-to-br from-btc-navy/30 to-btc-blue/30 dark:from-slate-600/50 dark:to-slate-700/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-btc-navy/80 dark:text-gray-400" />
                    <p className="text-btc-navy/80 dark:text-gray-300 font-semibold">
                      Map Location
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-btc-navy dark:text-white mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-poppins font-bold text-green-600 dark:text-green-400 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-600 dark:text-green-300">
                    We've received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-btc-navy dark:text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-btc-navy dark:text-white rounded-lg focus:border-btc-teal focus:ring-2 focus:ring-btc-teal/30 focus:outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-btc-navy dark:text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-btc-navy dark:text-white rounded-lg focus:border-btc-teal focus:ring-2 focus:ring-btc-teal/30 focus:outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-btc-navy dark:text-white font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-btc-navy dark:text-white rounded-lg focus:border-btc-teal focus:ring-2 focus:ring-btc-teal/30 focus:outline-none transition-all placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-btc-navy dark:text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-btc-navy dark:text-white rounded-lg focus:border-btc-teal focus:ring-2 focus:ring-btc-teal/30 focus:outline-none transition-all resize-none placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-btc-teal to-btc-accent text-white py-4 rounded-lg font-poppins font-bold text-lg hover:shadow-lg transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}

              <p className="text-sm text-btc-charcoal dark:text-gray-400 text-center mt-6">
                We'll respond to your inquiry within 24 business hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-btc-navy dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-btc-charcoal dark:text-gray-300">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto space-y-4"
          >
            {[
              {
                question: "What is the typical project duration?",
                answer: "Project duration varies depending on scope and complexity. Our projects typically range from 12 to 36 months. We'll provide a detailed timeline after project assessment.",
              },
              {
                question: "Do you provide maintenance after project completion?",
                answer: "Yes, we offer comprehensive post-project maintenance and support services to ensure optimal performance of installed systems.",
              },
              {
                question: "What certifications do you hold?",
                answer: "We are ISO 9001:2015 certified for quality management and hold various industry-specific certifications and accreditations.",
              },
              {
                question: "How do you ensure project quality?",
                answer: "We follow stringent quality assurance processes, regular inspections, and use only certified materials and equipment throughout the project.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-btc-light dark:bg-slate-800 p-6 rounded-xl border-l-4 border-btc-gold"
              >
                <h3 className="font-poppins font-bold text-btc-navy dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-btc-charcoal dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 md:py-24 bg-btc-navy text-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-poppins font-bold mb-6 bg-gradient-to-r from-btc-teal to-btc-accent bg-clip-text text-transparent">
              Business Hours
            </h2>
            <div className="space-y-4 text-white">
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span>Monday - Friday</span>
                <span className="font-semibold text-btc-teal">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span>Saturday</span>
                <span className="font-semibold text-btc-teal">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between hover:translate-x-1 transition-transform">
                <span>Sunday</span>
                <span className="font-semibold text-btc-accent">Closed</span>
              </div>
            </div>
            <p className="mt-6 text-gray-300">
              For emergency inquiries, please call our 24/7 hotline.
            </p>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-btc-teal/50 transition-all hover:shadow-lg hover:shadow-btc-teal/20"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6">
                Response Time
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-btc-gold font-bold">✓</span>
                  Email inquiries: Within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-btc-gold font-bold">✓</span>
                  Phone calls: Immediate response during business hours
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-btc-gold font-bold">✓</span>
                  Project quotes: Within 3-5 business days
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
