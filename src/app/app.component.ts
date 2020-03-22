import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {BACKEND_BASE_DOMAIN} from "../env";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = '';

  public todoList: Todo[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Todo[]>(BACKEND_BASE_DOMAIN + 'todo')
      .subscribe(todoList => {
        this.todoList = todoList;
      })
  }

  onCreate(): void {
    if (this.title) {
      this.httpClient.post<Todo>(
        BACKEND_BASE_DOMAIN + 'todo',
        {
          title: this.title
        }
      ).subscribe(todo => {
        this.todoList.push(todo);
      });
      this.title = '';
    }
  }

  onComplete(todoOnComplete: Todo) {
    this.httpClient.patch<Todo>(
      BACKEND_BASE_DOMAIN + 'todo/' + todoOnComplete.id,
      {
        isCompleted: !todoOnComplete.isCompleted
      }
    ).subscribe((updatedTodo: Todo) => {
      this.todoList = this.todoList.map(todo => todo.id !== updatedTodo.id ? todo : updatedTodo);
    });
  }

  onRemove(todoOnDelete: Todo) {
    this.httpClient.delete<void>(
      BACKEND_BASE_DOMAIN + 'todo/' + todoOnDelete.id
    ).subscribe(() => {
      this.todoList = this.todoList.filter(todo => todo.id !== todoOnDelete.id);
    });
  }
}
