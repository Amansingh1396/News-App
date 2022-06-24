import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TechComponent } from './components/tech/tech.component';

const routes: Routes = [
  {path:'', component:CardComponent},
  {path:'tech', component:TechComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
