import DataUtil from "./dataUtil";
import Display from "./display";
import { projectDB, todoDB } from "./database";

class DisplayListeners {
    constructor() {
        this.dataUtil = new DataUtil();
        this.display = new Display();
    }

    addListener({ selector, func, objectToBind, collection }) {
        const element = document.querySelector(selector);
        if (element) {
            const boundFunc = func.bind(objectToBind);

            // I am binding the Project/Todo object inside the index.js here
            // because the functionality will be coming from a different module
            // which is being imported too in the index.js
            element.addEventListener("click", () => {
                let data;

                if (collection === projectDB) {
                    data = this.display.getProjectFormValue();
                } else if (collection === todoDB) {
                    data = this.display.getTodoFormValues();
                }
                data.id = this.dataUtil.generateId();
                boundFunc(data);
            });
        }
    }

    // for the edit and delete buttons listeners
    addFormListeners({ selector, func, objectToBind, isEdit = false, collection }) {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            elements.forEach((elem) => {
                const parent = elem.parentElement;
                let data = this.dataUtil.getDataFromChildElements(parent, collection, isEdit);
                elem.addEventListener("click", func.bind(objectToBind, data));
            });
        }
    }
}

export default DisplayListeners;
