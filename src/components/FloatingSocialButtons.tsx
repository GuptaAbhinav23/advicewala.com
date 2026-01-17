import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";

const FloatingSocialButtons = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <motion.a
        href="https://youtube.com/@advicewala"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Visit our YouTube channel"
      >
        <Youtube className="w-6 h-6 text-white" />
      </motion.a>
      
      <motion.a
        href="https://instagram.com/advicewala"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Visit our Instagram page"
      >
        <Instagram className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingSocialButtons;
