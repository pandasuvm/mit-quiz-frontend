import React from "react";
import { motion } from "framer-motion";
import { Home, ClipboardList, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FloatingNavbar() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 md:top-4 md:bottom-auto left-[50%] transform -translate-x-[50%] bg-white/80 backdrop-blur-lg rounded-full shadow-lg px-6 py-3 z-[1000] border border-gray-300"
    >
      <ul className="flex items-center space-x-6">
        <li 
          className="text-gray-900 hover:text-purple-800 flex items-center space-x-2 cursor-pointer transition-colors duration-300"
          onClick={() => navigate("/")}
        >
          <Home size={20} />
          <span className="hidden md:inline">Home</span>
        </li>
        <li 
          className="text-gray-900 hover:text-purple-800 flex items-center space-x-2 cursor-pointer transition-colors duration-300"
          onClick={() => navigate("/quiz")}
        >
          <ClipboardList size={20} />
          <span className="hidden md:inline">Quiz</span>
        </li>
        <li 
          className="text-gray-900 hover:text-purple-800 flex items-center space-x-2 cursor-pointer transition-colors duration-300"
          onClick={() => navigate("/account")}
        >
          <User size={20} />
          <span className="hidden md:inline">Account</span>
        </li>
      </ul>
    </motion.div>
  );
}
