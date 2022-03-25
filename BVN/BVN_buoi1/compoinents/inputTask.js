class InputTask {
    $container;
    $input;
    $error;

    constructor(placeholder){
        this.$container = document.createElement('div');
        this.$input = document.createElement('input');
        this.$input.type = 'text';
        this.$input.placeholder = placeholder;

        this.$error = document.createElement('div');
    };

    getInputValue(){
        return this.$input.value;
    }

    setError(message){
        if(message){
            this.$error.classList.add('has_error');
            this.$error.innerHTML = message;
        }
        else{
            this.$error.classList.remove('has_error');
            this.$error.innerHTML = '';
        }
    }

    render(){
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$error);
        return this.$container;
    };
}

export { InputTask };