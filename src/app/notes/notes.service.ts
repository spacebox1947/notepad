import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../note';
import { NOTES } from './notes';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [];

  constructor(
    private http: HttpClient
  ) { 
    this.notes = NOTES;
   }

  getNotes () {
    return this.notes;
    //return NOTES;
  }

  //note: Note
  addNote(title: string, date: string, body: string) {
    //this.notes.push(noteForm.value);
    console.log('Adding new note to note array');
    this.notes.push({id: Math.random(), title: title, date: date, body: body} as Note);
    console.log(this.notes);
  }
}
