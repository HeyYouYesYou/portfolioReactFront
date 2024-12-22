export function GetDataFromBack(URL) {
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  return fetchData(URL);
}
