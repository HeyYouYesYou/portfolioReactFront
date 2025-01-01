export const PostSubmitMessage = async ({ name, email, message }) => {
  const url = "https://api.andyepik.pro/api/called-messages";

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
