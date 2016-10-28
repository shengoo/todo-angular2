//import { Injectable } from '@angular/core';


import { Todo } from '../models/todo';

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
    /**
     *
     */
    add(title:String) {
        if (title) {
            this.todoList.push(new Todo(title));
            this.saveData();
        }
    }
    delete(todo:Todo){
        this.todoList.splice(this.todoList.indexOf(todo),1);
        this.saveData();
    }

    private saveData(){
        localStorage.setItem(this.storageKey,JSON.stringify(this.todoList));
    }
}
