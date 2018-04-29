import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 
import { NoteAppCompontent } from './note-app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoService } from './todo.service';

import { AppRoutingModule }     from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    NoteAppCompontent,
    NoteListComponent,
    EditNoteComponent,
    AddNoteComponent
  ],
  providers: [ TodoService ],
  bootstrap: [ NoteAppCompontent ]
})
export class AppModule { }