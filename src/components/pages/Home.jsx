import { useLoaderData } from "react-router-dom";

import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";

export default function Home() {
  const pageData = useLoaderData();

  const background = `https://api.andyepik.pro${pageData.data.coverImages.url}`;
  return (
    <section className="h-full overflow-hidden relative">
      <img
        className="h-full blur-[0px] animate-blur absolute left-0 top-0 object-cover w-screen"
        src={background}
        alt={`https://api.andyepik.pro${pageData.data.coverImages.alternativeText}`}
      />
      <article className="relative flex min-h-screen flex-col items-start justify-center pl-10">
        <div className="text-Lime">
          <Title>{pageData.data.title}</Title>
        </div>
        <div className="w-1/2 animate-zoomIn opacity-0">
          <Subtitle>{pageData.data.pageDescription}</Subtitle>
        </div>
      </article>
    </section>
  );
}
