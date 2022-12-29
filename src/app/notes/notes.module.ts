import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';

import { ComposeComponent } from './compose/compose.component';
import { BrowseComponent } from './browse/browse.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    ComposeComponent,
    BrowseComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BrowseComponent
  ]
})
export class NotesModule { }
