import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOGS } from '../data/mockData';

export default function TravelGuides() {
  return (
    <section id="blogs" className="py-20 bg-[#FAF5FF] border-t border-[#C084FC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#7E22CE] text-xs font-extrabold uppercase tracking-wider border border-[#C084FC]/30 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#7E22CE]" />
            <span>Seychelles Travel Advice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#4C1D95] tracking-tight">
            Latest Travel Guides & <span className="text-[#7E22CE]">Island Insights</span>
          </h2>
          <p className="text-[#581C87] text-base font-semibold">
            Expert recommendations on packing, best seasons to visit, hidden beaches, and island-hopping secrets.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.slice(0, 3).map((blog) => (
            <div 
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#C084FC]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#7E22CE] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#7E22CE]" /> {blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#7E22CE]" /> {blog.readTime}</span>
                  </div>

                  <h3 className="font-extrabold text-[#4C1D95] text-xl group-hover:text-[#7E22CE] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-[#581C87] font-medium line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link 
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#4C1D95] hover:text-[#7E22CE] transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 text-[#7E22CE]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
