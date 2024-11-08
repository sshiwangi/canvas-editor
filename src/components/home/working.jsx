import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Upload, Palette, Sparkles } from "lucide-react";

const Working = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.5, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const steps = [
    {
      number: "1",
      title: "Sign Up and Create a Project",
      description:
        "Create your account and start a new project. Choose from our wide range of templates or start with a blank canvas.",
      Icon: ArrowRight,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      number: "2",
      title: "Upload and Edit Images",
      description:
        "Easily upload your images and use our intuitive tools to edit, crop, and enhance them to perfection.",
      Icon: Upload,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      number: "3",
      title: "Customize Text and Colors",
      description:
        "Add text to your design and customize fonts, sizes, and colors. Use our color picker to find the perfect palette.",
      Icon: Palette,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      number: "4",
      title: "Generate Creative Content",
      description:
        "Use our AI-powered tools to generate unique content, from catchy headlines to creative design elements.",
      Icon: Sparkles,
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5] dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:via-[#333333] dark:to-[#1b1b1b] py-32 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex bg-emerald-500/10 dark:bg-emerald-500/20 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-[#1A1A1A] dark:text-white text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </motion.div>
          <h2 className="text-[64px] leading-[1.1] text-[#1A1A1A] dark:text-white font-normal mt-4 mb-6 tracking-[-0.02em]">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              Create stunning designs
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="block bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"
            >
              in four simple steps
            </motion.span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto"
        >
          {steps.map(
            ({ number, title, description, Icon, gradient }, index) => (
              <motion.div
                key={number}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotate: 1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />

                  <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-blue-500/10 dark:from-emerald-500/20 dark:to-blue-500/20 p-1.5 rounded-2xl mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <motion.div
                    className="absolute -right-3 -top-3"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-white font-medium shadow-lg`}
                    >
                      {number}
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-medium text-[#1A1A1A] dark:text-white mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {title}
                  </h3>
                  <p className="text-[#666666] dark:text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-blue-500/10 dark:from-emerald-500/20 dark:to-blue-500/20 p-1.5 rounded-full">
            <motion.a
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-10 py-5 font-medium text-lg transition-all"
            >
              Get Started Now
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="ml-3 w-6 h-6" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Working;
