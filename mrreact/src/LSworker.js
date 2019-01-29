export default class LSworker {
    static initStore() {
        if (!localStorage.getItem("book")) {
            LSworker.setBook([]);
        }
    }

    static getListFromBook() {
        return JSON.parse(localStorage.getItem("book"));
    }

    static setBook(arr) {
        localStorage.setItem("book", JSON.stringify(arr));
    }

    static addRecordToBook(recordName, recordPhone) {
        const list = LSworker.getListFromBook();
        list.push({
            recordName: recordName,
            recordPhone: recordPhone
        });
        LSworker.setBook(list);
    }
}
