import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardsComponent } from './boards/boards.component';
import { PinsComponent } from './pins/pins.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LogregComponent },
  { path: 'home', component: HomeComponent}, 
  { path: 'explore', component: ExploreComponent },

  { path: 'profile', component: ProfileComponent,children:[
      { path: 'boards', component: BoardsComponent },
      { path: 'pins', component: PinsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
