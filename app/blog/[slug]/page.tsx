import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} | Tuna Fortuna`, description: post.description };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="blog-card p-8">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">
          ← All posts
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-1">{post.title}</h1>
        <time dateTime={post.date} className="block text-sm text-gray-500 mb-6">
          {post.date}
        </time>

        <MarkdownRenderer content={post.content} />
      </div>
    </div>
  );
}
