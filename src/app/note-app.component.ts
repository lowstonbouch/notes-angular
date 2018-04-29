import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.css']
})
export class NoteAppCompontent {
  newTodo: Todo = new Todo();

  constructor( private todoService: TodoService ) {}

  addTodo()
  {
    let array:  Array<string> = this.newTodo.title.split(' ');
    array.forEach((item) => {
      if(item.slice(0,1) === '#'){
        this.newTodo.tags.push(item);
      }
    })
    this.newTodo.title = this.newTodo.title.replace(/#/g, '');
    this.todoService.addTodo( this.newTodo );
    this.newTodo = new Todo();
  }
}
