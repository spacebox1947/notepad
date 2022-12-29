import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotesService } from '../notes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  noteForm = new FormGroup({
    id: new FormControl(0),
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

  noteToEdit: Note = {
    id: 0,
    body: '',
    title: '',
    date: ''
  };

  id: number = 1;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
      router.events.subscribe(() => {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.notesService.getNote(this.id).subscribe((note) => {
          console.log(note)
          this.noteToEdit = {
            id: note.id,
            body: note.body,
            title: note.title,
            date: note.date
          }
          this.noteForm.setValue({
            'id': this.noteToEdit.id,
            'body': this.noteToEdit.body,
            'title': this.noteToEdit.title,
            'date': this.noteToEdit.date
          });
        });
      })
    }

  ngOnInit(): void {}

  onSubmit() {
    this.notesService.updateNote(
      this.noteForm.get('id')?.value!,
      this.noteForm.get('title')?.value!,
      this.noteForm.get('date')?.value!,
      this.noteForm.get('body')?.value!
    ).subscribe(note => {
      this.toBrowse();
    });
  }

  goBack(): void {
    this.location.back();
  }

  toBrowse(): void {
    this.router.navigateByUrl('/browse');
  }

  deleteNote(id: number) {
    console.log(`Deleting note: ${id}`);
    this.notesService.deleteNote(id).subscribe();
    this.toBrowse();
  }
}
