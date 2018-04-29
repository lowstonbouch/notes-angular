import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: [ './edit-note.component.css' ],
})
export class EditNoteComponent implements OnInit
{
  @Input() note: Note;
 
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {}
 
  ngOnInit(): void {
    this.getNote();
  }
 
  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.note = this.noteService.getNoteById(id);
  }

  destroyTag( tag )
  {
    this.note.tags = this.note.tags.filter((item)=>{if(item !== tag){return item}});
  }

  saveNote( note )
  {
    let array:  Array<string> = this.note.title.split(' ');
    array.forEach((item) => {
      if(item.slice(0,1) === '#'){
        if(this.note.tags.length){
          if(this.note.tags.every((tag)=>{
            if(tag !== item){
              return true;
            }
          })){
            this.note.tags.push(item);
          }
        }else{
          this.note.tags.push(item);
        }
      }
    })
    this.note.title = this.note.title.replace(/#/g, '');
    this.noteService.toggleNoteEdit( this.note);
  }

}
