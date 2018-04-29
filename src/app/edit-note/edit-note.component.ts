import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: [ './edit-note.component.css' ],
})
export class EditNoteComponent implements OnInit
{
  @Input() todo: Todo;
 
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) {}
 
  ngOnInit(): void {
    this.getHero();
  }
 
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodoById(id);
  }

  destroyTag( tag )
  {
    this.todo.tags = this.todo.tags.filter((item)=>{if(item !== tag){return item}});
  }

  saveTodo( todo )
  {
    let array:  Array<string> = this.todo.title.split(' ');
    array.forEach((item) => {
      if(item.slice(0,1) === '#'){
        this.todo.tags.push(item);
      }
    })
    this.todo.title = this.todo.title.replace(/#/g, '');
    this.todoService.toggleTodoEdit( this.todo);
  }

}
