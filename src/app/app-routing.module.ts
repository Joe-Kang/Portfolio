import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import { HomeComponent } from './views/home/home.component';
import { CardsComponent } from './views/cards/cards.component';
import { PlaygroundComponent } from './views/playground/playground.component';
import { ChatroomComponent } from './views/chatroom/chatroom.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'playground', pathMatch: 'full', component: PlaygroundComponent },
  { path: 'cards', pathMatch: 'full', component: CardsComponent },
  { path: 'chatroom', pathMatch: 'full', component: ChatroomComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
