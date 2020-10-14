import {
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL,
  setApiData,
  SET_API_DATA,
} from '../Actions/TodoActions';

const initialState = {todoList: [], apiData: []};

export const getData = () => async (dispatch, getState) => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/todos/',
  ).then((response) => response.json());
  // alert(JSON.stringify(data));
  dispatch(setApiData(data));
};

const todoReducer = (state = initialState, action) => {
  console.log('Action' + JSON.stringify(action));
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          key: Math.random(),
          text: action.payLoad,
        }),
      };

    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((note) => {
          return note.key !== action.key;
        }),
      };
    }

    case CLEAR_ALL: {
      return {
        ...state,
        todoList: [],
      };
    }

    case SET_API_DATA: {
      return {
        ...state,
        data: action.data,
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
