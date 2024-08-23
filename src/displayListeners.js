class DisplayListeners {
    constructor() {}

    addListener({ selector, func, objectToBind, data }) {
        const element = document.querySelector(selector);
        // I am binding the Project/Todo object inside the index.js here
        // because the functionality will be coming from a different module
        // which is being imported too in the index.js
        element.addEventListener("click", func.bind(objectToBind, data));
    }
}

export default DisplayListeners;
