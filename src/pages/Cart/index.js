import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  CartContainer,
  CartItem,
  CartHeader,
  CartImage,
  CartInfo,
  CartTitle,
  CartPrice,
  CartDeleteButton,
  CartAmountView,
  CartAmountCount,
  CartAmount,
  CartTotal,
  TotalView,
  TotalSufixText,
  TotalText,
  FinishButton,
  FinishButtonText,
} from './styles';

import { numberToBRL } from '../../utils/format';

import * as CartActions from '../../store/module/Cart/actions';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  return (
    <Container>
      <CartContainer
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CartItem>
            <CartHeader>
              <CartImage source={{ uri: item.image }} />
              <CartInfo>
                <CartTitle>{item.title}</CartTitle>
                <CartPrice>{item.priceFormatted}</CartPrice>
              </CartInfo>
              <CartDeleteButton onPress={() => removeFromCart(item.id)}>
                <Icon name="delete" size={24} color="#000" />
              </CartDeleteButton>
            </CartHeader>
            <CartAmountView>
              <CartAmountCount>
                <TouchableOpacity>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={24}
                  />
                </TouchableOpacity>
                <CartAmount value={String(item.amount)} editable={false} />
                <TouchableOpacity>
                  <Icon name="add-circle-outline" color="#7159c1" size={24} />
                </TouchableOpacity>
              </CartAmountCount>
              <CartTotal>{item.subtotal}</CartTotal>
            </CartAmountView>
          </CartItem>
        )}
      />
      <TotalView>
        <TotalText>
          <TotalSufixText>TOTAL</TotalSufixText>
          {total}
        </TotalText>
        <FinishButton>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </TotalView>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: numberToBRL(product.price * product.amount),
  })),
  total: numberToBRL(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
