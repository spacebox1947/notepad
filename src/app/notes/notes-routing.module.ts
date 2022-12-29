import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ComposeComponent } from './compose/compose.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: '', component: BrowseComponent,
    children: [
      { path: 'display/:id', component: DisplayComponent},
      /* { path: 'compose', component: ComposeComponent}, */
      { path: '**', redirectTo: '/browse', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }