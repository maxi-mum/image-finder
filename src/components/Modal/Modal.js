import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImgUrl } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={largeImgUrl} alt="Gallery item" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
