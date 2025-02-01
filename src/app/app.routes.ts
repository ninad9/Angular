import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutTodoComponent } from './MyComponents/about-todo/about-todo.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutTodoComponent },
  ];
