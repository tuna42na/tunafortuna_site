import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import SiteNavigation from "@/components/SiteNavigation";

export const metadata: Metadata = {
  title: "Blog | Tuna Fortuna",
  description: "Posts from Tuna Fortuna.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="contentPage">
      <div className="contentFrame">
        <SiteNavigation active="Writing" />
        <main className="contentMain">
          <p className="contentEyebrow">The journal</p>
          <h1 className="blogTitle">Writing</h1>
          <p className="blogLead">
            Notes on philosophy, design, ethics, software, and whatever else
            I&apos;m trying to understand what I feel about. A work in progress.
          </p>

          {posts.length === 0 && <p>No posts yet — check back soon.</p>}

          <ul className="postList">
            {posts.map((post) => (
              <li className="postRow" key={post.slug}>
                <time dateTime={post.date} className="postDate">
                  {new Date(`${post.date}T12:00:00`).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" },
                  )}
                </time>
                <Link href={`/blog/${post.slug}`} className="postInfo">
                  <h2 className="postTitle">{post.title}</h2>
                  {post.description && (
                    <p className="postDescription">{post.description}</p>
                  )}
                </Link>
                <Link
                  href={`/blog/${post.slug}`}
                  className="postArrow"
                  aria-label={`Read ${post.title}`}>
                  →
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
