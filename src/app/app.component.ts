import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = '';

  public todoList: Todo[];

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
    this.httpClient.get<Todo[]>('http://localhost:3000/rest/todo')
      .subscribe(todoList => {
        this.todoList = todoList;
      })
  }

  onCreate(): void {
    if (this.title) {
      this.httpClient.post<Todo>(
        'http://localhost:3000/rest/todo',
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
      'http://localhost:3000/rest/todo/' + todoOnComplete.id,
      {
        isCompleted: !todoOnComplete.isCompleted
      }
    ).subscribe((updatedTodo: Todo) => {
      this.todoList = this.todoList.map(todo => todo.id !== updatedTodo.id ? todo : updatedTodo);
    });
  }

  onRemove(todoOnDelete: Todo) {
    this.httpClient.delete<void>(
      'http://localhost:3000/rest/todo/' + todoOnDelete.id
    ).subscribe(() => {
      this.todoList = this.todoList.filter(todo => todo.id !== todoOnDelete.id);
    });
  }
}
