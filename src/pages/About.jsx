import { PageTransition } from "../components/PageTransition";
import { StreamResponse } from "../components/StreamResponse";
import { aboutContent } from "../data/siteData";
import headshot from "../assets/Headshot.jpeg";

export default function About() {
  const aboutPhoto = {
    src: headshot,
    alt: "Rohan Verma headshot",
  };
  const hasPhoto = Boolean(aboutPhoto.src);

  return (
    <PageTransition>
      <div className="container page">
        <div className="about-layout">
          <StreamResponse content={aboutContent} speed={1} />
          <div className="about-photo">
            <div className="about-photo-frame">
              {hasPhoto ? (
                <img
                  src={aboutPhoto.src}
                  alt={aboutPhoto.alt}
                  className="about-photo-img"
                />
              ) : (
                <div
                  className="about-photo-placeholder"
                  aria-label="Rohan Verma"
                >
                  <span>Rohan Verma</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
