import { PageTransition } from "../components/PageTransition";
import { StreamResponse } from "../components/StreamResponse";
import { aboutContent } from "../data/siteData";

export default function About() {
  return (
    <PageTransition>
      <div className="container page">
        <StreamResponse content={aboutContent} />
      </div>
    </PageTransition>
  );
}
