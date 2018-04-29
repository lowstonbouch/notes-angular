import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: [ './add-note.component.css' ],
})
export class AddNoteComponent
{
  newTodo: Todo = new Todo();

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) {}

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