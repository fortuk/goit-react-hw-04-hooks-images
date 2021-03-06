import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import imagesApi, { PER_PAGE } from '../../api/imagesApi';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Container from '../Container/Container';
import { Load } from '../loader/loader';
import s from '../App/App.module.css';

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    setStatus('pending');

    imagesApi.fetchImagesWithQuery(query, page).then(({ hits }) => {
      const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return { id, webformatURL, largeImageURL, tags };
      });
      // console.log(images);
      if (images.length === 0 && page === 1) {
        alert(`По запросу ${query} ничего не найдено.`);
        setStatus('idle');
      }
      if (images.length === 0 && page > 1) {
        alert('Конец списка изображений');
        setStatus('idle');
        return;
      }

      setGallery(state => [...state, ...images]);
      setStatus('resolved');
    });
  }, [page, query]);

  useEffect(() => {
    if (gallery.length <= PER_PAGE) return;
    handleScroll();
  }, [gallery]);

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleSearchbarSubmit = request => {
    if (request !== query) {
      setGallery([]);
      setPage(1);
      setQuery(request);
    }
  };

  const fetchImages = () => {
    setPage(state => state + 1);
    setStatus('pending');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const setCurrentPictureSrc = event => {
    const imgForModal = event.target.dataset.src;
    const altForModal = event.target.alt;

    setModalImg(imgForModal);
    setModalAlt(altForModal);
    setShowModal(true);
  };
  return (
    <div className="App">
      <Container>
        <Searchbar onSubmit={handleSearchbarSubmit} />
      </Container>
      {(status === 'resolved' || status === 'pending') && (
        <>
          {showModal && (
            <Modal onClose={toggleModal}>
              <img src={modalImg} alt={modalAlt} />
            </Modal>
          )}
          {gallery.length > 0 && (
            <ImageGallery onClickImg={setCurrentPictureSrc} gallery={gallery} />
          )}
          {status === 'pending' ? (
            <Load
              className={s.loader}
              type="Circles"
              color="#00BFFF"
              height={80}
              width={80}
            />
          ) : (
            <Button handleClickBtn={fetchImages} />
          )}
        </>
      )}
    </div>
  );
}
