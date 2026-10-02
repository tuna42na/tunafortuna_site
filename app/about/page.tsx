import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import styles from "@/components/FeaturePage.module.css";

export const metadata: Metadata = {
  title: "About | Tuna Fortuna",
  description: "Frontend developer and lead bassist.",
};

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "CSS",
  "Accessibility",
  "Design systems",
];

// Placeholder timeline — replace with real roles.
const experience = [
  { period: "Now", role: "Frontend Developer", place: "Your company" },
  { period: "Before", role: "Previous role", place: "Previous company" },
];

const elsewhere = [
  { label: "GitHub", href: "https://github.com/tuna42na" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tuna-fortuna/" },
  { label: "Family & Friends", href: "https://www.familyandfriendsband.com/" },
];

export default function AboutPage() {
  return (
    <div className="contentPage">
      <div className="contentFrame">
        <SiteNavigation active="About" />
        <main className="contentMain">
          <p className="contentEyebrow">Hello</p>
          <h1 className="blogTitle">About</h1>
          <p className="blogLead">Frontend developer and lead bassist.</p>

          <div className={styles.prose}>
            <p>
              I build thoughtful, accessible interfaces for the web, and spend
              the rest of my time holding down the low end in Family &amp;
              Friends. This site is where the two overlap.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              className={styles.button}
              href="/images/Tuna-Resume.pdf"
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

          <section className={styles.section} aria-labelledby="elsewhere">
            <div className={styles.sectionHeader}>
              <h2 id="elsewhere" className={styles.sectionTitle}>
                Elsewhere
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
