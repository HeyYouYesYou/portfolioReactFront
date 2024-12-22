import { useLoaderData } from "react-router-dom";

import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";
import { PageCard } from "../templates/pageCard";
import { BasedStileCard } from "../templates/BasedStileCard";
import { DataSinceUntil } from "../templates/DataSinceUntil";

export default function Education() {
  const pageData = useLoaderData();

  const eduList = pageData.data.map((edu, i) => {
    const {
      since,
      until,
      slug,
      title,
      websiteUrl,
      shortDescription,
      longDescription,
    } = edu.attributes;

    return (
      <li
        key={slug}
        className="my-8 rounded-sm p-4 justify-between opacity-0 md:flex animate-slideIn border-opacity-75 border-[1px] border-LimeGray"
        style={{ "--delay": i * 0.35 + "s" }}
      >
        <article>
          <Subtitle>
            <a target="_blank" href={websiteUrl}>
              {title}
            </a>
          </Subtitle>
          <div className="py-2 ">
            <p className="pb-2 ">{shortDescription}</p>
            <p>{longDescription}</p>
          </div>
        </article>
        <DataSinceUntil since={since} until={until} />
      </li>
    );
  });

  return (
    <PageCard>
      <BasedStileCard>
        <Title>Education</Title>
        <ul>{eduList}</ul>
      </BasedStileCard>
    </PageCard>
  );
}
