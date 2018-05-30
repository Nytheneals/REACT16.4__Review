import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './../#4 Portals/Portal';

class Modal extends Component {
  render() {
    return (
      <div>
        <Portal>
          <ModalWrapper>
            <h1>Hey, Im the Modal</h1>
          </ModalWrapper>
        </Portal>
      </div>
    );
  }
}

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background: Teal;
`;
