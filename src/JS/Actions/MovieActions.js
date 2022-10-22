import { ADD, EDIT, SEARCH } from "../Constantes/ActionsTypes";

export const search = (payload) => {
  return {
    type: SEARCH,
    payload,
  };
};
export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const edit = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
