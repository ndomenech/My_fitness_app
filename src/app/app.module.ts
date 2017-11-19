import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
=======

import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
>>>>>>> master

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
<<<<<<< HEAD
import { IndexComponent } from './index/index.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CaloriesComponent } from './calories/calories.component';




@NgModule({
  declarations: [
    IndexComponent,
    CaloriesComponent,
    ActivitiesComponent,
=======

@NgModule({
  declarations: [
>>>>>>> master
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpModule,
    RouterModule.forRoot([
      { path: 'header', component: HeaderComponent },
      { path: 'home', component: IndexComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'calories', component: CaloriesComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' }
=======
    RouterModule.forRoot([
      { path: "home", component: NavComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
>>>>>>> master
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
