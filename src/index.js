import "./styles.css";
import DB from "./database";
import DisplayListeners from "./displayListeners";

class Main {
    constructor() {
        this.db = DB;
        this.display = "";
        this.displayListeners = new DisplayListeners();
        this.init();
    }

    init() {
        this.addEventListeners();
    }

    addEventListeners() {
        // todo
        this.displayListeners.addListerner({
            selector: "#add-todo-form-btn",
            func: this.db.todo.saveOne,
            objectToBind: this.db.todo
        });

        // project
        this.displayListeners.addListerner({
            selector: "#add-project-btn",
            func: this.db.project.saveOne,
            objectToBind: this.db.project
        });
    }

    run() {
        console.log("hello");
    }
}

const app = new Main();
// app.run();
