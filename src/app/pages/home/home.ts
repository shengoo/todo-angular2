import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [TodoService]
})
export class HomePage {
    newTodo = '';
    todoService:TodoService;
    constructor(public navCtrl: NavController, todoService: TodoService) {
        this.todoService = todoService;
    }

    add() {
        if (this.newTodo) {
            this.todoService.add(this.newTodo);
            this.newTodo = '';
        }
    }

    save(todo: Todo) {
        console.log(todo);
    }

    delete(todo: Todo) {
        this.todoService.delete(todo);
    }

}
