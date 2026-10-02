import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import SiteNavigation from "@/components/SiteNavigation";

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
    return {
      title: `${post.title} | Tuna Fortuna`,
      description: post.description,
    };
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
  const readMinutes = Math.max(
    1,
    Math.ceil(post.content.trim().split(/\s+/).length / 220),
  );

  return (
    <div className="contentPage">
      <div className="contentFrame">
        <SiteNavigation active="Writing" />
        <main className="contentMain articleMain">
          <Link href="/blog" className="allPostsLink">
            ← All posts
          </Link>
          <header className="articleHeader">
            <time dateTime={post.date} className="postDate">
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="articleMeta">· &nbsp; {readMinutes} min read</span>
            <h1 className="articleTitle">{post.title}</h1>
            {post.description && (
              <p className="articleSummary">{post.description}</p>
            )}
          </header>
          <div className="articleArtwork" aria-hidden="true" />
          <MarkdownRenderer content={post.content} />
        </main>
      </div>
    </div>
  );
}
