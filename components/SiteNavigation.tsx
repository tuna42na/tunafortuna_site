import Image from "next/image";
import Link from "next/link";
import styles from "./SiteNavigation.module.css";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/tuna42na",
    icon: "/images/code.svg",
    external: true,
  },
  {
    label: "Projects",
    href: "https://www.familyandfriendsband.com/",
    icon: "/images/bass.svg",
    external: true,
  },
  {
    label: "About",
    href: "https://www.linkedin.com/in/tuna-fortuna/",
    icon: "/images/resume.svg",
    external: true,
  },
  {
    label: "Writing",
    href: "/blog",
    icon: "/images/code_pen.svg",
    external: false,
  },
];

export default function SiteNavigation({ active }: { active?: string }) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Tuna Fortuna home">
        <Image src="/images/tunalogo.svg" width={48} height={48} alt="" />
      </Link>
      <nav className={styles.navigation} aria-label="Main navigation">
        {links.map((link) => {
          const content = (
            <>
              <Image src={link.icon} width={18} height={18} alt="" />
              <span>{link.label}</span>
            </>
          );

          return link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-current={active === link.label ? "page" : undefined}>
              {content}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              aria-current={active === link.label ? "page" : undefined}>
              {content}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
