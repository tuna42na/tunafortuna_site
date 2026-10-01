---
title: "Welcome to the Blog"
description: "The first post, mostly to prove the plumbing works."
tags: ["meta"]
---

## Hello, world

This is the first post on the blog. It's written in **Markdown**, stored as a
file in `content/blog/`, and rendered through a shared `MarkdownRenderer`
component so every post gets the same styling automatically.

### Writing a new post

1. Add a new file to `content/blog/` named `YYYY-MM-DD-topic-slug.md`.
2. Fill in the frontmatter (`title`, `description`, optional `tags`).
3. Write the body in Markdown below the frontmatter.

That's it — no code changes needed. The post shows up on `/blog` automatically,
sorted newest first, and is statically generated at build time.

```ts
// code blocks get syntax highlighting out of the box
const greeting: string = "hi";
```

> Supports blockquotes, tables, and the rest of [GitHub-flavored Markdown](https://github.github.com/gfm/).
