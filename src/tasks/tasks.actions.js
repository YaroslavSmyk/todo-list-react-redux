import { fetchTasksList } from './tasksGateway';
export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTasksList = () => {
  const thunkAction = function (dispatcht) {
    fetchTasksList().then((tasksList) =>
      dispatcht(tasksListRecieved(tasksList))
    );
  };

  return thunkAction;
};


