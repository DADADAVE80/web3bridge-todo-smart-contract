// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TodoDApp {
    uint public taskCount = 0;

    struct Todo {
        uint id;
        string title;
        string description;
        bool completed;
    }

    Todo[] public todos;

    function createTask(string memory _title, string memory _description) external {
        todos[taskCount] = Todo(taskCount, _title, _description, false);
        taskCount++;
    }

    function getTask(uint _id) external view returns (Todo memory) {
        return todos[_id];
    }

    function getAllTasks() external view returns (Todo[] memory) {
        return todos;
    }

    function toggleCompleted(uint _id) public {
        Todo memory _task = todos[_id];
        _task.completed = !_task.completed;
        todos[_id] = _task;
    }

    function updateTask(uint _id, string memory _title, string memory _description) external {
        Todo memory _task = todos[_id];
        _task.title = _title;
        _task.description = _description;
        todos[_id] = _task;
    }

    function deleteTask(uint _id) external {
        delete todos[_id];
    }
}