import { PageTransition } from "../components/PageTransition";
import { ChatResponse } from "../components/ChatResponse";
import { experienceAnswer, experienceRichAnswer } from "../data/siteData";

export default function Experience() {
  return (
    <PageTransition>
      <div className="container page">
        <ChatResponse
          answer={experienceAnswer}
          richAnswer={experienceRichAnswer}
          showPrompt={false}
          speed={10}
        />
      </div>
    </PageTransition>
  );
}
