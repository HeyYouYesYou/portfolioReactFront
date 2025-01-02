import { NavLink, useRouteError } from "react-router-dom";

import { Title } from "../templates/Title";
import { Subtitle } from "../templates/Subtitle";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <article className="bg-grayLight min-h-lvh flex justify-center items-center">
      <div className="max-w-full opacity-0 bg-white border-redDark border-[1px] p-8 rounded-sm flex flex-col items-end animate-fadeIn">
        <Title>
          {error.status == "404"
            ? "Page Not Found"
            : "Oops, something went wrong on the server..."}
        </Title>
        {error.status && <Subtitle>{`Error: ${error.status}`}</Subtitle>}
        <button className="bg-Lime font-medium  border-[1px] transition-all mt-8 rounded-sm max-w-fit px-4 py-2 text-grayLight hover:bg-transparent hover:text-Lime hover:border-[1px] border-Lime">
          <NavLink to="/home">go to Home page</NavLink>
        </button>
      </div>
    </article>
  );
}
