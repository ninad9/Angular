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
localItems: string;
todos!: Todo[];
localStorage!: Storage;
constructor(){
  this.localItems = localStorage.getItem("todos") || "";
  if(this.localItems == ""){
    this.todos = []
  }else{
    this.todos = JSON.parse(this.localItems);
  }
  
    
}
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

}
