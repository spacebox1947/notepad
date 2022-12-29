import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  notes: Note[] = [];
  displayingNote: boolean = false;

  constructor(private notesService: NotesService) {
    this.getNotes();
  }

  ngOnInit(): void {
  }

  getNotes() {
    this.notesService.getNotes().subscribe(
      // display a subset of notes
      //notes => this.notes = notes.slice()
      notes => this.notes = notes
    );
  }
}