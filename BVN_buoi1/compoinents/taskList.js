import { taskItem } from "./taskItem.js";

class TaskList{
    $container;

    $taskList;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('tasl_list');

        this.$taskList = document.createElement('div');

        db.collection('TaskItem').onSnapshot(this.taskListener);
    };

    taskListener = (snapshot) =>{
        snapshot.docChanges().forEach((change) =>{
            const taskitem = change.doc.data();
            const name = taskitem.name;
            const time = taskitem.time;
            const $taskItem = new taskItem(name, time);
            this.$taskList.appendChild($taskItem.render());
        })
    };

    render(){
        this.$container.appendChild(this.$taskList);
        return this.$container;
    };
}

export { TaskList }