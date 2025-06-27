
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo and tagline */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
            <span className="text-white text-xl">✨</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Pitch Pal</h3>
            <p className="text-sm text-gray-400 -mt-1">AI-POWERED PITCH CREATOR</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Transforming startup visions into winning pitches with the power of AI. Built for founders, by founders.
        </p>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <span className="text-red-500">❤️</span> for the startup community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
