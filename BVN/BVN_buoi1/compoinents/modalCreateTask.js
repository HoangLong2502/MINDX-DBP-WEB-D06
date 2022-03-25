import { InputTask } from "./inputTask.js";

class ModalCreateTask {
    $container;
    $form;
    $inputNameTask;
    $inputTimeTask;
    $btnSubmit;
    $btnDel;
    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('modal_create_task');
        this.$container.style.display = 'none';

        this.$form = document.createElement('form');
        this.$form.addEventListener('submit', this.handleSubmit);

        this.$inputNameTask = new InputTask('Name Mission');
        this.$inputTimeTask = new InputTask('Time Mission')

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Add mission';

        this.$btnDel = document.createElement('button');
        this.$btnDel.addEventListener('click', this.handleDel);
        this.$btnDel.innerHTML = 'X';
        this.$btnDel.style.backgroundColor = '#F5467A'
        this.$btnDel.style.width = '30px';
        this.$btnDel.style.height = '30px';
        this.$btnDel.style.marginTop = '10px'
    };

    handleSubmit = (event) =>{
        event.preventDefault();

        const name = this.$inputNameTask.getInputValue();
        const time = this.$inputTimeTask.getInputValue();

        this.$inputNameTask.setError(null);
        this.$inputTimeTask.setError(null);

        if(!name){
            this.$inputNameTask.setError('Name cant be empty');
        }
        if(!time){
            this.$inputTimeTask.setError('Time cant be empty');
        }
        else{
            console.log(this.$inputNameTask.getInputValue());
                db.collection('TaskItem')
                .add({
                    name: this.$inputNameTask.getInputValue(),
                    time: this.$inputTimeTask.getInputValue(),
                })
                .then(() =>{
                    this.setVisible(false);
                })
        }

    };

    handleDel = () =>{
        this.setVisible(false);
    }

    setVisible(visible){
        if(visible){
            this.$container.style.display = 'flex';
        }
        else{
            this.$container.style.display = 'none';
        }
    };

    render(){
        this.$form.appendChild(this.$inputNameTask.render());
        this.$form.appendChild(this.$inputTimeTask.render());
        this.$form.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$form);
        this.$container.appendChild(this.$btnDel);

        return this.$container;
    };
}

export { ModalCreateTask };