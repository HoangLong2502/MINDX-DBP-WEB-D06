class taskItem {
    $container;
    $colorTask;
    $content;
    $txtNameTask;
    $txtTime;
    $tick;

    constructor(name, time){
        this.$container = document.createElement('div');
        this.$container.classList.add('taskItem-ctn');

        this.$colorTask = document.createElement('div');
        this.$colorTask.classList.add('taskItem-color');

        this.$content = document.createElement('div');
        this.$content.classList.add('taskItem-content');

        this.$txtNameTask = document.createElement('h3');
        this.$txtNameTask.innerHTML = name;

        this.$txtTime = document.createElement('p');
        this.$txtTime.innerHTML = time;

        this.$tick = document.createElement('button');
        this.$tick.classList.add('taskItem-tick');
        this.$tick.addEventListener('click', this.handleTick);
    };

    setColor = (color) =>{
        this.$colorTask.style.backgroundColor = color;
    }

    handleTick = () =>{
        if(this.$colorTask.style.backgroundColor != '#838C9F'){
            this.$tick.classList.add('uil-check');
            this.$txtNameTask.style.textDecoration = 'line-through';
            this.$txtNameTask.style.color = '#838C9F'
            this.$txtTime.style.color = '#838C9F'
            this.$colorTask.style.backgroundColor = '#838C9F';
        }
        if(this.$colorTask.style.backgroundColor == '#838C9F'){
            this.$tick.classList.remove('uil-check');
        }
    }



    render(){
        this.$content.appendChild(this.$txtNameTask);
        this.$content.appendChild(this.$txtTime);

        this.$container.appendChild(this.$colorTask);
        this.$container.appendChild(this.$content);
        this.$container.appendChild(this.$tick);

        return this.$container;
    }
}

export { taskItem };