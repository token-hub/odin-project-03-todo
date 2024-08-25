import { projectDB, todoDB } from "../storage/database";
import DisplayElements from "./displayElements";

class Display {
    constructor() {
        this.displayElements = new DisplayElements();
    }
    display() {
        throw Error("I am not implemented yet!");
    }
    prepareEditForm() {
        throw Error("I am not implemented yet!");
    }
    isEditFormActive() {
        throw Error("I am not implemented yet!");
    }
}

// get elements
// get elements values
// displaying projects
// displaying todos
// preparing edit form
// checking if is it a edit

export default Display;
