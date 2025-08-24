import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        width={48}
        height={48}
        id="tunaheaderlogo"
        style={{ width: "20%" }}
        src="/images/tunalogo.svg"
        alt="circular tuna fortuna logo"
      />

      <div className="container">
        <div className="outbound-links-container">
          <div id="Code">
            <a
              href="https://github.com/tuna42na"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={48}
                height={48}
                className="iconSvg"
                src="/images/code.svg"
                alt="Code"
              />
            </a>
            <h2 id="Code-Text">Github</h2>
          </div>
          <div id="Music">
            <a
              href="https://www.familyandfriendsband.com/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={48}
                height={48}
                className="iconSvg"
                src="/images/bass.svg"
                alt="Music"
              />
            </a>
            <h2 id="Music-Text">Music</h2>
          </div>
          <div id="Codepen">
            <a
              href="https://codepen.io/tuna42na/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={48}
                height={48}
                className="iconSvg"
                src="/images/code_pen.svg"
                alt="Codepen"
              />
            </a>
            <h2 id="Codepen-Text">CodePen</h2>
          </div>
          <div id="Resume">
            <a
              href="https://www.linkedin.com/in/tuna-fortuna/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={100}
                height={48}
                className="iconSvg"
                src="/images/resume.svg"
                alt="Resume"
              />
            </a>
            <h2 id="Resume-Text">LinkedIn</h2>
          </div>
          <a id="logo-tag" href="#">
            <Image
              width={48}
              height={48}
              id="tunalogo"
              src="/images/tunalogo.svg"
              alt="center circular tuna fortuna logo"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
