import Display from "./display";
import ProjectGetFormData from "../dataUtil/ProjectGetFormData";

class DisplayProject extends Display {
    constructor() {
        super();
        this.formData = new ProjectGetFormData();
    }

    #identifiers = {
        main: "#projects",
        projectId: "#project-form-input-id",
        projectName: "#project-form-input",
        projectSelect: "#projectId"
    };

    #className = "project";

    get identifiers() {
        return this.#identifiers;
    }

    get getFormData() {
        return this.formData.getFormData();
    }

    getDataFromChild(parentElement, isEdit) {
        return this.formData.getDataFromChildElements(parentElement, isEdit);
    }

    get getClassName() {
        return this.#className;
    }

    display(data) {
        const element = this.displayElements.getElement(this.identifiers.main);
        if (element) {
            data.forEach((d) => {
                const project = document.createElement("div");
                project.id = d.id;
                project.classList.add(this.getClassName);
                project.innerHTML = `
                    <p class='project-name'>${d.project}</p>
                    <button type="edit" class='project-edit-btn'>Edit</button>
                    <button type="button" class='project-delete-btn'>Delete</button>
                    `;

                element.appendChild(project);
            });
        }
    }

    populateProjectList(data) {
        const element = this.displayElements.getElement(this.identifiers.projectSelect);
        if (element && data.length) {
            data.forEach((d) => {
                const option = document.createElement("option");
                option.value = d.id;
                option.textContent = d.project;
                element.appendChild(option);
            });
        }
    }

    prepareEditForm(data) {
        const projectId = this.displayElements.getElement(this.identifiers.projectId);
        const projectName = this.displayElements.getElement(this.identifiers.projectName);
        projectId.value = data.id;
        projectName.value = data.projectName;
    }

    isEditFormActive() {
        const projectId = this.displayElements.getElementValue(this.identifiers.projectId);
        if (!projectId) {
            return false;
        } else {
            return projectId;
        }
    }
}

export default DisplayProject;
