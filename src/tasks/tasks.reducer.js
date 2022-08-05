import { TASKS_LIST_RECIEVED } from './tasks.actions';

const initiakState = {
  tasksList: [],
};

const tasksReducer = (state = initiakState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};

export default tasksReducer;
