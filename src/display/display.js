import { projectDB, todoDB } from "../storage/database";
import DisplayElements from "./displayElements";

class Display {
    constructor() {
        this.displayElements = new DisplayElements();
    }
    display() {
        throw Error("I am not implemented yet!");
    }
    prepareEditForm(data, collection) {
        throw Error("I am not implemented yet!");
    }
    isEditFormActive(collection) {
        throw Error("I am not implemented yet!");
        if (collection === projectDB) {
            const projectId = this.displayElements.getElementValue("#project-form-input-id");
            if (!projectId) {
                return false;
            } else {
                return projectId;
            }
        }

        if (collection === todoDB) {
            const todoId = this.displayElements.getElementValue("#todo-form-input-id");
            if (!todoId) {
                return false;
            } else {
                return todoId;
            }
        }
    }
}

// get elements
// get elements values
// displaying projects
// displaying todos
// preparing edit form
// checking if is it a edit

export default Display;
