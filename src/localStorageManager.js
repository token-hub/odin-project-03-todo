class LocalStorageManager {
    #data = [];

    constructor(collection) {
        this.collection = collection;
        this.fetchAll();
    }

    get data() {
        return this.#data;
    }

    set setData(newData) {
        this.#data = newData;
    }

    fetchAll() {
        const data = localStorage.getItem(this.collection);
        if (data) {
            this.setData = JSON.parse(data);
        }
    }

    updateOne(data) {
        this.fetchAll();
    }
    saveOne(data) {
        this.fetchAll();
        const newData = this.data;
        newData.push(data);
        localStorage.setItem(this.collection, JSON.stringify(newData));
    }
    deleteOne(data) {
        this.fetchAll();
        const currentData = this.data;
        const filteredData = currentData.filter((d) => {
            return d.id !== data.id;
        });
        localStorage.setItem(this.collection, JSON.stringify(filteredData));
    }
}

export default LocalStorageManager;
