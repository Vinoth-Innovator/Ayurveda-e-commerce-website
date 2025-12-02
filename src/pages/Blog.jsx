import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <main className="flex flex-col gap-8 py-10">
      <div className="flex flex-wrap justify-center text-center gap-3 p-4">
        <div className="flex w-full flex-col items-center gap-3">
          <h1 className="text-[#1c170d] dark:text-gray-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Ayurvedic Insights</h1>
          <p className="text-[#9c8149] dark:text-gray-400 text-base font-normal leading-normal max-w-lg">Explore our journal for wellness tips, recipes, and yogic wisdom to harmonize your mind, body, and spirit.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {blogPosts.map(post => (
          <div key={post.slug} className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-background-dark dark:border dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: `url("${post.imageUrl}")` }}></div>
            <div className="flex flex-col grow p-6">
              <p className="text-[#1c170d] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">{post.title}</p>
              <p className="text-[#9c8149] dark:text-gray-400 text-base font-normal leading-normal mt-2">{post.excerpt}</p>
              <div className="mt-auto pt-4">
                <p className="text-[#9c8149] dark:text-gray-500 text-sm font-normal leading-normal">By {post.author}, {post.date}</p>
                <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-primary font-bold text-sm hover:underline">Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
