import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';
import {FormsModule} from "@angular/forms";
import {EntityDataService} from "@ngrx/data";
import {TodoDataService} from "./store/entity/todo-data.service";

@NgModule({
  declarations: [TodoWidgetComponent],
  exports: [
    TodoWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TodoDataService]
})
export class TodoModule {
  constructor(
    entityDataService: EntityDataService,
    todoDataService: TodoDataService,
  ) {
    entityDataService.registerService('Todo', todoDataService);
  }
}
