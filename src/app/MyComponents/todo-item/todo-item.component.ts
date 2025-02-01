import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo; 
  
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  
  constructor(){}

  ngOnInit(): void {}
  
  onClick(todo: Todo): void {
    this.todoDelete.emit(todo);
    console.log("OnClick is triggered")
  }
  
  onCheckboxClick(todo:Todo){
    console.log(todo);
    this.todoCheckbox.emit(todo);
  }
}
