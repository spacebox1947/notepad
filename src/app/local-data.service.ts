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
        id: 1,
        title: 'Farts',
        date: '12-11-2022',
        body: 'There were so many. So many casualties'
      },
      {
        id: 2,
        title: 'Milk',
        date: '07-14-2011',
        body: 'It was not very good. I drank some, but it tasted like a shoe.'
      },
      {
        id: 3,
        title: 'This is too stressful',
        date: 'Unclear Date',
        body: 'Everything. The entirety. Even my pants. I hate.'
      },
      {
        id: 4,
        title: 'Flavor',
        date: '14-14-1414',
        body: 'Dear hot-toddy Columbus, the flavor was divine!'
      }
    ];
    return {notes};
  }

  constructor() { }
}
