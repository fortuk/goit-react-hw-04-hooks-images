import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ gallery, onClickImg }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            dataSrc={largeImageURL}
            tags={tags}
            onClick={onClickImg}
          />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
