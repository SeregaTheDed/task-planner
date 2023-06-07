'use strict'


function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

function textAreaAdjustAll() {
    var textareas = document.querySelectorAll(".task__description");
    textareas.forEach(elem => textAreaAdjust(elem));
}

document.addEventListener("DOMContentLoaded", function() {
    textAreaAdjustAll();
});

class Task{
    #number;
    #title;
    #description;
    #taskNode;
    #numberNode;
    #titleNode;
    #descriptionNode;

    get node() {
        return this.#taskNode;
    }

    constructor(number, title, description){
        this.#number = number;
        this.#title = title;
        this.#description = description;
        this.#initNode();
    }

    #initNode() {
        let taskNode = document.createElement('div');
        taskNode.classList.add('task');

        let numberNode = document.createElement('div');
        numberNode.classList.add('task__number');
        numberNode.textContent = this.#number;
        taskNode.append(numberNode);

        let taskContentNode = document.createElement('div');
        taskContentNode.classList.add('task__content');
        taskNode.append(taskContentNode);

        let titleNode = document.createElement('div');
        titleNode.classList.add('task__title');
        titleNode.textContent = this.#title;
        taskContentNode.append(titleNode);

        let descriptionNode = document.createElement('textarea');
        descriptionNode.classList.add('task__description');
        descriptionNode.textContent = this.#description;
        descriptionNode.setAttribute('onkeyup', 'textAreaAdjust(this)');
        taskContentNode.append(descriptionNode);

        this.#taskNode = taskNode;
        this.#numberNode = numberNode;
        this.#titleNode = titleNode;
        this.#descriptionNode = descriptionNode;

    }
}


let tasks = [
    new Task(1, 'Записаться к врачу', 'Прийти в кабинет 8 по адресу ул. Пушкина и записаться к врачу'),
    new Task(2, 'Пройти собеседование', 'Зайти в специальное приложение для собеседования и пройти его'),
    new Task(3, 'Подготовиться к экзамену', 'Очень интересная мысль меня посетила - подготовиться к экзамену. Но еще много времени для подготовки - до осени'),
];

const taskContainerNode = document.getElementById('todolist');

document.addEventListener('DOMContentLoaded', ()=>
{
    tasks.forEach(elem => taskContainerNode.append(elem.node));
});
