import { projectDB, todoDB } from "../storage/database";
import DisplayElements from "./displayElements";

class Display {
    constructor() {
        this.displayElements = new DisplayElements();
    }
    // showing and unshowing data
    getTodoFormValues() {
        const title = this.displayElements.getElementValue("#title");
        const description = this.displayElements.getElementValue("#description");
        const priority = this.displayElements.getElementValue("#priority");
        const dueDate = this.displayElements.getElementValue("#dueDate");
        const projectId = this.displayElements.getElementValue("#projectId");

        return {
            title,
            description,
            priority,
            dueDate,
            projectId
        };
    }
    getProjectFormValue() {
        const project = this.displayElements.getElementValue("#project-form-input");
        return {
            project
        };
    }
    display() {
        throw Error("I am not implemented yet!");
    }
    getFormValues() {
        throw Error("I am not implemented yet");
    }

    displayTodos(data) {
        const element = this.displayElements.getElement("#todos");

        if (element) {
            data.forEach((d) => {
                const todo = document.createElement("div");
                todo.id = d.id;
                todo.classList.add("todo");
                todo.innerHTML = `
                    <p class='todo-projectId'>${d.projectId}</p>
                    <p class='todo-title'>${d.title}</p>
                    <p class='todo-dueDate'>${d.dueDate}</p>
                    <p class='todo-priority'>${d.priority}</p>
                    <p class-'todo-description'>${d.description}</p>
                    <button type="edit" class='todo-edit-btn'>Edit</button>
                    <button type="button" class='todo-delete-btn'>Delete</button>
                    `;

                element.appendChild(todo);
            });
        }
    }
    prepareEditForm(data, collection) {
        if (collection === projectDB) {
            const projectId = this.displayElements.getElement("#project-form-input-id");
            const projectName = this.displayElements.getElement("#project-form-input");
            projectId.value = data.id;
            projectName.value = data.projectName;
        }
    }
    isEdit(collection) {
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
