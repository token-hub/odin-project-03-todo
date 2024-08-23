import { v4 as uuidv4 } from "uuid";

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
                processedData.projectName = parentElement.querySelector(".project-name");
            } else if (collection === todoDB) {
                processedData.id = parentElement.id;
                processedData.projectId = parentElement.querySelector("todo-projectId");
                processedData.title = parentElement.querySelector("todo-title");
                processedData.dueDate = parentElement.querySelector("todo-dueDate");
                processedData.priority = parentElement.querySelector("todo-priority");
                processedData.description = parentElement.querySelector("todo-description");
            }
        }

        return processedData;
    }
}
export default DataUtil;
