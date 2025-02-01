import { Component, NgModule } from '@angular/core';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  constructor(){}
}
