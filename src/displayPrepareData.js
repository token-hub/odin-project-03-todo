import { v4 as uuidv4 } from "uuid";

class DisplayPrepareData {
    prepare(data) {
        if (data.generateId) {
            data.id = uuidv4();
        }
        delete data.generateId;
        return data;
    }
}
export default DisplayPrepareData;
