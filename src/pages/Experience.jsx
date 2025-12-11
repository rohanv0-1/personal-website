import { PageTransition } from "../components/PageTransition";
import { StreamResponse } from "../components/StreamResponse";
import { experienceContent } from "../data/siteData";

export default function Experience() {
  return (
    <PageTransition>
      <div className="container page">
        <StreamResponse content={experienceContent} speed={1} />
      </div>
    </PageTransition>
  );
}
