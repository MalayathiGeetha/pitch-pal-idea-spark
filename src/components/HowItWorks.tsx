
const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Simple Process, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Powerful Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four simple steps to transform your raw idea into an investor-ready pitch that gets results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl inline-block mb-6 relative">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-2xl">🎤</span>
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-full">01</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Record Your Vision</h3>
            <p className="text-gray-300">
              Press record and talk naturally about your startup idea - no scripts needed - just share your passion and vision as you would to a friend.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 rounded-2xl inline-block mb-6 relative">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-pink-600 text-2xl">💬</span>
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-full">02</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Transcription</h3>
            <p className="text-gray-300">
              Our advanced speech-to-text technology converts your recording into clean, accurate text while preserving the essence of your message.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl inline-block mb-6 relative">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-green-600 text-2xl">✨</span>
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-full">03</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Analysis</h3>
            <p className="text-gray-300">
              OpenAI analyzes your content, identifies key points, and intelligently structures everything according to proven pitch frameworks.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl inline-block mb-6 relative">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-orange-600 text-2xl">📄</span>
              </div>
              <div className="absolute -top-2 -left-2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-full">04</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Perfect Output</h3>
            <p className="text-gray-300">
              Receive a compelling one-liner and complete pitch deck structure, ready to impress investors and stakeholders.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800/30 rounded-3xl p-12 border border-gray-700">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-yellow-400">Startup Idea?</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of founders who've already turned their vision into compelling, investor-ready pitches with the power of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2">
              <span>🎤</span>
              Start Your First Pitch
            </button>
            <button className="text-white px-8 py-4 rounded-xl text-lg font-semibold hover:text-gray-300 transition-colors flex items-center justify-center gap-2">
              Learn More <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
