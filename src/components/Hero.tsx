
import { ArrowDown, Mic, Zap, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-8 border border-blue-500/30">
            <span className="text-blue-300 text-sm font-medium">🚀 Transform Your Ideas with AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Voice Into
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Perfect Pitches</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Record yourself talking about your startup idea and watch AI transform it into 
            a compelling one-liner and Guy Kawasaki-style pitch deck structure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-2xl">
              Start Recording Now
            </button>
            <button className="bg-gray-800/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-700/50 transition-colors border border-gray-700">
              Watch Demo
            </button>
          </div>
          
          {/* Process visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl">
                <Mic size={24} className="text-white" />
              </div>
              <span className="text-gray-300 font-medium">Record</span>
            </div>
            
            <ArrowDown className="text-gray-500 rotate-0 md:rotate-90" size={20} />
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                <Zap size={24} className="text-white" />
              </div>
              <span className="text-gray-300 font-medium">AI Optimize</span>
            </div>
            
            <ArrowDown className="text-gray-500 rotate-0 md:rotate-90" size={20} />
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                <FileText size={24} className="text-white" />
              </div>
              <span className="text-gray-300 font-medium">Perfect Pitch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
