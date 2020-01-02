import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class Home extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: numberToBRL(product.price),
      }));

      this.setState({ product: data });
    } catch (err) {}
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { product } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ProductList
          data={product}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return (
              <ProductContainer>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductAmount>{item.priceFormatted}</ProductAmount>

                <ButtonView
                  type="button"
                  onPress={() => this.handleAddProduct(item.id)}
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
