import "./styles.css";
import storage from "./storage/storage";
import DisplayListeners from "./display/displayListeners";
import DisplayProject from "./display/displayProject";
import DisplayTodo from "./display/displayTodo";

class Main {
    constructor() {
        this.storage = storage;
        this.displayProject = new DisplayProject();
        this.displayTodo = new DisplayTodo();
        this.displayListeners = new DisplayListeners();
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
            func: [this.storage.todo.saveOne, this.storage.todo.updateOne],
            objectToBind: this.storage.todo,
            entityModule: this.displayTodo
        });

        // project todo submit button
        this.displayListeners.addListener({
            selector: "#add-project-form-btn",
            func: [this.storage.project.saveOne, this.storage.project.updateOne],
            objectToBind: this.storage.project,
            entityModule: this.displayProject
        });

        // todo edit buttons
        this.displayListeners.addFormListeners({
            selector: ".todo-edit-btn",
            func: this.displayTodo.prepareEditForm,
            objectToBind: this.displayTodo,
            entityModule: this.displayTodo,
            isEdit: true
        });

        // todo delete buttons
        this.displayListeners.addFormListeners({
            selector: ".todo-delete-btn",
            func: this.storage.todo.deleteOne,
            objectToBind: this.storage.todo,
            entityModule: this.displayTodo,
            isEdit: false
        });

        // project delete buttons
        this.displayListeners.addFormListeners({
            selector: ".project-delete-btn",
            func: this.storage.project.deleteOne,
            objectToBind: this.storage.project,
            entityModule: this.displayProject,
            isEdit: false
        });

        // project edit buttons
        this.displayListeners.addFormListeners({
            selector: ".project-edit-btn",
            func: this.displayProject.prepareEditForm,
            objectToBind: this.displayProject,
            entityModule: this.displayProject,
            isEdit: true
        });
    }

    fetchProjects() {
        const projects = this.storage.project.fetchAll();
        this.displayProject.display(projects);
        this.displayProject.populateProjectList(projects);
    }

    fetchTodos() {
        const todos = this.storage.todo.fetchAll();
        this.displayTodo.display(todos);
    }
}

const app = new Main();
app.init();
