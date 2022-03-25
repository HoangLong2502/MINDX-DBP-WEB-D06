import { ListInfo } from "./listInfo.js";

class InputAPI {
    $container;
    $form;
    $inputAPI;
    $btnSend;

    $list;

    constructor () {
        this.$container = document.createElement('div');
        this.$container.classList.add('inputAPI');
        this.$form = document.createElement('form');
        this.$form.addEventListener('submit', this.handleSubmit);
        this.$inputAPI = document.createElement('input');
        this.$inputAPI.placeholder = 'Nhập link API';
        this.$btnSend = document.createElement('button');
        this.$btnSend.type = 'submit';
        this.$btnSend.innerHTML = 'Get info';

        this.$list = document.createElement('div');
        this.$list.classList.add('list');

    };

    getAPI () {
        return this.$inputAPI.value;
    };

    getUserInfoFromGithub(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () => {
                resolve(xhr.responseText);
            };
            xhr.onerror = () => {
                reject(xhr.statusText);
            };
            xhr.send();
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const input = this.$inputAPI.value;
        if(!input){
            alert('Hãy nhập API');
        }
        else {
            function getUserInfoFromGithub(url) {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', url);
                    xhr.onload = () => {
                        resolve(xhr.responseText);
                    };
                    xhr.onerror = () => {
                        reject(xhr.statusText);
                    };
                    xhr.send();
                });
            };
            getUserInfoFromGithub(this.$inputAPI.value)
                .then(function (resultData) {
                    const id = document.getElementById('id');
    
                    const data = resultData.split(",");
                    console.log(data);
                    const name = data[18];
                    const avatar1 = data[3];
                    const avatar2 =avatar1.split(":")
                    const avatar = avatar2[1] +":"+ avatar2[2];
                    const length = avatar.length
                    const url = avatar.slice(2, length);
                    const email = data[22];
                    const numberOfFollow = data[28];
                    console.log(numberOfFollow, name, avatar, url, email);
                    const $listInfo = new ListInfo(name, url, email, numberOfFollow);
                
                    id.appendChild($listInfo.render());
                })
                .catch(function (error) {
                    console.log('Lỗi', error);
                })
        }
    };

    render () {
        this.$form.appendChild(this.$inputAPI);
        this.$form.appendChild(this.$btnSend);
        // this.$form.appendChild(this.$listInfo.render())
        this.$container.appendChild(this.$form);
        return this.$container;
    };
}
export { InputAPI };