import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/module/Cart/actions';

import { numberToBRL } from '../../utils/format';
import api from '../../services/api';

import {
  Container,
  ProductList,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductAmount,
  ButtonView,
  ButtonIconView,
  ButtonText,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const amount = useSelector(state =>
    state.cart.reduce((amountt, product) => {
      amountt[product.id] = product.amount;

      return amountt;
    }, {})
  );

  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: numberToBRL(product.price),
      }));

      setProducts(data);
    } catch (err) {
      // err
    }
  }

  useEffect(() => {
    getProducts();
  });

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => {
          return (
            <ProductContainer>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductAmount>{item.priceFormatted}</ProductAmount>

              <ButtonView
                type="button"
                onPress={() => handleAddProduct(item.id)}
              >
                <ButtonIconView>
                  <Icon name="shopping-cart" size={18} color="#fff" />
                  <ButtonText>{amount[item.id] || 0}</ButtonText>
                </ButtonIconView>

                <ButtonText>ADICIONAR AO CARRINHO</ButtonText>
              </ButtonView>
            </ProductContainer>
          );
        }}
      />
    </Container>
  );
}
