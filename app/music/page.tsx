import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import styles from "@/components/FeaturePage.module.css";

export const metadata: Metadata = {
  title: "Music | Tuna Fortuna",
  description: "Bass, bands, and recordings from Tuna Fortuna.",
};

const BAND_SITE = "https://www.familyandfriendsband.com/";
const BAND_TIDAL = "https://tidal.com/artist/5570217/u";

// Placeholder entries — set embedUrl to a Spotify/Bandcamp/YouTube embed URL to show a player.
const releases: {
  title: string;
  year: string;
  note?: string;
  embedUrl?: string;
  link?: string;
}[] = [
  {
    title: "Kid Spirit",
    year: "2026",
    note: "Kid Spirit",
    embedUrl: "https://embed.tidal.com/albums/420711031",
    link: BAND_TIDAL,
  },
  {
    title: "Felix Culpa",
    year: "2018",
    note: "Felix Culpa",
    embedUrl: "https://embed.tidal.com/albums/100727249",
    link: BAND_TIDAL,
  },
  {
    title: "XOXO",
    year: "2015",
    note: "XOXO",
    embedUrl: "https://embed.tidal.com/albums/47396686",
    link: BAND_TIDAL,
  },
  {
    title: "Love You Mean It",
    year: "2014",
    note: "Love You Mean It",
    embedUrl: "https://embed.tidal.com/albums/40504301",
    link: BAND_TIDAL,
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
  { label: "Bass", value: "1979 Music Man Sabre | 1980 G&L L-2000" },
  { label: "Amp", value: "Hartke LH500 | 2x15 Custom Sunn Replica Cabinet" },
  {
    label: "Pedals",
    value:
      "Boss OC-3 | MXR M80 | Electro-Harmonix Mel9 | Electro-Harmonix Superego",
  },
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
            <ul className={`${styles.cardGrid} ${styles.releaseGrid}`}>
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
