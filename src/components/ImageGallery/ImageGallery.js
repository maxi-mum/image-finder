import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={s.ImageGallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;

// {
//   hits.map(({ id, webformatURL }) => (
//     <li key={id}>
//       <img src="" alt="" className="ImageGalleryItem-image" />
//     </li>
//   ));
// }

// {
//   props.hits.map(({ id, webformatURL, tags }) => {
//     return (
//       <div>
//         <li key={id}>
//           <img src={webformatURL} alt={tags} />
//         </li>
//       </div>
//     );
//   });
// }
