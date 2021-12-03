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
      title: ""
    }
    this.selectedTodo = emptyCourse
  }

  selectTodo(course) {
    this.selectedTodo = course;
    console.log("Selected Course", course)
  }

  loadTodo() {
    this.resetTodo()
    this.todo = this.crud.all()
      .subscribe(todo => this.todo = todo);
  }

  deleteTodo(courseId) {
    this.crud.delete(courseId).subscribe(result => this.loadTodo())
  }

  saveTodo(course) {
    if (course.id){
      this.crud.update(course).subscribe(result => this.loadTodo())
    } else {
      this.crud.create(course).subscribe(result => this.loadTodo())
    }
    this.resetTodo()
  }
}
