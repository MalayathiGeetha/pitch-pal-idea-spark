
import { Mic, Brain, FileText, Database, Edit, Trash2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic size={32} />,
      title: "Voice Recording",
      description: "Simply record yourself talking about your startup idea. No scripts, no preparation needed - just speak naturally about your vision.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Brain size={32} />,
      title: "AI Optimization",
      description: "Our AI transcribes your audio and uses OpenAI to create a compelling one-liner and Guy Kawasaki-style pitch deck structure.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <FileText size={32} />,
      title: "Perfect Pitch Structure",
      description: "Get a professionally structured pitch deck following Guy Kawasaki's proven 10/20/30 formula for maximum impact.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Database size={32} />,
      title: "Pitch Library",
      description: "Access all your optimized pitches in one place. Keep track of different versions and iterations of your ideas.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Edit size={32} />,
      title: "Edit & Refine",
      description: "Fine-tune your generated pitches. Edit the one-liner or modify the deck structure to match your vision perfectly.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Trash2 size={32} />,
      title: "Manage Pitches",
      description: "Keep your library organized. Delete outdated pitches and focus on the ones that matter most to your current goals.",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Create
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Perfect Pitches</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From voice recording to pitch optimization, we've got every step covered
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl inline-block mb-6`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
