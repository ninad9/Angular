import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input()  //Input Decorator
  todo!: Todo; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  
  constructor(){  
  }

  ngOnInit(): void {
  }
  
  onClick(todo: Todo): void {
    this.todoDelete.emit(todo);
    console.log("OnClick is triggered")
  }

}
