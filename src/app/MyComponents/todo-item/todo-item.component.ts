import { Component, Input, OnInit } from '@angular/core';
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
  constructor(){  
  }

  ngOnInit(): void {
  }
  
  onClick(): void {
    console.log("OnClick is triggered")
  }

}
