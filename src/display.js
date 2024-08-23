import { projectDB, todoDB } from "./database";

class Display {
    expandDetails() {}
    getElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            return element;
        }
    }
    getElements(selector) {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            return elements;
        }
    }
    getElementValue(selector) {
        const element = this.getElement(selector);
        if (element) {
            return element.value;
        }
        return null;
    }
    getTodoFormValues() {
        const title = this.getElementValue("#title");
        const description = this.getElementValue("#description");
        const priority = this.getElementValue("#priority");
        const dueDate = this.getElementValue("#dueDate");
        const projectId = this.getElementValue("#projectId");

        return {
            title,
            description,
            priority,
            dueDate,
            projectId
        };
    }
    getProjectFormValue() {
        const project = this.getElementValue("#project-form-input");
        return {
            project
        };
    }
    displayProjects(data) {
        const element = this.getElement("#projects");
        if (element) {
            data.forEach((d) => {
                const project = document.createElement("div");
                project.id = d.id;
                project.classList.add("project");
                project.innerHTML = `
                    <p class='project-name'>${d.project}</p>
                    <button type="edit" class='project-edit-btn'>Edit</button>
                    <button type="button" class='project-delete-btn'>Delete</button>
                    `;

                element.appendChild(project);
            });
        }
    }
    displayTodos(data) {
        const element = this.getElement("#todos");

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
            const projectId = this.getElement("#project-form-input-id");
            const projectName = this.getElement("#project-form-input");
            projectId.value = data.id;
            projectName.value = data.projectName;
        }
    }
    isEdit(collection) {
        if (collection === projectDB) {
            const projectId = this.getElementValue("#project-form-input-id");
            if (!projectId) {
                return false;
            } else {
                return projectId;
            }
        }

        if (collection === todoDB) {
            const todoId = this.getElementValue("#todo-form-input-id");
            if (!todoId) {
                return false;
            } else {
                return todoId;
            }
        }
    }
}

export default Display;
