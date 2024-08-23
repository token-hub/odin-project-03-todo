class Display {
    expandDetails() {}
    getElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            return element;
        }
    }
    getElementValue(selector) {
        const element = this.getElement(selector);
        if (element) {
            return element.value;
        }
        return null;
    }
    getFormValues() {
        const title = this.getElementValue("#title");
        const description = this.getElementValue("#description");
        const priority = this.getElementValue("#priority");
        const dueDate = this.getElementValue("#dueDate");
        const project = this.getElementValue("#project");

        return {
            title,
            description,
            priority,
            dueDate,
            project
        };
    }
    displayProjects(data) {}
    displayTodos(data) {
        const element = this.getElement("#projects");

        if (element) {
            data.forEach((d) => {
                const todo = document.createElement("div");
                todo.id = d.id;
                todo.classList.add("todo");
                todo.innerHTML = `
                    <p>${d.project}</p>
                    <p>${d.title}</p>
                    <p>${d.dueDate}</p>
                    <p>${d.priority}</p>
                    <p>${d.description}</p>
                    <button type="edit" id='todo-edit-btn'>Edit</button>
                    <button type="button" id'todo-delete-btn'>Delete</button>
                    `;

                element.appendChild(todo);
            });
        }
    }
}

export default Display;
