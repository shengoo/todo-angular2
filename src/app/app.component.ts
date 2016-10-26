import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  todoService: TodoService;
  todoList: Todo[] = [];
  newTodo = '';

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {
    this.todoList = this.todoService.getAll();
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
