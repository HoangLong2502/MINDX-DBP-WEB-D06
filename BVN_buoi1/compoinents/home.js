import { ModalCreateTask } from "./modalCreateTask.js";
import { TaskList } from "./taskList.js";

class Home{
    $container;
    $taskList;

    $modalCreateTask;

    $btnCreate;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('home');

        this.$taskList = new TaskList();

        this.$modalCreateTask = new ModalCreateTask();

        this.$btnCreate = document.createElement('button');
        this.$btnCreate.classList.add('home_btnCreate');
        this.$btnCreate.innerHTML = 'Create Mission';
        this.$btnCreate.addEventListener('click', this.handleCreate);
    };

    handleCreate =() =>{
        this.$modalCreateTask.setVisible(true);
    }

    render(){
        this.$container.appendChild(this.$taskList.render());
        this.$container.appendChild(this.$modalCreateTask.render());
        this.$container.appendChild(this.$btnCreate);
        return this.$container;
    };
}

export { Home };