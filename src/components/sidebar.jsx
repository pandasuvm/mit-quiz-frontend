import React from "react";
import { Home, User, ClipboardList } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 hover:text-yellow-400">
          <Home />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-yellow-400">
          <ClipboardList />
          <span>Quiz</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-yellow-400">
          <User />
          <span>Account</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
