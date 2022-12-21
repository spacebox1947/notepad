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

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

}
