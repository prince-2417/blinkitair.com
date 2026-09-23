import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS } from '../data/mockData';
import { ArrowLeft, Clock, Calendar, User, Phone, Share2, BookOpen, CheckCircle } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = BLOGS.find(b => b.id === id) || BLOGS[0];
  const relatedBlogs = BLOGS.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <div className="bg-[#FAF5FF] min-h-screen pb-16">
      {/* Top Banner & Breadcrumb */}
      <div className="bg-[#F3E8FF] text-[#4C1D95] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#C084FC]/30">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 bg-white text-[#7E22CE] px-4 py-2 rounded-full font-bold text-xs transition-all border border-[#C084FC]/30 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3 text-xs font-bold text-[#7E22CE]">
            <span className="bg-[#7E22CE] text-white px-3 py-1 rounded-full uppercase">{blog.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#7E22CE]" /> {blog.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#7E22CE]" /> {blog.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-[#4C1D95]">{blog.title}</h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-[#7E22CE] text-white font-black flex items-center justify-center text-sm shadow-sm">
              {blog.author[0]}
            </div>
            <div>
              <div className="font-extrabold text-sm text-[#4C1D95]">{blog.author}</div>
              <div className="text-xs text-[#7E22CE] font-semibold">{blog.authorRole}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 space-y-10">
        
        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-80 sm:h-[450px]">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#C084FC]/30 space-y-8">
          <div 
            className="prose prose-purple max-w-none text-[#581C87] leading-relaxed space-y-4 text-sm sm:text-base font-medium"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Hotline CTA inside article */}
          <div className="bg-[#F3E8FF] text-[#4C1D95] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C084FC]/30 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-[#7E22CE] uppercase">Planning Your Trip?</span>
              <h3 className="text-lg font-black text-[#4C1D95]">Call Seychelles Travel Desk 24/7</h3>
              <p className="text-xs text-[#581C87]">Get exclusive flight & hotel packages calculated by our specialists.</p>
            </div>
            <a 
              href="tel:+18882109189" 
              className="flex items-center gap-2 bg-[#7E22CE] hover:bg-[#581C87] text-white font-black text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call +1-888-210-9189</span>
            </a>
          </div>

          {/* Article Footer & Author Info */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-[#7E22CE]" />
              <span className="text-xs font-bold text-[#4C1D95]">Written by {blog.author} ({blog.authorRole})</span>
            </div>

            <button 
              onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Article link copied to clipboard!'); }}
              className="flex items-center gap-2 text-xs font-extrabold text-[#4C1D95] bg-[#FAF5FF] px-4 py-2 rounded-xl border border-[#C084FC]/30 hover:bg-[#7E22CE] hover:text-white transition-all shadow-sm"
            >
              <Share2 className="w-4 h-4" /> Share Article
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-[#4C1D95]">Related Travel Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedBlogs.map((rel) => (
              <div key={rel.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#C084FC]/30 p-5 space-y-3">
                <span className="text-[10px] font-black bg-[#7E22CE] text-white px-2.5 py-1 rounded-full shadow-sm">
                  {rel.category}
                </span>
                <h3 className="font-extrabold text-[#4C1D95] text-base leading-snug">{rel.title}</h3>
                <Link to={`/blogs/${rel.id}`} className="text-xs font-bold text-[#7E22CE] hover:underline block pt-2">
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
