import type { Metadata } from "next";
import Image from "next/image";
import SiteNavigation from "@/components/SiteNavigation";
import styles from "@/components/FeaturePage.module.css";
import aboutStyles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Tuna Fortuna",
  description: "Software engineer, product developer, and lead bassist.",
};

const skills = [
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "React Native",
  "Dart",
  "Flutter",
  "CSS",
  "PostgreSQL",
  "Redis",
  "GraphQL",
  "Ruby",
  "Rails",
  "GoLang",
  "Docker",
  "Kubernetes",
  "Google Analytics | Tag Manager | Ads",
  "AWS",
  "Bash",
  "Jenkins",
  "GHA",
  "CI/CD",
  "NeoVim",
  "Herdr",
  "ClaudeCode",
  "GitHub Copilot",
  "Accessibility",
  "Design Architecture",
  "Product Development",
  "Agile Methodologies",
  "Scrum",
  "Kanban",
];

const experience = [
  {
    period: "Nov 2021 – Present",
    role: "Senior Software Engineer",
    place: "GroundFloor",
    description:
      "Shipped mobile and full-stack product features across React Native, Vue, GraphQL, Rails, and PostgreSQL. Built reusable UI and animation systems, improved analytics-informed UX, and streamlined CI/CD so releases went from hours to minutes.",
  },
  {
    period: "2019 – 2020",
    role: "Fiber Optic Technician",
    place: "Bazemore Fiber Optics",
    description:
      "Prepared and spliced ribbon fiber cables, and analyzed OTDR reports to identify breaks, bends, and weak splices.",
  },
  {
    period: "Jan 2017 – 2021",
    role: "UI and SEO Technical Support",
    place: "Perfect Pitch Concepts",
    description:
      "Improved SEO, site performance, and user experience through technical audits, WordPress maintenance, and analysis of search, traffic, and advertising data.",
  },
  {
    period: "2013 – Present",
    role: "Musician / Owner",
    place: "Family and Friends LLC",
    description:
      "Collaborate on music, creative direction, and release branding, while managing business operations and bookkeeping for the LLC.",
  },
];

const elsewhere = [
  { label: "GitHub", href: "https://github.com/tuna42na" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tuna-fortuna/" },
  { label: "Goodreads", href: "https://www.goodreads.com/tuna_fortuna" },
  { label: "Instagram", href: "https://www.instagram.com/tuna42na/" },
  { label: "Family & Friends", href: "https://www.familyandfriendsband.com/" },
];

export default function AboutPage() {
  return (
    <div className="contentPage">
      <div className="contentFrame">
        <SiteNavigation active="About" />
        <main className="contentMain">
          <p className="contentEyebrow">Behind the curtain</p>
          <h1 className="blogTitle">About</h1>
          <div className={aboutStyles.intro}>
            <div>
              <p className="blogLead">
                Software engineer, product developer, philosopher, and lead
                bassist.
              </p>

              <div className={styles.prose}>
                <p>
                  I build thoughtful, accessible applications, and create music
                  and community with my group, Family &amp; Friends. I believe
                  that the best outcomes come from collaboration and shared
                  mission-driven vision.
                </p>
              </div>

              <div className={styles.actions}>
                <a
                  className={styles.button}
                  href="/images/TunaFortunaResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  Download résumé
                </a>
                <a
                  className={styles.button}
                  href="https://www.linkedin.com/in/tuna-fortuna/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn →
                </a>
              </div>
            </div>
            <Image
              className={aboutStyles.portrait}
              src="/images/profile-pic.png"
              alt="Tuna Fortuna smiling, wearing glasses"
              width={612}
              height={612}
              sizes="(max-width: 600px) 220px, 250px"
            />
          </div>

          <section className={styles.section} aria-labelledby="experience">
            <div className={styles.sectionHeader}>
              <h2 id="experience" className={styles.sectionTitle}>
                Experience
              </h2>
            </div>
            <ul className={styles.list}>
              {experience.map((item) => (
                <li
                  className={styles.listRow}
                  key={`${item.role}-${item.place}`}>
                  <span className={styles.listLabel}>{item.period}</span>
                  <div>
                    <h3 className={styles.listTitle}>{item.role}</h3>
                    <p className={styles.cardText}>{item.place}</p>
                    <p className={styles.cardText}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="skills">
            <div className={styles.sectionHeader}>
              <h2 id="skills" className={styles.sectionTitle}>
                Toolkit
              </h2>
            </div>
            <ul className={styles.tags} style={{ marginTop: 18 }}>
              {skills.map((skill) => (
                <li key={skill} className={styles.tag}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="external-links">
            <div className={styles.sectionHeader}>
              <h2 id="external-links" className={styles.sectionTitle}>
                External Links
              </h2>
            </div>
            <div className={styles.links} style={{ marginTop: 18 }}>
              {elsewhere.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  {link.label} →
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
