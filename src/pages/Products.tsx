
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Zap, Users, Globe } from "lucide-react";

const Products = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "AI-Powered Generation",
      description: "Create compelling pitches in seconds using advanced AI technology trained on successful pitch formats."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Team Collaboration",
      description: "Work together with your team to refine and perfect your pitches with real-time collaboration tools."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Multi-Language Support",
      description: "Generate pitches in multiple languages to reach global audiences and expand your market reach."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["5 pitches per month", "Basic templates", "Email support"]
    },
    {
      name: "Pro",
      price: "$29/month",
      features: ["Unlimited pitches", "Advanced AI models", "Team collaboration", "Priority support"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom AI training", "White-label solution", "Dedicated support", "API access"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Discover the tools that will transform how you create and deliver pitches
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
