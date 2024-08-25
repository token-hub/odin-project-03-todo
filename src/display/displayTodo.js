import Display from "./display";
import TodoGetFormData from "../dataUtil/TodoGetFormData";

class DisplayTodo extends Display {
    constructor() {
        super();
        this.formData = new TodoGetFormData();
    }

    #identifiers = {
        main: "todos",
        todoId: "#todo-form-input-id"
    };

    #className = "todo";

    get identifiers() {
        return this.#identifiers;
    }

    get getClassName() {
        return this.#className;
    }

    get getFormData() {
        return this.formData.getFormData();
    }

    getDataFromChild(parentElement, isEdit) {
        return this.formData.getDataFromChildElements(parentElement, isEdit);
    }

    display(data) {
        const element = this.displayElements.getElement(this.identifiers.main);

        if (element) {
            data.forEach((d) => {
                const todo = document.createElement("div");
                todo.id = d.id;
                todo.classList.add(this.getClassName);
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

    isEditFormActive() {
        const todoId = this.displayElements.getElementValue(this.identifiers.todoId);
        if (!todoId) {
            return false;
        } else {
            return todoId;
        }
    }
}

export default DisplayTodo;
