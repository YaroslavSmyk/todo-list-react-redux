import React, { Component, useEffect } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import PropTypes from 'prop-types';
import {
  createTask,
  // fetchTasksList,
  updateTask,
  deleteTask,
} from '../../tasks/tasksGateway';
import { connect } from 'react-redux';
import * as tasksAction from '../tasks.actions';
import { tasksListSelector } from '../tasks.selectors';

const TasksList = ({ tasks, getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  // state = {
  //   tasks: [],
  // };

  // componentDidMount() {
  //   this.props.getTasksList();
  // this.fetchTasks();
  // }

  // fetchTasks = () => {
  //   fetchTasksList().then((tasksList) =>
  //     this.setState({
  //       tasks: tasksList,
  //     })
  //   );
  // };

  // onCreate = (text) => {
  //   const newTask = {
  //     text,
  //     done: false,
  //   };

  //   createTask(newTask).then(() => this.fetchTasks());
  // };

  // handleTaskStatusChange = (id) => {
  //   const { done, text } = this.state.tasks.find((task) => task.id === id);

  //   const updatedTask = {
  //     text,
  //     done: !done,
  //   };

  //   updateTask(id, updatedTask).then(() => this.fetchTasks());
  // };

  // handleTaskDelete = (id) => {
  //   deleteTask(id).then(() => this.fetchTasks());
  // };

  // render() {
  // const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
  // console.log(sortedList);

  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            handleTaskStatusChange={updateTask}
            handleTaskDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
};
// }
// }

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
};

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  // id: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
  // done: PropTypes.bool.isRequired,
  // tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapState = (state) => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TasksList);
