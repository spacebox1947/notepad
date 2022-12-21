import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { BrowseComponent } from './browse/browse.component';

import { NotesService } from './notes.service';


@NgModule({
  declarations: [
    ComposeComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
