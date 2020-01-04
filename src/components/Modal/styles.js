import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Modal = styled.Modal`
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
`;

export const ContentContainer = styled.View`
  background: white;
  height: 200px;
  width: 300px;
  margin: auto;
  border-radius: 8px;
  padding: 8px;
`;

export const Title = styled.Text`
  text-align: center;
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

export const CheckoutButton = styled.TouchableOpacity`
  padding: 8px;
  background: #7159c1;
  margin: 8px;
  border-radius: 6px;
`;

export const CheckoutButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;
