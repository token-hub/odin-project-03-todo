import "./styles.css";
import DB from "./database";
import DisplayListeners from "./displayListeners";

class Main {
    constructor() {
        this.db = DB;
        this.display = "";
        this.displayListeners = new DisplayListeners(this);
        this.init();
    }

    init() {
        this.addEventListeners();
    }

    addEventListeners() {
        this.displayListeners.addListerner("#add-todo-form-btn", this.test);
        this.displayListeners.addListerner("#add-project-btn", this.test);
    }

    test() {
        console.log("Listener working");
    }

    run() {
        this.db.project.saveOne({
            data: "hello"
        });
        console.log("hello");
    }
}

const app = new Main();
// app.run();
