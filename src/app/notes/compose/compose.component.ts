import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  noteForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    date: new FormControl('', [
      Validators.required
    ]),
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ])
  });


  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Click!');
    console.log(
      this.noteForm.get('title')?.value,
      this.noteForm.get('date')?.value,
      this.noteForm.get('body')?.value,
    );
    
    this.notesService.addNote(
      this.noteForm.get('title')?.value!,
      this.noteForm.get('date')?.value!,
      this.noteForm.get('body')?.value!
    );
  }

}
