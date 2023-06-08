'use strict'

function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

function textAreaAdjustAll() {
    var textareas = document.querySelectorAll(".task__description");
    textareas.forEach(elem => textAreaAdjust(elem));
}

class Task{
    #number;
    #title;
    #description;
    #taskNode;
    #numberNode;
    #titleNode;
    #descriptionNode;

    get node() { return this.#taskNode; }

    get number() { return this.#number; }

    get title() { return this.#title; }

    get description() { return this.#description; }

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

        let titleNode = document.createElement('input');
        titleNode.classList.add('task__title');
        titleNode.value = this.#title;
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

class TodoList{
    #taskArray;
    #todoListId;

    get maxNumber() {
        return this.#taskArray.length;
    }

    constructor(taskArray, todoListId){
        this.#todoListId = todoListId;
        this.#init(taskArray.sort((a,b) => a.number - b.number));
    }
    #init(taskArray){
        this.#taskArray = [];
        taskArray.forEach(elem => this.addNewTask(elem.title, elem.description) );
        textAreaAdjustAll();
    }
    addNewTask(title, description){
        const taskContainerNode = document.getElementById(this.#todoListId);
        const newTask = new Task(this.maxNumber+1, title, description);
        this.#taskArray.push(newTask);
        taskContainerNode.append(newTask.node);
    }
}

let tasks = [
    new Task(1, 'Записаться к врачу', 'Прийти в кабинет 8 по адресу ул. Пушкина и записаться к врачу'),
    new Task(2, 'Пройти собеседование', 'Зайти в специальное приложение для собеседования и пройти его'),
    new Task(3, 'Подготовиться к экзамену', 'Очень интересная мысль меня посетила - подготовиться к экзамену. Но еще много времени для подготовки - до осени'),
];




let todoList = new TodoList(tasks, 'todolist');

document.getElementById('add_new_task_button').addEventListener('click', () => {
    todoList.addNewTask('', '');
});
document.getElementById('save_tasks_button').addEventListener('click', () => {
    //
});



document.addEventListener('DOMContentLoaded', ()=>
{
    
});
