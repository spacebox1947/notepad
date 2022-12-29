import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './notes/browse/browse.component';
import { ComposeComponent } from './notes/compose/compose.component';
import { DisplayComponent } from './notes/display/display.component';

const routes: Routes = [
  { path: 'browse', 
    loadChildren: () =>
      import('./notes/notes.module').then(m => m.NotesModule)
  },
  { path: 'compose', component: ComposeComponent},
  {path: '', redirectTo: '/browse', pathMatch: 'full'}
  /* { path: 'compose', component: ComposeComponent},
  { path: 'display/:id', component: DisplayComponent},
  { path: '', redirectTo: '/browse', pathMatch: 'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
