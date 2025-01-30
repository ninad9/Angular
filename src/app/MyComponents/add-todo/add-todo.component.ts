import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  
  title!: string;
  desc!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();  

  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
