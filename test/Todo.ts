import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Todo dApp", function() {
    async function deployTodo() {
        const Todo = await ethers.getContractFactory("TodoDApp");
        const todo = await Todo.deploy();

        return { todo };
    }

    describe("Deployment", function() {
        it("Should be deployed", async function() {
            const { todo } = await loadFixture(deployTodo);

            expect(todo).to.exist;
        });
    });

    describe("Todos", function() {
        it("Create todo", async function() {
            const {todo} = await loadFixture(deployTodo);

            await todo.createTask("Task 1", "Description 1");

            const todos = todo.todos(0);

            expect(todos.title).to.equal("Task 1");
            expect(todos.description).to.equal("Description 1");
        });
    })
});