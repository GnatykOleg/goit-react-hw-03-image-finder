// import s from './Friend.module.css';
// import PropTypes from 'prop-types';

export default function ImageGalleryItem({ id, webformatURL, tags }) {
  return (
    <li>
      <img src={webformatURL} alt={tags} width="240" />
    </li>
  );
}
