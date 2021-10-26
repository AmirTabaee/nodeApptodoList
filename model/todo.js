const {getTodos , saveTodos} = require('../utils/todos');

class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    save(callback) {
        getTodos(todos => {
            todos.push(this);
            saveTodos(todos , err => {
                callback(err);
            })
        })
        // fs.readFile(filepath, (err, fileContent) => {
        //     const todos = JSON.parse(fileContent);
        //     todos.push(this);

        //     fs.writeFile(filepath, JSON.stringify(todos), (err) => {
        //        callback(err);
        //     });
        // });
    }

    static fetchAll(callback) {
        getTodos(todos => {
            callback(todos);
        })
        // fs.readFile(filepath, (err, fileContent) => {
        //     if (err) return [];
        //     const todos = JSON.parse(fileContent);
        //     callback(todos);
        // });
    }

    static deleteTodo(id, callback) {
        getTodos(todos => {
            const filteredTodos = todos.filter(t => t.id != id);
            saveTodos(filteredTodos , err => {
                callback(err);
            })
        })
        // fs.readFile(filepath, (err, fileContent) => {
        //     const todos = JSON.parse(fileContent);
        //     const filteredTodos = todos.filter((t) => t.id != id);

        //     fs.writeFile(filepath, JSON.stringify(filteredTodos), (err) => {
        //         callback();
        //     });
        // });
    }

    static setTodoToComplete(id, callback) {
        getTodos(todos => {
            const todoIndex = todos.findIndex(t => t.id == id);
            const todo = todos[todoIndex];
            todo.completed = true ;
            todos[todoIndex] = todo ;
            saveTodos(todos , err => {
                callback(err);
            })
        })
    //     fs.readFile(filepath, (err, fileContent) => {
    //         const todos = JSON.parse(fileContent);
    //         const todoIndex = todos.findIndex((t) => t.id == id);
    //         const todo = todos[todoIndex];
    //         todo.completed = true;
    //         todos[todoIndex] = todo;

    //         fs.writeFile(filepath, JSON.stringify(todos), (err) => {
    //             callback(err);
    //         });
    //     });
    // }
}
}
module.exports = Todo;
