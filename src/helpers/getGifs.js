const apiKey = "LOBcuGYUNa5QAVhlG1zCeOKCaFv5T7Qk";
const limit = 10;

export const getGifs = async (items) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${items}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
};