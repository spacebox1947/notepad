import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './note';
//import { NOTES } from './notes/notes';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      {
        title: 'Farts',
        date: '12-11-2022',
        body: 'There were so many. So many casualties'
      },
      {
        title: 'Milk',
        date: '07-14-2011',
        body: 'It was not very good. I drank some, but it tasted like a shoe.'
      },
      {
        title: 'This is too stressful',
        date: 'Unclear Date',
        body: 'Everything. The entirety. Even my pants. I hate.'
      }
    ];
    return {notes};
  }

  constructor() { }
}
