class DisplayElements {
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
}

export default DisplayElements;
