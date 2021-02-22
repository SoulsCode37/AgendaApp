export default class SelectionHandler {
    constructor(){
        this.selectedItems = [];
    }

    addSelectedItem(item) {
        this.selectedItems.push(item);
    }
    
    removeSelectedItem(item) {
        var index = this.selectedItems.indexOf(item);
        if(index != -1)
          this.selectedItems.splice(index, 1);
    }
}