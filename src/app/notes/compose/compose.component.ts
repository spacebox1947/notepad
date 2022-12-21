import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Click!');
  }

}
