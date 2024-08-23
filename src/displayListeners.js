import dataPrepareUtil from "./dataPrepareUtil";
import { projectDB, todoDB } from "./database";

class DisplayListeners {
    constructor() {
        this.dataPrepareUtil = new dataPrepareUtil();
    }

    addListener({ selector, func, objectToBind, data }) {
        const element = document.querySelector(selector);
        if (element) {
            // I am binding the Project/Todo object inside the index.js here
            // because the functionality will be coming from a different module
            // which is being imported too in the index.js
            data = this.dataPrepareUtil.prepare(data);
            element.addEventListener("click", func.bind(objectToBind, data));
        }
    }

    // for the edit and delete buttons listeners
    addFormListeners({ selector, func, objectToBind, isEdit = false, collection }) {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            elements.forEach((elem) => {
                const parent = elem.parentElement;
                let data = this.dataPrepareUtil.getDataFromChildElements(parent, collection, isEdit);
                elem.addEventListener("click", func.bind(objectToBind, data));
            });
        }
    }
}

export default DisplayListeners;
