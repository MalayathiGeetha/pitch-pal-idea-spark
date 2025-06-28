
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleStartRecording = () => {
    navigate("/signup");
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Startup Pitch
            </span>{" "}
            with AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Record your startup idea in your own words. Our AI transforms it into a compelling, 
            investor-ready pitch deck using proven frameworks from industry experts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={handleGetStarted}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started Free
          </Button>
          <Button 
            onClick={handleStartRecording}
            size="lg" 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
          >
            <Mic className="mr-2 h-5 w-5" />
            Start Recording Now
          </Button>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Mic className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Voice to Pitch</h3>
            <p className="text-gray-400">Simply speak about your startup idea and our AI will structure it perfectly</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="bg-pink-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Optimization</h3>
            <p className="text-gray-400">Powered by advanced AI to create compelling investor presentations</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Framework</h3>
            <p className="text-gray-400">Based on Guy Kawasaki's successful pitch deck structure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
