import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { BrowseComponent } from './browse/browse.component';

import { NotesService } from './notes.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComposeComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NotesModule { }
