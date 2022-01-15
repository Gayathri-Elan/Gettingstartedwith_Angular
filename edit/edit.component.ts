import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";
import { Person } from "../person";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  people: Person[] = [];

  selectedPerson?: Person;
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  constructor(private _personService: PersonService) {}

  ngOnInit(): void {
    this.people = this._personService.getPeople();
  }
}
