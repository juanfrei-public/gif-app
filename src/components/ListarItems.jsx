export const ListarItems = ({ items }) => {
  const apiKey = "LOBcuGYUNa5QAVhlG1zCeOKCaFv5T7Qk";
  const limit = 20;

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${items}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
  };

  getGifs();

  return (
    
    <>
      <h3>{items}</h3>
    </>
  );
};
