import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: numberToBRL(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    numberToBRL(
      state.cart.reduce((totall, product) => {
        return totall + product.price * product.amount;
      }, 0)
    )
  );

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
              <CartDeleteButton
                onPress={() => dispatch(CartActions.removeFromCart(item.id))}
              >
                <Icon name="delete" size={24} color="#000" />
              </CartDeleteButton>
            </CartHeader>
            <CartAmountView>
              <CartAmountCount>
                <TouchableOpacity
                  onPress={() =>
                    dispatch(
                      CartActions.updateAmountRequest(item.id, item.amount - 1)
                    )
                  }
                >
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={24}
                  />
                </TouchableOpacity>
                <CartAmount value={String(item.amount)} editable={false} />
                <TouchableOpacity
                  onPress={() =>
                    dispatch(
                      CartActions.updateAmountRequest(item.id, item.amount + 1)
                    )
                  }
                >
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
