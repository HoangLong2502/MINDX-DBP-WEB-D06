class ListInfo {
    $container;
    $name;
    $avatar;
    $email;
    $follower;

    constructor(name, avatar, email, numberOfFollow) {
        this.$container = document.createElement('div');
        this.$container.classList.add('listInfo');
        this.$name = document.createElement('div');
        this.$name.innerHTML = name;
        this.$avatar = document.createElement('img');
        this.$avatar.innerHTML = 'avatar';
        this.$avatar.src = avatar;
        this.$email = document.createElement('div');
        this.$email.innerHTML =  email;
        this.$follower = document.createElement('div');
        this.$follower.innerHTML =  numberOfFollow;
    }

    render() {
        this.$container.appendChild(this.$name);
        this.$container.appendChild(this.$avatar);
        this.$container.appendChild(this.$email);
        this.$container.appendChild(this.$follower);
        return this.$container;
    }
}

export { ListInfo };