import "./styles.css";
import DB, { projectDB, todoDB } from "./storage/database";
import DisplayListeners from "./display/displayListeners";
import Display from "./display/display";
import DisplayProject from "./display/displayProject";
import DisplayTodo from "./display/displayTodo";

class Main {
    constructor() {
        this.db = DB;
        this.display = new Display();
        this.displayProject = new DisplayProject();
        this.displayTodo = new DisplayTodo();
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
            entityModule: this.displayTodo
        });

        // project todo submit button
        this.displayListeners.addListener({
            selector: "#add-project-form-btn",
            func: [this.db.project.saveOne, this.db.project.updateOne],
            objectToBind: this.db.project,
            entityModule: this.displayProject
        });

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

        // project edit buttons
        this.displayListeners.addFormListeners({
            selector: ".project-edit-btn",
            func: this.displayProject.prepareEditForm,
            objectToBind: this.displayProject,
            collection: projectDB,
            isEdit: true
        });
    }

    fetchProjects() {
        const projects = this.db.project.fetchAll();
        this.displayProject.display(projects);
    }

    fetchTodos() {
        const todos = this.db.todo.fetchAll();
        this.displayTodo.display(todos);
    }
}

const app = new Main();
// app.run();
