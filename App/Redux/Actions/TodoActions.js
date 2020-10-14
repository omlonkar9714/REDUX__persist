export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';
export const GET_API_DATA = 'GET_API_DATA';
export const SET_API_DATA = 'SET_API_DATA';

export const AddTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payLoad: todoText,
  };
};

export const DeleteTodo = (key) => {
  return {
    type: DELETE_TODO,
    key: key,
  };
};

export const Clear_All = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const setApiData = (data) => {
  return {
    type: SET_API_DATA,
    data: data,
  };
};
