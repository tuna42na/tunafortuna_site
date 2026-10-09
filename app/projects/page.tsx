import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import styles from "@/components/FeaturePage.module.css";

export const metadata: Metadata = {
  title: "Projects | Tuna Fortuna",
  description: "Things Tuna Fortuna has built.",
};

const GITHUB_USER = "tuna42na";

// Placeholder entries — replace with real projects.
const featured = [
  {
    title: "tunafortuna.com",
    description:
      "This site. A Next.js playground for writing, music, and experiments.",
    tags: ["Next.js", "TypeScript", "CSS Modules"],
    repo: "https://github.com/tuna42na/tunafortuna_site",
    live: "/",
  },
  {
    title: "Family & Friends",
    description: "Website for the band I play bass in.",
    tags: ["Web", "Music"],
    repo: undefined,
    live: "https://www.familyandfriendsband.com/",
  },
];

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

async function getRecentRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=12`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((repo) => !repo.fork).slice(0, 6);
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const repos = await getRecentRepos();

  return (
    <div className="contentPage">
      <div className="contentFrame">
        <SiteNavigation active="Projects" />
        <main className="contentMain">
          <p className="contentEyebrow">The workshop</p>
          <h1 className="blogTitle">Projects</h1>
          <p className="blogLead">Things I’ve built, broken, and rebuilt.</p>

          <section className={styles.section} aria-labelledby="featured">
            <div className={styles.sectionHeader}>
              <h2 id="featured" className={styles.sectionTitle}>
                Featured
              </h2>
            </div>
            <ul className={styles.cardGrid}>
              {featured.map((project) => (
                <li key={project.title}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardText}>{project.description}</p>
                    <ul className={styles.tags}>
                      {project.tags.map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.links}>
                      {project.live && (
                        <a
                          href={project.live}
                          target={
                            project.live.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel="noopener noreferrer">
                          Visit →
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer">
                          Source →
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="recent">
            <div className={styles.sectionHeader}>
              <h2 id="recent" className={styles.sectionTitle}>
                Recently on GitHub
              </h2>
              <a
                className={styles.sectionLink}
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer">
                All repositories →
              </a>
            </div>
            {repos.length === 0 ? (
              <p className={styles.empty}>
                Couldn’t load repositories right now — see them on GitHub.
              </p>
            ) : (
              <ul className={styles.cardGrid}>
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      className={styles.card}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}>
                      <span className={styles.cardMeta}>
                        {repo.language ?? "Code"}
                        {repo.stargazers_count > 0 &&
                          ` · ★ ${repo.stargazers_count}`}
                      </span>
                      <h3 className={styles.cardTitle}>{repo.name}</h3>
                      <p className={styles.cardText}>
                        {repo.description ?? "No description yet."}
                      </p>
                      <span className={styles.cardMeta}>
                        Updated{" "}
                        {new Date(repo.pushed_at).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
