import { NavLink } from "react-router-dom";
import { Title } from "./Title";

export function ErrorsCard({ title }) {
  return (
    <div className="max-w-full opacity-0 bg-white border-redDark border-[1px] p-8 rounded-sm flex flex-col items-end animate-fadeIn">
      <Title>{title}</Title>
      <button className="bg-Lime font-medium  border-[1px] transition-all mt-8 rounded-sm max-w-fit px-4 py-2 text-grayLight hover:bg-transparent hover:text-Lime hover:border-[1px] border-Lime">
        <NavLink to="/home">go to Home page</NavLink>
      </button>
    </div>
  );
}
