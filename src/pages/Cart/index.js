import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

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
import Modal from '../../components/Modal';
import checkoutData from '../../assets/anim/checkout.json';

import * as CartActions from '../../store/module/Cart/actions';

export default function Cart() {
  const dispatch = useDispatch();
  const lottieRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

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

  function handlerOpen() {
    if (cart.length === 0) {
      Alert.alert(
        'Carrinho vazio',
        'Adicionar produtos no carrinho para finalizar a compra'
      );
    } else {
      setShowModal(true);
    }
  }

  function handlerClose() {
    setShowModal(false);
    dispatch(CartActions.reset());
  }

  return (
    <Container>
      <Modal
        show={showModal}
        title="COMPRA FINALIZADA"
        handlerClose={() => handlerClose()}
      >
        <LottieView
          ref={lottieRef}
          source={checkoutData}
          autoPlay
          loop={false}
          resizeMode="cover"
          style={{ width: 100, height: 100, flex: 1, alignSelf: 'center' }}
        />
      </Modal>
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
        <FinishButton onPress={() => handlerOpen()}>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </TotalView>
    </Container>
  );
}
