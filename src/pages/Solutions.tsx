
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building, Briefcase, Rocket, Target } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Building className="w-12 h-12 text-purple-400" />,
      title: "Enterprise Solutions",
      description: "Scale your pitch creation across large organizations with custom AI training and enterprise-grade security.",
      features: ["Custom AI models", "SSO integration", "Advanced analytics", "White-label options"]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-pink-400" />,
      title: "Sales Teams",
      description: "Empower your sales team with consistent, high-quality pitches that convert prospects into customers.",
      features: ["CRM integration", "Performance tracking", "A/B testing", "Team templates"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Startups",
      description: "Perfect your investor pitch with AI-powered insights and proven frameworks from successful startups.",
      features: ["Investor pitch templates", "Market analysis", "Financial projections", "Pitch deck export"]
    },
    {
      icon: <Target className="w-12 h-12 text-green-400" />,
      title: "Marketing Agencies",
      description: "Create compelling client pitches and proposals that win more business and showcase your expertise.",
      features: ["Client proposal templates", "Brand customization", "Multi-client management", "ROI calculators"]
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
              Solutions for Every <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Industry</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Tailored AI-powered pitch solutions designed for your specific business needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-3xl font-bold text-white ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Pitches?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already creating better pitches with Pitch Pal
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
