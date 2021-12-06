import { Component, OnInit } from '@angular/core';
import { CrudService } from './shared/service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTodo = null;

  todo = null;

  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.resetTodo();
    this.loadTodo()
  }

  resetTodo() {
    const emptyCourse = {
      id: null,
      title: "",
      completed: false
    }
    this.selectedTodo = emptyCourse
  }

  selectTodo(course) {
    this.selectedTodo = course;
    console.log("Selected Course", course)
  }

  loadTodo() {
    // this.resetTodo()
    this.todo = this.crud.all()
      .subscribe(todo => this.todo = todo);
  }

  deleteTodo(id) {
    this.crud.delete(id).subscribe(result => this.loadTodo());
  }

  saveTodo(todo) {
    if (todo.id){
      this.crud.update(todo).subscribe(result => this.loadTodo())
    } else {
      this.crud.create(todo).subscribe(result => this.loadTodo())
    }
    this.resetTodo()
  }

  updateTodo(todo) {
    this.crud.update(todo).subscribe(result => this.loadTodo())
  }
}
