import Bolos from '../database/Bolos';

const initialState = Bolos.map((item) => ({ ...item, qty: 0 }));

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'adicionaProduto':
      return state.map((item) => {
        item.id === action.id && item.qty++;
        return item;
      });

    case 'removeProduto':
      return state.map((item) => {
        item.id === action.id && item.qty--;
        return item;
      });

    case 'limpaCarrinho':
      return state.map((item) => {
        item.qty = 0;
        return item;
      });

    default:
      return state;
  }
}