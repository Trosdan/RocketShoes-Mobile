import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
})``;

export const ProductContainer = styled.View`
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  max-height: 425px;
  background: white;
  border-radius: 6px;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 22px;
`;

export const ProductAmount = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonView = styled(RectButton)`
  height: 40px;
  flex-direction: row;
  margin-top: auto;
  border-radius: 8px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
`;

export const ButtonIconView = styled.View`
  margin: auto;
  width: 50px;
  height: 40px;
  flex-direction: row;
  border-radius: 8px;
  padding-left: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const ButtonText = styled.Text`
  text-align: center;
  flex: 1;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
