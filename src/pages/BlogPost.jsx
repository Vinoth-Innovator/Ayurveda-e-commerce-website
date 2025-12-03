import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 mb-8">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-8" />
        <div className="prose lg:prose-xl">
          {post.content}
        </div>
        <div className="mt-8">
          <Link to="/blog" className="text-green-600 hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
