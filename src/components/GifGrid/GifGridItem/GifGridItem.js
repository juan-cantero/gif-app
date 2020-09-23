import React from 'react';
import PropTypes from 'prop-types';
import './GifGridItem.css';
import 'animate.css';

function GifGridItem({ title, imageUrl }) {
  return (
    <div className="GifGridItem">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}

GifGridItem.propType = {
  title: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

export default GifGridItem;
