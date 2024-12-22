import { useRef, useState } from "react";
import { PostSubmitMessage } from "../../API/PostSubmitMessage";

export const SubmitForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [submitDone, setSubmit] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    let message = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    PostSubmitMessage(message).then((response) => {
      setSubmit(response.ok);
      if (response.ok) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";

        setTimeout(() => {
          setSubmit(false);
        }, 2000);
      }
    });
  };

  const doneSVG = (
    <svg
      className="absolute top-12 right-4 opacity-55"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="300"
      height="300"
      viewBox="0 0 48 48"
    >
      <path
        fill="#43A047"
        d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
      ></path>
    </svg>
  );

  return (
    <form
      onSubmit={(event) => submitHandler(event)}
      className="sm:w-3/5 min-h-full p-4 sm:my-0 relative animate-slideIn opacity-0"
      style={{ "--delay": 1 + "s" }}
    >
      {submitDone && doneSVG}
      <fieldset className="border-[1px] px-2 flex flex-col rounded-sm border-LimeGray ">
        <legend className="ml-4 px-1">Contact to me</legend>
        <label className="p-2 ">
          Enter your name
          <input
            ref={nameRef}
            type="text"
            required
            minLength={3}
            className="placeholder:pl-2 px-2 py-1 border-[1px] focus:border-emeraldLight focus:outline-none border-LimeGray rounded-sm min-w-full"
            placeholder="name"
          />
        </label>
        <label className="p-2">
          Enter contact email
          <input
            ref={emailRef}
            type="email"
            required
            className="placeholder:pl-2 px-2 py-1 focus:border-emeraldLight focus:outline-none border-[1px] border-LimeGray rounded-sm min-w-full"
            placeholder="email"
          />
        </label>
        <label className="p-2">
          Enter message:
          <textarea
            ref={messageRef}
            required
            maxLength={2000}
            rows={4}
            className="border-[1px] px-2 py-1 focus:border-emeraldLight resize-none border-LimeGray rounded-sm min-w-full focus:outline-none"
          />
        </label>
        <div className="text-right">
          <button
            type="submit"
            className="border-[1px] border-Lime hover:bg-brownLight hover:border-transparent hover:text-white active:animate-jiggle active:bg-Lime px-2 py-1 rounded-md  m-2 w-fit"
          >
            send message
          </button>
        </div>
      </fieldset>
    </form>
  );
};
