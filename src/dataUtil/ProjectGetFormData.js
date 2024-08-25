import DisplayElements from "../display/displayElements";

class ProjectGetFormData {
    #identifier = "#project-form-input";

    constructor() {
        this.displayElements = new DisplayElements();
    }

    get identifier() {
        return this.#identifier;
    }

    getFormData() {
        const project = this.displayElements.getElementValue(this.identifier);
        return {
            project
        };
    }
}

export default ProjectGetFormData;
