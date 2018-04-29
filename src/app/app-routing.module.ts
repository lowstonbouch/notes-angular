import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NoteListComponent }   from './note-list/note-list.component';
import { EditNoteComponent }   from './edit-note/edit-note.component';
import { AddNoteComponent }   from './add-note/add-note.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/note-list', pathMatch: 'full' },
  { path: 'note-list', component: NoteListComponent },
  { path: 'add-note', component: AddNoteComponent },
  { path: 'note/:id', component: EditNoteComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}