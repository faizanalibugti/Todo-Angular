import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  selectedId;

  @Input() todos;

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() completed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showId(todo) {
    // todo.completed = true;
    // this.selectedId.push(id);
    todo.completed = todo.completed ? false : true;
    this.completed.emit(todo)
  }

}
