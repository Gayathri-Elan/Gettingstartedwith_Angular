import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [
    { id: 1, name: 'Dr Nice', mail: 'drnice@gmail.com' },
    { id: 2, name: 'Narco', mail: 'narco@gmail.com' },
    { id: 3, name: 'Bombasto', mail: 'bombasto123@gmail.com' },
    { id: 4, name: 'Celeritas', mail: 'celerisss@gmail.com' },
    { id: 5, name: 'Magneta', mail: 'magnetaman@gmail.com ' },
    { id: 6, name: 'RubberMan', mail: 'rubber45@gmail.com' },
    { id: 7, name: 'Dynama', mail: 'dynama23@gmail.com' },
    { id: 8, name: 'Dr IQ', mail: 'driq140@gmail.com' },
    { id: 9, name: 'Magma', mail: 'magmalava1@gmail.com' },
    { id: 10, name: 'Tornado', mail: 'tornadoman@gmail.com' },
  ];

  selectedPerson?: Person;
  onSelect(person: Person): void {
    this.selectedPerson = person;
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
function e(e: any) {
  throw new Error('Function not implemented.');
}
