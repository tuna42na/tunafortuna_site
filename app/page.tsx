import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const destinations = [
  {
    title: "GitHub",
    href: "https://github.com/tuna42na",
    icon: "/images/code.svg",
    external: true,
  },
  {
    title: "Projects",
    href: "https://www.familyandfriendsband.com/",
    icon: "/images/bass.svg",
    external: true,
  },
  {
    title: "About",
    href: "https://www.linkedin.com/in/tuna-fortuna/",
    icon: "/images/resume.svg",
    external: true,
  },
  {
    title: "Writing",
    href: "/blog",
    icon: "/images/code_pen.svg",
    external: false,
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.artwork} aria-hidden="true">
            <Image
              src="/images/falling-rocks.png"
              alt=""
              fill
              priority
              sizes="(max-width: 700px) 80vw, 42vw"
            />
          </div>
          <nav
            className={styles.destinationGrid}
            aria-label="Explore Tuna Fortuna">
            {destinations.map((destination) => {
              const content = (
                <>
                  <Image
                    src={destination.icon}
                    alt=""
                    width={34}
                    height={34}
                    className={styles.destinationIcon}
                  />
                  <span className={styles.destinationTitle}>
                    {destination.title}
                  </span>
                </>
              );

              return destination.external ? (
                <a
                  className={styles.destination}
                  href={destination.href}
                  key={destination.title}
                  target="_blank"
                  rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <Link
                  className={styles.destination}
                  href={destination.href}
                  key={destination.title}>
                  {content}
                </Link>
              );
            })}
            <Link
              className={styles.centerLogo}
              href="/"
              aria-label="Tuna Fortuna home">
              <Image
                src="/images/tunalogo.svg"
                alt=""
                width={88}
                height={88}
                priority
              />
            </Link>
          </nav>
          <div className={styles.introCopy}>
            <span className={styles.accentLine} aria-hidden="true" />
            <h1 id="intro-title">
              Code, writing, and a few other curiosities.
            </h1>
            <p className={styles.introText}>
              A collection of projects, thoughts, and things I’m learning along
              the way.
            </p>
          </div>
        </section>
        <footer className={styles.footer}>
          © {new Date().getFullYear()} Tuna Fortuna
        </footer>
      </div>
    </main>
  );
}
