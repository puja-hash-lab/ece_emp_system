import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { TermComponent } from './component/term/term.component';

const routes: Routes = [
  {path: "", component:LoginComponent},
  {path: "Contactus", component:ContactComponent},
  {path: "term", component:TermComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
