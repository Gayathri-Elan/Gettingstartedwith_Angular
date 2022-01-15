import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PeopleComponent } from "./people/people.component";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";

import { PersonService } from "./person.service";

@NgModule({
  declarations: [AppComponent, PeopleComponent, EditComponent, DeleteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
