import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../list';
import { Person } from '../person';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor() {}
  people = PEOPLE;
  ngOnInit(): void {}

  deletePerson(id: number): void {
    let i = this.people.findIndex((e) => e.id === id);
    if (i != -1) {
      this.people.splice(i, 1);
    }
  }
}
