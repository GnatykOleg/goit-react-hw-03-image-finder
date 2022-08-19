// import PropTypes from 'prop-types';

import { InfinitySpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <InfinitySpin width="200" color="black" />
      <p>ЗАГРУЖАЕМ.....</p>
    </>
  );
}
