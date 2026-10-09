# Tuna Fortuna

Personal site and portfolio for Tuna Fortuna, built with Next.js App Router, React, and TypeScript. It brings together project work, music, an about page, and a Markdown-powered writing section.

## Getting started

Use Node.js and Yarn 4.9.3 (the package manager declared by this repository). Install dependencies and start the development server:

```bash
yarn install
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000). The development server uses Turbopack and refreshes as you edit the app.

## Available commands

| Command      | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `yarn dev`   | Start the local development server with Turbopack.           |
| `yarn lint`  | Run ESLint.                                                  |
| `yarn build` | Create a production build with Turbopack.                    |
| `yarn start` | Serve the production build locally (run `yarn build` first). |

## Site sections

- `/` — Home page with links to the main sections.
- `/projects` — Featured projects and up to six recent, non-fork GitHub repositories. Repository data is fetched from the GitHub users API and revalidated daily; if the request fails, the page shows a fallback message.
- `/music` — Family & Friends band link, Tidal album players, upcoming shows, and bass gear. Releases, shows, and gear are currently maintained in the page source.
- `/about` — Biography, experience, skills, résumé download, and external links.
- `/blog` — Writing index, ordered newest first.
- `/blog/[slug]` — Individual posts rendered from Markdown.

Shared navigation, page styling, and Markdown rendering live in `components/`. Global layout and metadata are defined in `app/layout.tsx`.

## Writing posts

Add a Markdown file under `content/blog/`. Its filename must follow `YYYY-MM-DD-topic-slug.md`, for example `2026-10-08-a-new-post.md`. Each post must have a `title` in its YAML frontmatter; `description` and `tags` are also supported.

```md
---
title: A new post
description: A short summary for the writing index and page metadata.
tags:
	- notes
---

Post content goes here. GitHub Flavored Markdown is supported, including tables and task lists. Fenced code blocks are syntax highlighted.
```

The post date and URL slug are derived from the filename. Posts are read from disk by the server, and their routes are included from the available post files when Next.js generates route parameters.

## Deployment

Build and run the app with the commands above. Choose a host that supports the Next.js runtime and server-side file access, since the site reads post files at runtime/build time and fetches GitHub repository data. Configure any custom domain with the deployment host; `CNAME` is present in the repository for the existing domain setup.
