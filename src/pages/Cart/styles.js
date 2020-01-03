import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const CartContainer = styled.FlatList`
  padding: 16px;
`;

export const CartItem = styled.View`
  margin-top: 6px;
  margin-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 6px;
`;

export const CartHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CartImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const CartInfo = styled.View`
  flex: 1;
`;

export const CartTitle = styled.Text`
  font-size: 24px;
`;

export const CartPrice = styled.Text`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;

export const CartDeleteButton = styled(RectButton)``;

export const CartAmountView = styled.View`
  justify-content: space-around;
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
`;

export const CartAmountCount = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CartAmount = styled.TextInput`
  margin: 8px 5px 8px 5px;
  width: 50px;
  height: 35px;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 6px;
  color: black;
  text-align: center;
`;

export const CartTotal = styled.Text`
  margin-right: 36px;
`;

export const TotalView = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #dddddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TotalSufixText = styled.Text`
  font-size: 18;
  color: #999;
  font-weight: bold;
  margin-right: 5px;
`;

export const TotalText = styled.Text`
  font-size: 38;
  color: #000;
  font-weight: bold;
`;

export const FinishButton = styled(RectButton)`
  padding: 8px;
  width: 350px;
  background: #7159c1;
  margin: 8px;
  border-radius: 6px;
`;

export const FinishButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;
