const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const filepath = path.join(rootDir, "data", "todos.json");

class Todo {
    constructor(id, text, complted = true) {
        this.id = id;
        this.text = text;
        this.complted = complted;
    }

    save(callback) {
        fs.readFile(filepath, (err, fileContent) => {
            const todos = JSON.parse(fileContent);
            todos.push(this);

            fs.writeFile(filepath, JSON.stringify(todos), (err) => {
                if (!err) callback();
                else callback(err);
            });
        });
    }

    static fetchAll(callback){
        fs.readFile( filepath , ( err , fileContent) => {
            if(err) return([]);
            const todos = JSON.parse(fileContent);
            callback(todos);
        })
    }
}

module.exports = Todo;
