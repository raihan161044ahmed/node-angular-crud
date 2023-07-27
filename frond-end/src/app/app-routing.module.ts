import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentcrudComponent } from './student-crud/student-crud.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' }, // Default route
  { path: 'student', component: StudentcrudComponent },   // Route for StudentcrudComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
