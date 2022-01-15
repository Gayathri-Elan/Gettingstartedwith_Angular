import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { PeopleComponent } from './people/people.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: 'home',
    component: PeopleComponent,
  },
  { path: 'edit', component: EditComponent },
  { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
