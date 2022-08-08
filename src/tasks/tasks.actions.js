import * as tasksGateway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = (tasksList) => {
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
    tasksGateway
      .fetchTasksList()
      .then((tasksList) => dispatcht(tasksListRecieved(tasksList)));
  };

  return thunkAction;
};

export const updateTask = (taskid) => {
  const thunkAction = function (dispatcht, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === taskid);

    const updatedTask = {
      ...task,
      done: !task.done,
    };

    tasksGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatcht(getTasksList()));
  };

  return thunkAction;
};

export const deleteTask = (taskid) => {
  const thunkAction = function (dispatcht) {
    tasksGateway.deleteTask(taskId).then(() => dispatcht(getTasksList()));
  };

  return thunkAction;
};

export const createTask = (text) => {
  const thunkAction = function (dispatcht) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData).then(() => dispatcht(getTasksList()));
  };

  return thunkAction;
};
