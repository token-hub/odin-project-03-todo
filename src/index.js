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
    }

    addEventListeners() {
        // todo

        const data = this.display.getFormValues();
        data.generateId = true;
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

    run() {
        console.log("hello");
    }
}

const app = new Main();
// app.run();
