import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../list';
import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people = PEOPLE;
  selectedPerson?: Person;

  onSelect(person: Person): number {
    this.selectedPerson = person;
    return person.id;
  }

  deletePerson(id: number): void {
    let i = this.people.findIndex((e) => e.id === id);
    if (i != -1) {
      this.people.splice(i, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
