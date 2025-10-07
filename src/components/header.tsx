import { motion } from "framer-motion";
import TextType from "./TextType";
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-8  border-b border-cyan-100/20"
    >
      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/40">
            <span className="text-white text-xl md:text-2xl font-bold">C</span>
          </div>
          <TextType
            text={["Cristian", "Full Stack Developer"]}
            typingSpeed={120}
            pauseDuration={1000}
            showCursor={true}
            cursorCharacter="|"
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 text-lg md:text-xl font-semibold tracking-widest"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-right"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
            CRISTIAN
          </h1>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
            PULIDO
          </h2>
        </motion.div>
      </div>
    </motion.header>
  );
};
export default Header;
