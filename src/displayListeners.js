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
            let boundFunc;

            // I am binding the Project/Todo object inside the index.js here
            // because the functionality will be coming from a different module
            // which is being imported too in the index.js
            element.addEventListener("click", () => {
                let data;
                let isEdit;

                if (collection === projectDB) {
                    data = this.display.getProjectFormValue();
                    isEdit = this.display.isEdit(projectDB);
                } else if (collection === todoDB) {
                    data = this.display.getTodoFormValues();
                    isEdit = this.display.isEdit(todoDB);
                }

                data.id = isEdit ? isEdit : this.dataUtil.generateId();

                if (Array.isArray(func)) {
                    // [0] - will be for the saveOne()
                    // [1] - will be for the updateOne()
                    const funcToUse = isEdit ? func[1] : func[0];
                    boundFunc = funcToUse.bind(objectToBind);
                } else {
                    boundFunc = func.bind(objectToBind);
                }

                boundFunc(data);
            });
        }
    }

    // for the edit and delete buttons listeners
    addFormListeners({ selector, func, objectToBind, isEdit = false, collection }) {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            elements.forEach((elem) => {
                elem.addEventListener("click", () => {
                    const parent = elem.parentElement;
                    let data = this.dataUtil.getDataFromChildElements(parent, collection, isEdit);
                    const boundFunc = func.bind(objectToBind);
                    boundFunc(data, collection);
                });
            });
        }
    }
}

export default DisplayListeners;
