import DataUtil from "../dataUtil/dataUtil";

class DisplayListeners {
    constructor() {
        this.dataUtil = new DataUtil();
    }

    addListener({ selector, func, objectToBind, entityModule }) {
        const element = document.querySelector(selector);
        if (element) {
            let boundFunc;

            // I am binding the Project/Todo object inside the index.js here
            // because the functionality will be coming from a different module
            // which is being imported too in the index.js
            element.addEventListener("click", () => {
                let data = entityModule.getFormData;
                let isEdit = entityModule.isEditFormActive();
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
                location.reload();
            });
        }
    }

    // for the edit, delete, mark complete buttons listeners
    addFormListeners({ selector, func, objectToBind, isEdit = false, entityModule, isCompleted = false }) {
        const elements = document.querySelectorAll(selector);
        if (elements.length) {
            elements.forEach((elem) => {
                elem.addEventListener("click", () => {
                    const parent = elem.parentElement;
                    let data = entityModule.getDataFromChild(parent, isEdit);
                    if (isCompleted) data.isCompleted = !data.isCompleted;
                    const boundFunc = func.bind(objectToBind);
                    boundFunc(data);
                    if (!isEdit || isCompleted) location.reload();
                });
            });
        }
    }
}

export default DisplayListeners;
