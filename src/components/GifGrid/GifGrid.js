import React from 'react';
import GifGridItem from './GifGridItem/GifGridItem';
import './GifGrid.css';
import useFetchGifs from '../../hooks/useFetchGifs';

function GifGrid({ category }) {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="GifGrid">
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div>
      )}
    </>
  );
}

export default GifGrid;
