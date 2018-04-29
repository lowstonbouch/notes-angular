import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteService
{

  lastId: number = 0;
  notes: Note[] = [];

  constructor() {}
  addNote( note: Note ): NoteService
  {
    if( !note.title )
    {
      return;
    }

    if ( !note.id )
    {
      note.id = ++this.lastId;
    }

    this.notes.push( note );

    return this;
  }

  deleteNoteById( id: number ): NoteService
  {
    this.notes = this.notes
      .filter( note => note.id !== id );

    return this;
  }

  updateNoteById( id: number, values: Object = {} ): Note
  {
    let note = this.getNoteById( id );

    if ( !note )
    {
      return null;
    }

    Object.assign( note, values );

    return note;
  }

  getAllNotes(): Note[]
  {
    return this.notes;
  }

  getNoteById( id: number ): Note
  {
    return this.notes
      .filter( todo => todo.id === id )
      .pop();
  }

  toggleNoteEdit( note: Note )
  {
    let updatedNote = this.updateNoteById( note.id, {
      title: note.title,
      tags: note.tags
    } );

    return updatedNote;
  }
}
