export const Backdrop = ({ onClickHandler }) => {
  return (
    <div
      onClick={(event) => onClickHandler(event)}
      className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-black opacity-35"
    ></div>
  );
};
