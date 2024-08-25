import LocalStorageManager from "./localStorageManager";

class Storage {
    constructor(storageManager) {
        this.storage = storageManager;
    }
    isNotDataEmpty(data) {
        if (Object.keys(data).length < 1) return false;
        return true;
    }
    updateOne(data) {
        if (!this.isNotDataEmpty(data)) return;
        this.storage.updateOne(data);
    }
    saveOne(data) {
        if (!this.isNotDataEmpty(data)) return;
        this.storage.saveOne(data);
    }
    deleteOne(data) {
        if (!this.isNotDataEmpty(data)) return;
        this.storage.deleteOne(data);
    }
    fetchAll() {
        return this.storage.data;
    }
}

export const projectStorage = "project";
export const todoStorage = "todo";
const projectLocalStorage = new Storage(new LocalStorageManager(projectStorage));
const todoLocalStorage = new Storage(new LocalStorageManager(todoStorage));

const storage = {
    project: projectLocalStorage,
    todo: todoLocalStorage
};

export default storage;
