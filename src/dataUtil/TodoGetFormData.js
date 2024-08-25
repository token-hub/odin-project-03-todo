import DisplayElements from "../display/displayElements";

class TodoGetFormData {
    #identifiers = {
        title: "#title",
        description: "#description",
        priority: "#priority",
        dueDate: "#dueDate",
        projectId: "#projectId"
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

        return {
            title,
            description,
            priority,
            dueDate,
            projectId
        };
    }
}

export default TodoGetFormData;
