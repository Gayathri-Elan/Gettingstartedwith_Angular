import { Component, OnInit } from "@angular/core";
import { PersonService } from "../person.service";
import { Person } from "../person";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private _personService: PersonService) {}

  ngOnInit(): void {
    this.people = this._personService.getPeople();
  }
}
