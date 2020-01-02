import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resize: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const AmountCart = styled.Text`
  top: -8;
  right: -8;
  min-width: 18px;
  min-height: 18px;
  position: absolute;
  text-align: center;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
  color: #fff;
  background: #7159c1;
  border-radius: 1000px;
`;
