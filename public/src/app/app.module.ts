import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { PinService } from './pin.service';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardsComponent } from './boards/boards.component';
import { PinsComponent } from './pins/pins.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'profile', component: ProfileComponent,children:[
      { path: '', component: BoardsComponent },
      { path: 'pins', component: PinsComponent }
  ]}
  ]
    
@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    HeaderComponent,
    HomeComponent,
    ExploreComponent,
    ProfileComponent,
    BoardsComponent,
    PinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
    exports: [
    RouterModule
  ],
  providers: [PinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
