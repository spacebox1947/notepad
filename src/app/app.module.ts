import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LocalDataService } from './local-data.service'; 

import { NotesModule } from './notes/notes.module';
import { BrowseComponent } from './notes/browse/browse.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      LocalDataService, { dataEncapsulation: false }
    ),
    NotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
