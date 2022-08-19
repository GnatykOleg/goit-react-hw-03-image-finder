import errorImage from '../../Images/image-not-found.png';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
// import s from './ErrorView.module.css';

export default function ErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="not found element" width={240} />
      <p>{message}</p>
    </div>
  );
}
