import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { routesPathList } from "../../routesPathList";

export default function Sidebar() {
  const navMenu = routesPathList.map((route) => {
    return (
      <li
        key={route.path}
        className={`decoration-none underline-animation relative my-[2px] block w-max text-xl font-light hover:font-normal hover:duration-300`}
      >
        <NavLink to={route.path}>{route.label}</NavLink>
      </li>
    );
  });

  const pageData = useLoaderData();

  return (
    <aside className="sticky top-0 hidden lg:block h-screen overflow-auto bg-LimeGray md:min-w-64">
      <article>
        <article className=" flex flex-col items-center">
          <img
            className="mb-8  mt-8 sd:mt-24 h-[200px] w-[200px] rounded-full border-8 border-Lime border-opacity-45 object-cover"
            src={`https://api.andyepik.pro${pageData.data.photo.url}`}
            alt={pageData.data.photo.alternativeText}
          />
          <h3 className="text-3xl font-semibold">{pageData.data.title}</h3>
          <h4 className="text-2xl mx-4 text-center text-brownLight">
            {pageData.data.description}
          </h4>
        </article>
        <nav className="sd:my-12 my-8 font-sans text-base font-normal">
          <ul className="flex flex-col items-center">{navMenu}</ul>
        </nav>
      </article>
    </aside>
  );
}
