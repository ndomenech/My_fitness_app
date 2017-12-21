import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CaloriesComponent } from './calories/calories.component';
import { ProfileComponent } from './profile/profile.component';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './widget/list/list.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    IndexComponent,
    CaloriesComponent,
    ActivitiesComponent,
    AppComponent,
    HeaderComponent,
    NavComponent,
    ProfileComponent,
    LoginComponent,
    ListComponent,
    SigninComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'header', component: HeaderComponent },
      { path: 'home', component: IndexComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'calories', component: CaloriesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'login', component: SigninComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
