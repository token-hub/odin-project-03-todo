import DisplayElements from "../display/displayElements";

class TodoGetFormData {
    #identifiers = {
        title: "#title",
        description: "#description",
        priority: "#priority",
        dueDate: "#dueDate",
        projectId: "#projectId",
        pTag: {
            projectId: "p.todo-projectId",
            title: "p.todo-title",
            dueDate: "p.todo-dueDate",
            priority: "p.todo-priority",
            description: "p.todo-description",
            isCompleted: "p.todo-isCompleted"
        }
    };

    constructor() {
        this.displayElements = new DisplayElements();
    }

    get identifiers() {
        return this.#identifiers;
    }

    getFormData() {
        const title = this.displayElements.getElementValue(this.identifiers.title);
        const description = this.displayElements.getElementValue(this.identifiers.description);
        const priority = this.displayElements.getElementValue(this.identifiers.priority);
        const dueDate = this.displayElements.getElementValue(this.identifiers.dueDate);
        const projectId = this.displayElements.getElementValue(this.identifiers.projectId);
        const isCompleted = false;

        return {
            title,
            description,
            priority,
            dueDate,
            projectId,
            isCompleted
        };
    }

    getDataFromChildElements(parentElement, isEdit) {
        let processedData = {};

        if (!isEdit) {
            processedData.id = parentElement.id;
        } else {
            processedData.id = parentElement.id;
            processedData.projectId = parentElement.querySelector(this.identifiers.pTag.projectId).textContent;
            processedData.title = parentElement.querySelector(this.identifiers.pTag.title).textContent;
            processedData.dueDate = parentElement.querySelector(this.identifiers.pTag.dueDate).textContent;
            processedData.priority = parentElement.querySelector(this.identifiers.pTag.priority).textContent;
            processedData.description = parentElement.querySelector(this.identifiers.pTag.description).textContent;
            processedData.isCompleted = JSON.parse(parentElement.querySelector(this.identifiers.pTag.isCompleted).textContent);
        }

        return processedData;
    }
}

export default TodoGetFormData;
