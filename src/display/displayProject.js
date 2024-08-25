import Display from "./display";

class DisplayProject extends Display {
    #identifiers = {
        main: "#projects",
        projectId: "#project-form-input-id",
        projectName: "#project-form-input"
    };
    #className = "project";

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

    prepareEditForm(data, collection) {
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
