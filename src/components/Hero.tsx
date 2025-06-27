
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-gray-800/50 rounded-full px-4 py-2 mb-8 border border-gray-700">
            <span className="text-yellow-400 mr-2">⚡</span>
            <span className="text-gray-300 text-sm font-medium">Transform Ideas into Winning Pitches</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            From Voice to
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Victory</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Record your startup idea and watch AI transform it into a powerful one-liner and Guy Kawasaki-style pitch deck structure in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2">
              <span>🎤</span>
              Start Recording Your Pitch
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700 flex items-center justify-center gap-2">
              <span>📄</span>
              View Sample Pitch
            </button>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">30 sec</div>
              <div className="text-gray-300">Average recording time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.8%</div>
              <div className="text-gray-300">Transcription accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">AI-powered optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
