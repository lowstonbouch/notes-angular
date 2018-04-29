import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: [ './note-list.component.css' ],
})
export class NoteListComponent
{
  newTodo: Todo = new Todo();
  constructor( private todoService: TodoService ) {}

  removeTodo( todo )
  {
    this.todoService.deleteTodoById( todo.id );
  }

  get todos()
  {
    return this.todoService.getAllTodos();
  }

}
