// export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });

export const numberToBRL = value =>
  `R$ ${value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
