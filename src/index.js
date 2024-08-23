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
        this.fetchProjects();
        this.fetchTodos();
        this.addEventListeners();
    }

    addEventListeners() {
        const todoFormData = this.display.getTodoFormValues();
        todoFormData.generateId = true;
        const projectFormData = this.display.getProjectFormValue();
        projectFormData.generateId = true;

        // todo submit button
        this.displayListeners.addListener({
            selector: "#add-todo-form-btn",
            func: this.db.todo.saveOne,
            objectToBind: this.db.todo,
            data: todoFormData
        });

        // project todo submit button
        this.displayListeners.addListener({
            selector: "#add-project-form-btn",
            func: this.db.project.saveOne,
            objectToBind: this.db.project,
            data: projectFormData
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

    run() {
        console.log("hello");
    }
}

const app = new Main();
// app.run();
