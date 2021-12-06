import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';

// const BASE_URL = 'https://my-json-server.typicode.com/faizanalibugti/JSON-Server/todo';
const BASE_URL = 'http://localhost:3000/todo';
// const BASE_URL = '../assets/todo.json';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  // CRUD: Create, Read, Update, Delete Functionality

  all() {
    // return all todos
    return this.http.get(this.getUrl())

  }

  create(todo: Todo) {
    console.log("CREATE TODO", todo)
    return this.http.post(this.getUrl(), todo)

  }

  update(todo: Todo) {
    console.log("UPDATE TODO", todo)
    return this.http.put(`${this.getUrl()}/${todo.id}`, todo)
  }

  delete(id: number) {
    console.log("DELETE TODO", id)
    return this.http.delete(`${this.getUrl()}/${id}`)

  }

  getUrl() {
    return BASE_URL
  }
}
