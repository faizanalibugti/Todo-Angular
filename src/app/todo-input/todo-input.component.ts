import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  selectedTodo;
  originalTitle


  @Input() set todo(value) {
    if (value) {
      this.selectedTodo = Object.assign({}, value)
      this.originalTitle = value.title;
    }
  };

  @Output() saveCourse = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
