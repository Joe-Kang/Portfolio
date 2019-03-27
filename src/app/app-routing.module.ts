import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'playground', pathMatch: 'full', component: PlaygroundComponent },
  { path: 'cards', pathMatch: 'full', component: CardsComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
