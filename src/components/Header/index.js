import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Back, Logo, Cart, AmountCart } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      {navigation.state.routeName !== 'Home' ? (
        <Back onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#FFF" size={24} />
        </Back>
      ) : null}
      <Logo />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <AmountCart>{cartSize}</AmountCart>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};
