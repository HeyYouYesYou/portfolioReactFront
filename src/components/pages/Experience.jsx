import { useLoaderData } from "react-router-dom";

import { BasedStileCard } from "../templates/BasedStileCard";
import { PageCard } from "../templates/pageCard";
import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";
import { AccordionDtDdItem } from "../templates/AccordionDtDdItem";

export default function Experience() {
  const pageData = useLoaderData();

  //let relevantExpList = [];
  let notRelevantExpList = [];

  notRelevantExpList = pageData.data.map((exp) => {
    return (
      <AccordionDtDdItem key={exp.attributes.slug} AccItem={exp.attributes} />
    );
  });

  return (
    <>
      <PageCard>
        <BasedStileCard>
          <Title>Experience</Title>
          <section className="my-4 py-4 px-8 border-[1px] animate-fadeIn opacity-0 border-LimeGray rounded-sm">
            <Subtitle>
              My experience before I've decided to became a developer
            </Subtitle>
            <dl className="flex flex-col justify-center items-center">
              {notRelevantExpList}
            </dl>
          </section>
        </BasedStileCard>
      </PageCard>
    </>
  );
}