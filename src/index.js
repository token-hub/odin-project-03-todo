import "./styles.css";
import DB, { projectDB, todoDB } from "./database";
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
        this.fetchProjects();
        this.fetchTodos();
        this.addEventListeners();
    }

    addEventListeners() {
        // todo submit button
        this.displayListeners.addListener({
            selector: "#add-todo-form-btn",
            func: this.db.todo.saveOne,
            objectToBind: this.db.todo,
            collection: todoDB
        });

        // project todo submit button
        this.displayListeners.addListener({
            selector: "#add-project-form-btn",
            func: this.db.project.saveOne,
            objectToBind: this.db.project,
            collection: projectDB
        });

        // const todoEditBtns = this.display.getElements(".todo-edit-btn");
        // const todoDeleteBtns = this.display.getElements(".todo-delete-btn");
        // const projectEditBtns = this.display.getElements(".project-edit-btn");
        // const projectDeleteBtns = this.display.getElements(".project-delete-btn");

        // todo delete buttons
        this.displayListeners.addFormListeners({
            selector: ".todo-delete-btn",
            func: this.db.todo.deleteOne,
            objectToBind: this.db.todo,
            collection: todoDB,
            isEdit: false
        });

        // project delete buttons
        this.displayListeners.addFormListeners({
            selector: ".project-delete-btn",
            func: this.db.project.deleteOne,
            objectToBind: this.db.project,
            collection: projectDB,
            isEdit: false
        });
    }

    fetchProjects() {
        const projects = this.db.project.fetchAll();
        this.display.displayProjects(projects);
    }

    fetchTodos() {
        const todos = this.db.todo.fetchAll();
        this.display.displayTodos(todos);
    }
}

const app = new Main();
// app.run();
