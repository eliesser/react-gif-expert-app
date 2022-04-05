export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=SQYOTcaFPDCv61IaIrgqWtTr8LLQwMPY`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gift = data.map((d) => {
    return {
      id: d.id,
      title: d.title,
      url: d.images?.downsized_medium.url,
    };
  });

  return gift;
};
