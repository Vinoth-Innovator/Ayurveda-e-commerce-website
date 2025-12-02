import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="flex-1">
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <article className="flex flex-col gap-4">
            <h1 className="text-text-light dark:text-text-dark tracking-tight text-3xl md:text-5xl font-bold leading-tight px-4 text-left">{post.title}</h1>
            <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal px-4">By {post.author} • {post.date} • 5 min read</p>
            <div className="px-4 py-3">
              <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px]" style={{ backgroundImage: `url("${post.imageUrl}")` }}></div>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none px-4 text-text-light dark:text-text-dark">
              <p>{post.excerpt}</p>
              {/* ... Full blog post content ... */}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
