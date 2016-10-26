import { Injectable } from '@angular/core';


import { Todo } from './todo';

// @Injectable()
export class TodoService {
    todoList: Array<Todo>;

    storageKey = 'todos';

    constructor() {
        let todos = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

        this.todoList = todos.map((todo: { title: String, completed: Boolean }) => {
            let item = new Todo(todo.title);
            item.completed = todo.completed;
            return item;
        })
    }

    getAll() {
        return this.todoList;
    }
    add(title) {
        if (title) {
            this.todoList.push(new Todo(title));
            this.saveData();
        }
    }

    private saveData(){
        localStorage.setItem(this.storageKey,JSON.stringify(this.todoList));
    }
}