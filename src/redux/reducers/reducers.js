import { GET_DATA, COUNT, BUY, REMOVE, USER } from "../actions/action";
export const initial_state = {
  products: [],
  users: [],
  cards: [],
  sana: 0,
};

const reducers = (state = initial_state, action) => {
  if (action.type === GET_DATA) {
    return {
      products: action.payload,
      cards: [...state.cards],
      users: state.users,
      sana: state.sana,
    };
  }
  if (action.type === COUNT) {
    let ars = state.products.map((val) => {
      if (val.id === action.payload.id) {
        return {
          ...val,
          count: action.payload.count,
        };
      } else {
        return {
          ...val,
        };
      }
    });
    return {
      products: ars,
      sana: state.sana,
      users: state.users,
      cards: [...state.cards],
    };
  }
  if (action.type === BUY) {
    let c = action.payload.count === 0 ? 1 : action.payload.count;
    return {
      products: state.products,
      users: state.users,
      sana: state.sana,
      cards: [...state.cards, { ...action.payload, count: c }],
    };
  }
  if (action.type === REMOVE) {
    let arr = state.cards.filter((val) => {
      if (val.id !== action.payload) {
        return val;
      }
    });
    return {
      products: state.products,
      cards: arr,
      users: state.users,
      sana: state.sana,
    };
  }
  if (action.type === USER) {
    return {
      products: state.products,
      cards: state.cards,
      sana: state.sana,
      users: [...state.users, { id: ++state.users.length, ...action.payload }],
    };
  }
  return state;
};

export default reducers;
