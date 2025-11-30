import { PageTransition } from "../components/PageTransition";
import { StreamResponse } from "../components/StreamResponse";
import { educationRichAnswer, experienceRichAnswer } from "../data/siteData";

const experiencePageRichAnswer = `<h3>Experience</h3>${experienceRichAnswer}${
  educationRichAnswer ? `<h3>Education</h3>${educationRichAnswer}` : ""
}`;

export default function Experience() {
  return (
    <PageTransition>
      <div className="container page">
        <StreamResponse content={experiencePageRichAnswer} speed={10} />
      </div>
    </PageTransition>
  );
}
