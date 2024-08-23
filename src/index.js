import "./styles.css";
import DB from "./database";
import DisplayListeners from "./displayListeners";
import Display from "./display";

class Main {
    constructor() {
        this.db = DB;
        this.display = new Display();
        this.displayListeners = new DisplayListeners();
        this.init();
    }

    init() {
        this.addEventListeners();
        this.fetchProjects();
        this.fetchTodos();
    }

    addEventListeners() {
        const data = this.display.getFormValues();
        data.generateId = true;

        // todo
        this.displayListeners.addListener({
            selector: "#add-todo-form-btn",
            func: this.db.todo.saveOne,
            objectToBind: this.db.todo,
            data
        });

        // project
        this.displayListeners.addListener({
            selector: "#add-project-btn",
            func: this.db.project.saveOne,
            objectToBind: this.db.project,
            data: { hello: "hello from project" }
        });
    }

    fetchProjects() {
        const projects = this.db.project.fetchAll();
    }

    fetchTodos() {
        const todos = this.db.todo.fetchAll();
        this.display.displayTodos(todos);
    }

    run() {
        console.log("hello");
    }
}

const app = new Main();
// app.run();
