import { useLoaderData } from "react-router-dom";

import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";
import { PageCard } from "../templates/pageCard";
import { BasedStileCard } from "../templates/BasedStileCard";

export default function Skills() {
  const pageData = useLoaderData();

  let workflows;

  const skillsAndTech = pageData.data.map((skill, i) => {
    if (skill.slug !== "workflow") {
      return (
        <li
          key={skill.slug}
          className="opacity-0  animate-slideIn"
          style={{ "--delay": i * 0.15 + "s" }}
        >
          <img
            className="sm:w-12 w-16 rounded my-2 svgGrayscale"
            src={`https://api.andyepik.pro${skill.logo.url}`}
            alt={skill.logo.alternativeText}
          />
        </li>
      );
    } else {
      workflows = skill;
    }
  });

  const workflowList = workflows.Workflows.map((workflow, i) => {
    return (
      <li
        className="ml-1 flex animate-fadeInBounceUp opacity-0"
        key={workflow.workflowTitle}
        style={{ "--delay": i * 0.9 + "s" }}
      >
        <img
          className="mr-2"
          src={`https://api.andyepik.pro${workflows.logo.url}`}
          alt={`https://api.andyepik.pro${workflows.logo.alternativeText}`}
        />
        {workflow.workflowTitle}
      </li>
    );
  });

  return (
    <PageCard>
      <BasedStileCard>
        <Title>Skills</Title>
        <article className="mt-8">
          <Subtitle>Programming Languages & Tools</Subtitle>
          <ul className="mt-4 flex flex-wrap items-center justify-around  p-4">
            {skillsAndTech}
          </ul>
        </article>
        <article className="mt-8">
          <Subtitle>{workflows.title}</Subtitle>
          <ul>{workflowList}</ul>
        </article>
      </BasedStileCard>
    </PageCard>
  );
}
