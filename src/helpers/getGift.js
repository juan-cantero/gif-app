import Axios from 'axios';

const getGifts = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=kWMnsCfLZ0HQtWlfTYp38SCtHxCNg4A9`;

  const response = await Axios.get(url);
  const { data } = response.data;
  const images = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      imageUrl: img.images.downsized_medium.url,
    };
  });
  return images;
};

export default getGifts;
