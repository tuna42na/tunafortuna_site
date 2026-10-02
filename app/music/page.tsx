import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import styles from "@/components/FeaturePage.module.css";

export const metadata: Metadata = {
  title: "Music | Tuna Fortuna",
  description: "Bass, bands, and recordings from Tuna Fortuna.",
};

const BAND_SITE = "https://www.familyandfriendsband.com/";

// Placeholder entries — set embedUrl to a Spotify/Bandcamp/YouTube embed URL to show a player.
const releases: {
  title: string;
  year: string;
  note: string;
  embedUrl?: string;
  link?: string;
}[] = [
  {
    title: "Latest release",
    year: "2026",
    note: "Add a Spotify or Bandcamp embed URL here to show an inline player.",
    link: BAND_SITE,
  },
];

// Placeholder — add upcoming shows as { date: "2026-10-12", venue, city, ticketUrl }.
const shows: {
  date: string;
  venue: string;
  city: string;
  ticketUrl?: string;
}[] = [];

const gear = [
  { label: "Bass", value: "Your main bass" },
  { label: "Amp", value: "Your amp" },
  { label: "Pedals", value: "Your pedalboard" },
];

export default function MusicPage() {
  const upcoming = shows.filter(
    (show) => new Date(`${show.date}T23:59:59`) >= new Date(),
  );

  return (
    <div className="contentPage">
      <div className="contentFrame">
        <SiteNavigation active="Music" />
        <main className="contentMain">
          <p className="contentEyebrow">The low end</p>
          <h1 className="blogTitle">Music</h1>
          <p className="blogLead">I play bass in Family &amp; Friends.</p>
          <div className={styles.actions}>
            <a
              className={styles.button}
              href={BAND_SITE}
              target="_blank"
              rel="noopener noreferrer">
              Visit the band site →
            </a>
          </div>

          <section className={styles.section} aria-labelledby="listen">
            <div className={styles.sectionHeader}>
              <h2 id="listen" className={styles.sectionTitle}>
                Listen
              </h2>
            </div>
            <ul className={styles.cardGrid}>
              {releases.map((release) => (
                <li key={release.title}>
                  <article className={styles.card}>
                    <span className={styles.cardMeta}>{release.year}</span>
                    <h3 className={styles.cardTitle}>{release.title}</h3>
                    {release.embedUrl ? (
                      <iframe
                        className={styles.embed}
                        src={release.embedUrl}
                        title={`${release.title} player`}
                        height={152}
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      />
                    ) : (
                      <p className={styles.cardText}>{release.note}</p>
                    )}
                    {release.link && (
                      <div className={styles.links}>
                        <a
                          href={release.link}
                          target="_blank"
                          rel="noopener noreferrer">
                          Listen →
                        </a>
                      </div>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="shows">
            <div className={styles.sectionHeader}>
              <h2 id="shows" className={styles.sectionTitle}>
                Upcoming shows
              </h2>
            </div>
            {upcoming.length === 0 ? (
              <p className={styles.empty}>
                No shows on the calendar right now — check the band site for
                updates.
              </p>
            ) : (
              <ul className={styles.list}>
                {upcoming.map((show) => (
                  <li
                    className={styles.listRow}
                    key={`${show.date}-${show.venue}`}>
                    <time className={styles.listLabel} dateTime={show.date}>
                      {new Date(`${show.date}T12:00:00`).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" },
                      )}
                    </time>
                    <div>
                      <h3 className={styles.listTitle}>{show.venue}</h3>
                      <p className={styles.cardText}>{show.city}</p>
                      {show.ticketUrl && (
                        <div className={styles.links}>
                          <a
                            href={show.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            Tickets →
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className={styles.section} aria-labelledby="gear">
            <div className={styles.sectionHeader}>
              <h2 id="gear" className={styles.sectionTitle}>
                Gear
              </h2>
            </div>
            <ul className={styles.list}>
              {gear.map((item) => (
                <li className={styles.listRow} key={item.label}>
                  <span className={styles.listLabel}>{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
