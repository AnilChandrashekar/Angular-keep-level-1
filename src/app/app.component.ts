import { Component, OnInit } from '@angular/core';

import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  note: Note = new Note();
  noteList: Array<Note>;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(response => {
      if (response) {
        this.noteList = response;
      } else {
        this.errMessage = 'We are unable to retreive notes list.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }

  addNote() {
    if (!this.note.text || !this.note.title) {
      this.errMessage = 'Title and Text both are required fields';
      return;
    }

    this.notesService.addNote(this.note).subscribe(response => {
      if (response) {
        this.noteList.push(this.note);
        this.note = new Note();
      } else {
        this.errMessage = 'We are unable to add the selected note.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }
}
