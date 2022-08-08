import React, { Component, useEffect } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

const TasksList = ({
  tasks,
  getTasksList,
  createTask,
  updateTask,
  deleteTask,
}) => {
  useEffect(() => {
    getTasksList();
  }, []);

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

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TasksList);

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
//   this.props.updateTask(id);
// };

// handleTaskDelete = (id) => {
//   this.props.deleteTask(id)
// };

// render() {
// const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
// console.log(sortedList);
// }
// }
