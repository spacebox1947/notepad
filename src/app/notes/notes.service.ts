import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../note';
import { NOTES } from './notes';
//import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  //notes: Note[] = [];

  private notesUrl = 'api/notes'; //url in in-memory api

  constructor(private http: HttpClient) { 
    //this.notes = NOTES;
   }

  getNotes() {
    //return this.notes;
    return this.http.get<Note[]>(this.notesUrl);
  }

  /* getNoteAPI() {
    return this.http.get<Note[]>(this.notesUrl);
  } */

  getNote(id: number) {
    //return this.notes[id-1];
    // route to an individual note component
    const url = `${this.notesUrl}/${id}`;
    return this.http.get<Note>(url);
  }

  //note: Note
  addNote(title: string, date: string, body: string) {
    console.log(`Adding new note to note array: ${title}`);
    const newNote = {
      title: title,
      date: date,
      body: body
    }
    return this.http.post<Note>(
      this.notesUrl,
      newNote,
      this.httpOptions);
  }

  updateNote(id: number, title: string, date: string, body: string) {
    console.log(`Adding new note to note array: ${title}`);
    const newNote = {
      id: id,
      title: title,
      date: date,
      body: body
    }
    return this.http.put<Note>(
      this.notesUrl,
      newNote,
      this.httpOptions);
  }

  deleteNote(id: number) {
    console.log(`notesService Deleting note: ${id}`);
    return this.http.delete<Note>(`${this.notesUrl}/${id}`, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
}
