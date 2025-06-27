
const Features = () => {
  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Everything You Need to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Win</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built specifically for founders who know their vision but need help articulating it in a way that investors understand and remember.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Optimized One-Liners */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">⚪</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Optimized One-Liners</h3>
            <p className="text-gray-300 leading-relaxed">
              Transform rambling explanations into crystal-clear, compelling one-sentence pitches that capture attention instantly.
            </p>
          </div>

          {/* Guy Kawasaki Framework */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl inline-block mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">⚡</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Guy Kawasaki Framework</h3>
            <p className="text-gray-300 leading-relaxed">
              Automatically structure your pitch using the proven 10/20/30 rule and essential slides that investors expect to see.
            </p>
          </div>

          {/* Pitch Library */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold">📚</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Pitch Library</h3>
            <p className="text-gray-300 leading-relaxed">
              Access all your optimized pitches in one organized library. Track iterations and evolution of your ideas over time.
            </p>
          </div>

          {/* Easy Editing */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold">✏️</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Easy Editing</h3>
            <p className="text-gray-300 leading-relaxed">
              Fine-tune AI-generated content with intuitive editing tools. Customize tone, focus, and messaging to match your vision.
            </p>
          </div>

          {/* Smart Management */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-2xl inline-block mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">🗂️</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Management</h3>
            <p className="text-gray-300 leading-relaxed">
              Organize your pitch collection with tags, categories, and smart deletion. Keep only what serves your current goals.
            </p>
          </div>

          {/* Investor-Ready */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-2xl inline-block mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-pink-600 font-bold">👥</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Investor-Ready</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every output follows best practices from successful pitch decks. Increase your chances of securing that next meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
