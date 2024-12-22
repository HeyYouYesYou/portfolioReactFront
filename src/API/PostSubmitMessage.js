// export const PostSubmitMessage = ({ name, email, message }) => {
//   const url = "http://localhost:1337/api/called-messages";

//   let resultFetch = 0;

//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//       data: {
//         name: name,
//         email: email,
//         message: message,
//       },
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((response) => (resultFetch = response));
//   return resultFetch;
// };

export const PostSubmitMessage = async ({ name, email, message }) => {
  const url = "http://localhost:1337/api/called-messages";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      data: {
        name: name,
        email: email,
        message: message,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};
