
import { Mic, FileText, Zap, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Mic size={32} />,
      title: "Record Your Idea",
      description: "Hit record and talk naturally about your startup idea. Explain your vision, the problem you're solving, and your solution.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      number: "02",
      icon: <Zap size={32} />,
      title: "AI Processing",
      description: "Our AI transcribes your audio and sends it to OpenAI for analysis, extracting key points and structuring your pitch.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: "03",
      icon: <FileText size={32} />,
      title: "Get Your Pitch",
      description: "Receive a compelling one-liner and a complete pitch deck structure based on Guy Kawasaki's proven formula.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      icon: <CheckCircle size={32} />,
      title: "Refine & Save",
      description: "Edit your pitch if needed and save it to your personal library. Access and manage all your pitches in one place.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your raw ideas into polished pitches in just four simple steps
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="relative">
                  <div className="text-6xl font-bold text-gray-700 absolute -top-4 -left-4 z-0">
                    {step.number}
                  </div>
                  <div className={`bg-gradient-to-r ${step.gradient} p-4 rounded-2xl relative z-10`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-gradient-to-b from-gray-600 to-transparent ml-8 mt-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
