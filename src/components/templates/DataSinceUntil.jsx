export const DataSinceUntil = ({ since, until }) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="text-right min-w-[150px] pb-2 pr-2 font-medium sm:mx-2 text-redDark">
      <span>
        {month[+since.slice(5, 7)] + " "}
        {since.slice(0, 4)}
      </span>
      <span> - </span>
      <span>
        {month[+until?.slice(5, 7)] === undefined
          ? " "
          : month[+until?.slice(5, 7)] + " "}
        {until?.slice(0, 4) === undefined ? "now" : until?.slice(0, 4)}
      </span>
    </div>
  );
};
