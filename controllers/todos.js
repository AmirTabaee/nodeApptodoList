const Todo = require("../model/todo");

exports.todoIndex = (req, res) => {
    Todo.fetchAll((todos) => {
        res.render("index", {
            pageTitl: "نمایش کارهای روزمره",
            todos,
        });
    });
};
