'use client';

import Link from 'next/link';
import BlogCard from './BlogCard';
import { Article } from '../utils/mdx-loader';

interface RelatedPostsProps {
  articles: Article[];
}

export default function RelatedPosts({ articles }: RelatedPostsProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
            Read Next
          </h2>
          <div className="w-16 h-1 bg-[#FF5E00]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
