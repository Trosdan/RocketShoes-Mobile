import React from 'react';

import PropTypes from 'prop-types';

import {
  Modal as ModalView,
  Container,
  ContentContainer,
  Title,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

export default function Modal({ show, title, handlerClose, children }) {
  return (
    <ModalView
      visible={show}
      onRequestClose={() => handlerClose()}
      transparent
      animationType="slide"
    >
      <Container>
        <ContentContainer>
          <Title>{title}</Title>
          {children}
          <CheckoutButton onPress={() => handlerClose()}>
            <CheckoutButtonText>CONCLUIR</CheckoutButtonText>
          </CheckoutButton>
        </ContentContainer>
      </Container>
    </ModalView>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handlerClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
