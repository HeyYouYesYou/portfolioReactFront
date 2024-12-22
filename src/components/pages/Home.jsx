import { useLoaderData } from "react-router-dom";

import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";

export default function Home() {
  const pageData = useLoaderData();

  const background = `http://localhost:1337${pageData.data.attributes.coverImages.data[0].attributes.url}`;
  return (
    <section className="h-full overflow-hidden relative">
      <img
        className="h-full blur-[0px] animate-blur absolute left-0 top-0 object-cover w-screen"
        src={background}
        alt={`http://localhost:1337${pageData.data.attributes.coverImages.data[0].attributes.alternativText}`}
      />
      <article className="relative flex min-h-screen flex-col items-start justify-center pl-10">
        <div className="text-Lime">
          <Title>{pageData.data.attributes.title}</Title>
        </div>
        <div className="w-1/2 animate-zoomIn opacity-0">
          <Subtitle>{pageData.data.attributes.pageDescription}</Subtitle>
        </div>
      </article>
    </section>
  );
}
