import React from "react";
import { motion } from "framer-motion";
import { Home, ClipboardList, User } from "lucide-react";

export function FloatingNavbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 md:top-4 md:bottom-auto left-[50%] transform -translate-x-[50%] bg-white/30 backdrop-blur-md rounded-full shadow-md px-6 py-3 z-[1000]"
    >
      <ul className="flex items-center space-x-6">
        <li className="text-gray-600 hover:text-purple-700 flex items-center space-x-2 cursor-pointer">
          <Home size={20} />
          <span className="hidden md:inline">Home</span>
        </li>
        <li className="text-gray-600 hover:text-purple-700 flex items-center space-x-2 cursor-pointer">
          <ClipboardList size={20} />
          <span className="hidden md:inline">Quiz</span>
        </li>
        <li className="text-gray-600 hover:text-purple-700 flex items-center space-x-2 cursor-pointer">
          <User size={20} />
          <span className="hidden md:inline">Account</span>
        </li>
      </ul>
    </motion.div>
  );
}
