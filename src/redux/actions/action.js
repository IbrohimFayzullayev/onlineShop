import getData from "../../components/Api";

export const GET_DATA = "GET_DATA";
export const COUNT = "COUNT";
export const BUY = "BUY";
export const REMOVE = "REMOVE";
export const USER = " USER";

let arr;
export const getDataAction = () => async (dispatch, getState) => {
  const data = await getData("products");
  arr = data.map((val) => {
    return {
      ...val,
      count: 0,
    };
  });
  dispatch({
    type: GET_DATA,
    payload: arr,
  });
};

export const changeIdAction = (count, id) => (dispatch) => {
  dispatch({
    type: COUNT,
    payload: {
      id,
      count,
    },
  });
};

export const buyAction = (obj) => (dispatch) => {
  dispatch({
    type: BUY,
    payload: obj,
  });
};

export const removeAction = (id) => (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: id,
  });
};

export const saveUserAction = (name, lastname, city) => (dispatch) => {
  dispatch({
    type: USER,
    payload: { name, lastname, city },
  });
};
