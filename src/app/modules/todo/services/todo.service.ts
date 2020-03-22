import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../models/todo";
import {BACKEND_BASE_DOMAIN} from "../../../../env";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public entities$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private todoList: Todo[] = [];

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    this.loading$.next(true);
    this.httpClient.get<Todo[]>(BACKEND_BASE_DOMAIN + 'todo')
      .subscribe(todoList => {
        this.todoList = todoList;
        this.entities$.next(this.todoList);
        this.loading$.next(false);
      })
  }

  public add(title: string) {
    this.loading$.next(true);
    this.httpClient.post<Todo>(
      BACKEND_BASE_DOMAIN + 'todo',
      { title }
    ).subscribe(todo => {
      this.todoList.push(todo);
      this.entities$.next(this.todoList);
      this.loading$.next(false);
    });
  }

  public update(todoOnComplete: Todo) {
    this.loading$.next(true);
    this.httpClient.patch<Todo>(
      BACKEND_BASE_DOMAIN + 'todo/' + todoOnComplete.id,
      {
        isCompleted: !todoOnComplete.isCompleted
      }
    ).subscribe((updatedTodo: Todo) => {
      this.todoList = this.todoList.map(todo => todo.id !== updatedTodo.id ? todo : updatedTodo);
      this.entities$.next(this.todoList);
      this.loading$.next(false);
    });
  }

  public remove(id: number) {
    this.loading$.next(true);
    this.httpClient.delete<void>(
      BACKEND_BASE_DOMAIN + 'todo/' + id
    ).subscribe(() => {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
      this.entities$.next(this.todoList);
      this.loading$.next(false);
    });
  }
}
