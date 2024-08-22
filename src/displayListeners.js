class DisplayListeners {
    constructor(obj) {
        this.obj = obj;
    }

    addListerner(selector, fnc) {
        const element = document.querySelector(selector);
        // I am binding the Main object inside the index.js here
        // because the functionality will be coming from a different module
        // which is being imported too in the index.js
        element.addEventListener("click", fnc.bind(this.obj));
    }
}

export default DisplayListeners;
