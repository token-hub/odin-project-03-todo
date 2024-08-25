import Display from "./display";

class DisplayTodo extends Display {
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
