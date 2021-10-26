const Todo = require("../model/todo");
const { getCompletedTodos, getRemainingTodos } = require("../utils/todos");

exports.todoIndex = (req, res) => {
    getCompletedTodos((completedTodos) => {
        getRemainingTodos((remainingTodos) => {
            Todo.fetchAll((todos) => {
                res.render("index", {
                    pageTitl: "نمایش کارهای روزمره",
                    todos,
                    completedTodos,
                    remainingTodos,
                });
            });
        });
    });
};
