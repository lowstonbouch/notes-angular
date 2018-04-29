import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: [ './add-note.component.css' ],
})
export class AddNoteComponent
{
  newNote: Note = new Note();

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {}

  addNote()
  {
    let array:  Array<string> = this.newNote.title.split(' ');
    array.forEach((item) => {
      if(item.slice(0,1) === '#'){
        if(this.newNote.tags.length){
          if(this.newNote.tags.every((tag)=>{
            if(tag !== item){
              return true;
            }
          })){
            this.newNote.tags.push(item);
          }
        }else{
          this.newNote.tags.push(item);
        }
      }
    })
    this.newNote.title = this.newNote.title.replace(/#/g, '');
    this.noteService.addNote( this.newNote );
    this.newNote = new Note();
  }

}