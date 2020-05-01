import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
    return ReactDom.createPortal(
    <div>

    </div>

    ),
    document.querySelector('#modal');
}

export default Modal;