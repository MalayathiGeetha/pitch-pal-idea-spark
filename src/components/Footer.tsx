
import { Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Mic size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Pitch Pal</h3>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Transform your ideas into perfect pitches with AI
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Pitch Pal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
