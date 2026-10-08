"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { useRef } from "react";
import styles from "./page.module.css";

const destinations = [
  {
    title: "Projects",
    href: "/projects",
    icon: "/images/code.svg",
    external: false,
  },
  {
    title: "Music",
    href: "/music",
    icon: "/images/bass.svg",
    external: false,
  },
  {
    title: "About",
    href: "/about",
    icon: "/images/resume.svg",
    external: false,
  },
  {
    title: "Writing",
    href: "/blog",
    icon: "/images/code_pen.svg",
    external: false,
  },
];

export default function Home() {
  const destinationGridRef = useRef<HTMLElement>(null);

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
            ref={destinationGridRef}
            className={styles.destinationGrid}
            aria-label="Explore Tuna Fortuna"
            onPointerMove={(event) => {
              if (event.pointerType !== "mouse") return;

              const grid = destinationGridRef.current;
              if (!grid) return;

              const bounds = grid.getBoundingClientRect();
              const x = event.clientX - (bounds.left + bounds.width / 2);
              const y = event.clientY - (bounds.top + bounds.height / 2);
              const normalizedX = x / (bounds.width / 2);
              const normalizedY = y / (bounds.height / 2);
              const distance = Math.hypot(normalizedX, normalizedY);
              const strength = Math.min(1, distance);
              const activeCorner =
                normalizedY < 0
                  ? normalizedX < 0
                    ? "--logo-tl"
                    : "--logo-tr"
                  : normalizedX < 0
                    ? "--logo-bl"
                    : "--logo-br";

              ["--logo-tl", "--logo-tr", "--logo-br", "--logo-bl"].forEach(
                (property) =>
                  grid.style.setProperty(
                    property,
                    property === activeCorner
                      ? `${50 - 32 * strength}%`
                      : "50%",
                  ),
              );
            }}
            onPointerLeave={() => {
              const grid = destinationGridRef.current;
              if (!grid) return;

              ["--logo-tl", "--logo-tr", "--logo-br", "--logo-bl"].forEach(
                (property) => grid.style.setProperty(property, "50%"),
              );
            }}>
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
            <h1 id="intro-title">👋🏼 Howdy y&apos;all</h1>
            <p className={styles.introText}>
              This is my collection of musings and works. Documentation of
              discovery and curiosity.
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
