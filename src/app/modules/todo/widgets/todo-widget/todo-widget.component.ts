import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo";
import {HttpClient} from "@angular/common/http";
import {BACKEND_BASE_DOMAIN} from "../../../../../env";
import {TodoService} from "../../services/todo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {
  public title = '';

  public todoList$: Observable<Todo[]> = this.todoService.entities$;
  public loading$: Observable<boolean> = this.todoService.loading$;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getWithQuery({
      'limit': '10',
      'offset': '0'
    });
  }

  onCreate(): void {
    if (this.title) {
      this.todoService.add({
        id: null,
        title: this.title,
        isCompleted: false,
      });
      this.title = '';
    }
  }

  onComplete(todo: Todo) {
    this.todoService.update({
      ...todo,
      isCompleted: !todo.isCompleted
    });
  }

  onRemove(todo: Todo) {
    this.todoService.delete(todo.id);
  }

}
