import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Tuna Fortuna",
  description: "Posts from Tuna Fortuna.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="blog-card p-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        {posts.length === 0 && <p>No posts yet — check back soon.</p>}

        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <time
                  dateTime={post.date}
                  className="block text-sm text-gray-500">
                  {post.date}
                </time>
                <h2 className="text-xl font-semibold group-hover:underline">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-gray-700">{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="inline-block mt-8 text-sm text-gray-500 hover:underline">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
