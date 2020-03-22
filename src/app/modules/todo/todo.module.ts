import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TodoWidgetComponent],
  exports: [
    TodoWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoModule { }
