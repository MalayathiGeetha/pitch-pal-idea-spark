
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "10 Essential Elements of a Winning Startup Pitch",
      excerpt: "Learn the key components that make investor pitches successful, from problem identification to financial projections.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Startup Tips",
      image: "/placeholder.svg"
    },
    {
      title: "How AI is Revolutionizing Pitch Creation",
      excerpt: "Discover how artificial intelligence is transforming the way professionals create compelling presentations and pitches.",
      author: "Michael Rodriguez",
      date: "March 12, 2024", 
      readTime: "7 min read",
      category: "Technology",
      image: "/placeholder.svg"
    },
    {
      title: "The Psychology Behind Persuasive Presentations",
      excerpt: "Understanding the cognitive principles that make some pitches unforgettable while others fall flat.",
      author: "Dr. Emily Watson",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Psychology",
      image: "/placeholder.svg"
    },
    {
      title: "Common Pitch Mistakes and How to Avoid Them",
      excerpt: "Learn from the most common pitching errors that entrepreneurs make and how to sidestep these costly mistakes.",
      author: "James Thompson",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Best Practices",
      image: "/placeholder.svg"
    },
    {
      title: "Building Investor Confidence Through Data Storytelling",
      excerpt: "Master the art of presenting complex data in a way that builds trust and excitement among potential investors.",
      author: "Lisa Park",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Data Science",
      image: "/placeholder.svg"
    },
    {
      title: "The Future of Remote Pitching",
      excerpt: "As remote work becomes the norm, learn how to adapt your pitching strategy for virtual presentations.",
      author: "Alex Kumar",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Remote Work",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Startup Tips", "Technology", "Psychology", "Best Practices", "Data Science", "Remote Work"];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pitch Pal <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Expert insights, tips, and strategies to help you create better pitches and presentations
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full border transition-all ${
                  index === 0 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent' 
                    : 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Post
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">{posts[0].title}</h2>
                <p className="text-gray-300 text-lg mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{posts[0].author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{posts[0].date}</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <button className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                <span className="text-gray-500">Featured Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all">
                <div className="bg-gray-700 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on pitch creation, AI technology, and presentation tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-900 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
