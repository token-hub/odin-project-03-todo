import DisplayElements from "../display/displayElements";

class ProjectGetFormData {
    #identifiers = {
        projectName: "#project-form-input",
        pProjectName: "p.project-name"
    };

    constructor() {
        this.displayElements = new DisplayElements();
    }

    get identifiers() {
        return this.#identifiers;
    }

    getFormData() {
        const project = this.displayElements.getElementValue(this.identifiers.projectName);
        return {
            project
        };
    }

    getDataFromChildElements(parentElement, isEdit) {
        let processedData = {};

        if (!isEdit) {
            processedData.id = parentElement.id;
        } else {
            processedData.id = parentElement.id;
            processedData.projectName = parentElement.querySelector(this.identifiers.pProjectName).textContent;
        }

        return processedData;
    }
}

export default ProjectGetFormData;
