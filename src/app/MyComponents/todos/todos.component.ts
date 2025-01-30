import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

todos!: Todo[];
constructor(){
  
  this.todos = [
    {
      sno: 1,
      title: "Title 1",
      desc: "Desc 1",
      active: true
    },
    {
      sno: 2,
      title: "Title 2",
      desc: "Desc 2",
      active: true
    },
    {
      sno: 3,
      title: "Title 3",
      desc: "Desc 3",
      active: true
    }
  ]
}
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

}
