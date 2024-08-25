import Display from "./display";

class DisplayProject extends Display {
    #identifier = "#projects";
    #className = "project";

    get identifier() {
        return this.#identifier;
    }
    get getClassName() {
        return this.#className;
    }

    display(data) {
        const element = this.displayElements.getElement(this.identifier);
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
}

export default DisplayProject;
