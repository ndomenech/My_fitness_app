import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: NavComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
