import dataPrepareUtil from "./dataPrepareUtil";

class DisplayListeners {
    constructor() {
        this.dataPrepareUtil = new dataPrepareUtil();
    }

    addListener({ selector, func, objectToBind, data }) {
        const element = document.querySelector(selector);
        // I am binding the Project/Todo object inside the index.js here
        // because the functionality will be coming from a different module
        // which is being imported too in the index.js
        data = this.dataPrepareUtil.prepare(data);
        element.addEventListener("click", func.bind(objectToBind, data));
    }
}

export default DisplayListeners;
