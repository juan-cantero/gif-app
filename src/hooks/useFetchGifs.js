const { useState, useEffect } = require('react');
const { default: getGifts } = require('../helpers/getGift');

const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(category).then((imgages) => {
      setstate({ images: imgages, loading: false });
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
