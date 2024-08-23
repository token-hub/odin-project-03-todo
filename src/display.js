class Display {
    expandDetails() {}
    getElementValue(selector) {
        const element = document.querySelector(selector);
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
}

export default Display;
