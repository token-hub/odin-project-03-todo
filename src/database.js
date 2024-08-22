import LocalStorageManager from "./localStorageManager";

class Database {
    constructor(databaseManager) {
        this.db = databaseManager;
    }
    isNotDataEmpty(data) {
        if (Object.keys(data).length < 1) return false;
        return true;
    }
    updateOne(data) {
        if (!this.isNotDataEmpty(data)) return;
    }
    saveOne(data) {
        if (!this.isNotDataEmpty(data)) return;
        this.db.saveOne(data);
    }
    deleteOne(data) {
        if (!this.isNotDataEmpty(data)) return;
    }
    fetchAll() {}
}

const projectLocalStorage = new Database(new LocalStorageManager("project"));
const todoLocalStorage = new Database(new LocalStorageManager("todo"));

const db = {
    project: projectLocalStorage,
    todo: todoLocalStorage
};

export default db;
