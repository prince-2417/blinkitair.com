import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/mockData';
import { BookOpen, Search, Clock, Calendar, ArrowRight, User, Sparkles, Mail } from 'lucide-react';

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Travel Tips', 'Packing Guides', 'Island Hopping'];

  const filteredBlogs = BLOGS.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      
      {/* FULL HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF] text-[#4C1D95] overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7E22CE] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
            <BookOpen className="w-4 h-4 text-white" /> Seychelles Travel Journal & Guides
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4C1D95] leading-none">
            Insider Knowledge & <br className="hidden sm:inline" />
            <span className="text-[#7E22CE]">Island Travel Articles</span>
          </h1>

          <p className="text-[#581C87] max-w-3xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
            Expert recommendations on packing, best seasons to visit, hidden coves, and island-hopping itineraries written by local specialists.
          </p>

          {/* Integrated Search & Filter Controls inside Hero */}
          <div className="max-w-2xl mx-auto pt-6 space-y-4">
            <div className="relative shadow-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search travel guides, packing tips, or beach recommendations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#C084FC]/40 focus:outline-none focus:border-[#7E22CE] text-sm bg-white text-[#4C1D95] font-semibold"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all shadow-sm ${
                    selectedCategory === cat
                      ? 'bg-[#7E22CE] text-white scale-105'
                      : 'bg-white text-[#4C1D95] hover:bg-[#F3E8FF] border border-[#C084FC]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C084FC]/30">
          <h2 className="text-2xl font-black text-[#4C1D95]">
            Showing <span className="text-[#7E22CE]">{filteredBlogs.length}</span> Travel Articles
          </h2>
          <span className="text-xs text-gray-500 font-bold hidden sm:inline">Latest Travel Advice</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#7E22CE] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#7E22CE]" /> {blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#7E22CE]" /> {blog.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-[#4C1D95] group-hover:text-[#7E22CE] transition-colors leading-snug">
                    {blog.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#581C87] font-medium leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#4C1D95]">
                    <User className="w-4 h-4 text-[#7E22CE]" />
                    <span>By {blog.author}</span>
                  </div>

                  <Link 
                    to={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-5 py-2.5 rounded-2xl shadow-md transition-all group-hover:translate-x-1"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#C084FC]/30 text-center space-y-4">
          <div className="w-12 h-12 bg-[#F3E8FF] text-[#7E22CE] rounded-full flex items-center justify-center mx-auto border border-[#C084FC]/30">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-[#4C1D95]">Subscribe to Weekly Seychelles Travel Secrets</h2>
          <p className="text-xs sm:text-sm text-[#581C87] max-w-lg mx-auto font-medium">
            Get flight sale alerts, secret resort deals, and updated travel guides delivered straight to your inbox.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Seychelles Travel Newsletter!'); }} className="max-w-md mx-auto flex gap-2 pt-2">
            <input 
              type="email" 
              required 
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#7E22CE] text-xs font-medium"
            />
            <button 
              type="submit" 
              className="bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-6 py-3 rounded-2xl transition-all shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
