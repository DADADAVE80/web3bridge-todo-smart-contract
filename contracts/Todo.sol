// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Todo {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    Task[] tasks;

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
    }
}