import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/note';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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


  constructor(
    private notesService: NotesService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {}

  onSubmit() {
    this.notesService.addNote(
      this.noteForm.get('title')?.value!,
      this.noteForm.get('date')?.value!,
      this.noteForm.get('body')?.value!
    ).subscribe(note => {
        console.log(note)
        this.goBack()
    });
  }

  goBack(): void {
    this.location.back();
  }

  toBrowse(): void {
    this.router.navigateByUrl('/browse');
  }

}
