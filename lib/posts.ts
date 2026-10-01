import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "content/blog");

// Filenames must look like `YYYY-MM-DD-topic-slug.md`.
const FILENAME_PATTERN = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;

export type PostMeta = {
  slug: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
};

export type Post = PostMeta & {
  content: string;
};

function parseFilename(filename: string): { date: string; slug: string } {
  const match = FILENAME_PATTERN.exec(filename);
  if (!match) {
    throw new Error(
      `Blog post "${filename}" does not match the required "YYYY-MM-DD-topic-slug.md" naming convention.`
    );
  }
  const [, date] = match;
  return { date, slug: filename.replace(/\.md$/, "") };
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => parseFilename(filename).slug);
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { date } = parseFilename(`${slug}.md`);
  const { data, content } = matter(fileContents);

  if (!data.title) {
    throw new Error(`Blog post "${slug}.md" is missing a "title" in its frontmatter.`);
  }

  return {
    slug,
    date,
    title: data.title,
    description: data.description,
    tags: data.tags,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const { slug: postSlug, date, title, description, tags } = getPostBySlug(slug);
      return { slug: postSlug, date, title, description, tags };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
