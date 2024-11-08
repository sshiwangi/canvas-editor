import { motion } from "framer-motion";

const AnimatedEditorPreview = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 aspect-video relative overflow-hidden">
      {/* Editor Toolbar */}
      <motion.div
        className="absolute top-4 left-4 right-4 h-12 bg-gray-50 rounded-lg flex items-center px-4 gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
        >
          <ImageIcon className="w-5 h-5 text-white" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
        >
          <Type className="w-5 h-5 text-white" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
        >
          <Palette className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>

      {/* Canvas Content */}
      <div className="mt-16 flex justify-center">
        <div className="relative w-[500px] h-[300px] bg-white rounded-lg shadow-lg">
          {/* Background Element */}
          <motion.div
            className="absolute inset-0 bg-primary-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
          />

          {/* Image Element */}
          <motion.div
            className="absolute left-8 top-8 w-32 h-32 bg-primary-200 rounded-lg overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            drag
            dragConstraints={{ left: 0, right: 300, top: 0, bottom: 150 }}
          >
            <img
              src="/api/placeholder/128/128"
              alt="Draggable element"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Element 1 */}
          <motion.div
            className="absolute left-48 top-8 right-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
          >
            <motion.h2
              className="text-2xl font-bold text-gray-800"
              animate={{
                color: ["#1e293b", "#0369a1", "#1e293b"],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              Create Amazing Designs
            </motion.h2>
          </motion.div>

          {/* Text Element 2 */}
          <motion.div
            className="absolute left-48 top-24 right-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
          >
            <motion.p
              className="text-gray-600"
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              Drag, drop, and customize elements with ease
            </motion.p>
          </motion.div>

          {/* Shape Elements */}
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 bg-primary-600 rounded-full"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 0.2 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.1, opacity: 0.3 }}
            drag
            dragConstraints={{ left: 0, right: 400, top: 0, bottom: 200 }}
          />

          <motion.div
            className="absolute bottom-12 left-32 w-12 h-12 bg-primary-400 rounded-lg rotate-45"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 0.2 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.1, opacity: 0.3 }}
            drag
            dragConstraints={{ left: 0, right: 400, top: 0, bottom: 200 }}
          />
        </div>
      </div>

      {/* Selection Indicator */}
      <motion.div
        className="absolute right-8 bottom-8 px-4 py-2 bg-primary-600 text-white rounded-full text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        Drag elements to reposition
      </motion.div>
    </div>
  );
};

export default AnimatedEditorPreview;
