import { v4 as uuidv4 } from "uuid";

class DataUtil {
    generateId() {
        return uuidv4();
    }
}
export default DataUtil;
