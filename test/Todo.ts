import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Todo dApp", function() {
    async function deployTodo() {
        const Todo = await ethers.getContractFactory("Todo");
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
        it("Display list of todos", async function() {
            const {todo} = await loadFixture(deployTodo);


        })
    })
});