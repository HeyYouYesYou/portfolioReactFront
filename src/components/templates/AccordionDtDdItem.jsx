import { useState } from "react";
import { DataSinceUntil } from "./DataSinceUntil";

export const AccordionDtDdItem = ({ AccItem }) => {
  const [isShowed, setIsShowed] = useState(false);

  const { since, until, title, longDescription } = AccItem;

  const accordionOnclickHandler = () => {
    setIsShowed((prev) => !prev);
  };

  return (
    <article className="my-2 rounded-sm bg-LimeGrayLight">
      <div className="cursor-pointer" onClick={() => accordionOnclickHandler()}>
        <dt
          className={`flex hover:animate-pulse bg-green p-2 justify-between items-center rounded-t-sm ${
            isShowed ? "" : "rounded-sm"
          }`}
        >
          <h4>{title}</h4>{" "}
          <span className="text-lg ml-2">{isShowed ? "-" : "+"}</span>
        </dt>
      </div>
      <dd
        className={`overflow-hidden duration-500 delay-0 transition-all ${
          isShowed ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="p-2">{longDescription}</p>
        <DataSinceUntil since={since} until={until} />
      </dd>
    </article>
  );
};
