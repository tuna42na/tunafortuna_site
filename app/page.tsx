import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        width={48}
        height={48}
        className={styles.tunaHeaderLogo}
        style={{ width: "20%" }}
        src="/images/tunalogo.svg"
        alt="circular tuna fortuna logo"
      />

      <div className="container">
        <div className={styles.outboundLinksContainer}>
          <div className={`${styles.iconTile} ${styles.code}`}>
            <a
              href="https://github.com/tuna42na"
              target="_blank"
              rel="noopener noreferrer">
              <Image width={48} height={48} src="/images/code.svg" alt="Code" />
            </a>
            <h2 className={styles.iconLabel}>Github</h2>
          </div>
          <div className={`${styles.iconTile} ${styles.music}`}>
            <a
              href="https://www.familyandfriendsband.com/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={48}
                height={48}
                src="/images/bass.svg"
                alt="Music"
              />
            </a>
            <h2 className={styles.iconLabel}>Music</h2>
          </div>
          <div className={`${styles.iconTile} ${styles.codepen}`}>
            <Link href="/blog">
              <Image
                width={48}
                height={48}
                src="/images/code_pen.svg"
                alt="Hot takes"
              />
            </Link>
            <h2 className={styles.iconLabel}>Hot Takes</h2>
          </div>
          <div className={`${styles.iconTile} ${styles.resume}`}>
            <a
              href="https://www.linkedin.com/in/tuna-fortuna/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={100}
                height={48}
                src="/images/resume.svg"
                alt="Resume"
              />
            </a>
            <h2 className={styles.iconLabel}>LinkedIn</h2>
          </div>
          <a className={styles.logoLink} href="#">
            <Image
              width={48}
              height={48}
              className={styles.tunaLogo}
              src="/images/tunalogo.svg"
              alt="center circular tuna fortuna logo"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
