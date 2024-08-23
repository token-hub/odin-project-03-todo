import { v4 as uuidv4 } from "uuid";
import { projectDB, todoDB } from "./database";

class DataUtil {
    generateId() {
        return uuidv4();
    }

    getDataFromChildElements(parentElement, collection, isEdit) {
        let processedData = {};

        if (!isEdit) {
            processedData.id = parentElement.id;
        } else {
            if (collection === projectDB) {
                processedData.id = parentElement.id;
                processedData.projectName = parentElement.querySelector("p.project-name").textContent;
            } else if (collection === todoDB) {
                processedData.id = parentElement.id;
                processedData.projectId = parentElement.querySelector("p.todo-projectId").textContent;
                processedData.title = parentElement.querySelector("p.todo-title").textContent;
                processedData.dueDate = parentElement.querySelector("p.todo-dueDate").textContent;
                processedData.priority = parentElement.querySelector("p.todo-priority").textContent;
                processedData.description = parentElement.querySelector("p.todo-description").textContent;
            }
        }

        return processedData;
    }
}
export default DataUtil;
