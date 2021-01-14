import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetComponent } from './components/bet/bet.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'bet', component:BetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
