import { Component } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: [ './note-list.component.css' ],
})
export class NoteListComponent
{
  newNote: Note = new Note();
  constructor( private noteService: NoteService ) {}

  removeNote( note )
  {
    this.noteService.deleteNoteById( note.id );
  }

  get notes()
  {
    return this.noteService.getAllNotes();
  }

}
