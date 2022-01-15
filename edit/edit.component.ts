import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../list';
import { Person } from '../person';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  people = PEOPLE;

  selectedPerson?: Person;
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  constructor() {}

  ngOnInit(): void {}
}
