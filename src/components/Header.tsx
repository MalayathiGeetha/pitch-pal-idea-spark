
import { Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
              <Mic size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Pitch Pal</h1>
              <p className="text-xs text-gray-400 -mt-1">AI-POWERED PITCH CREATOR</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
            <Link to="/signin" className="border border-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
