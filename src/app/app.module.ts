import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'; 
import { Partie1Component } from './partie1/partie1.component'; 
import { Partie2Component } from './partie2/partie2.component';
import { Partie3Component } from './partie3/partie3.component'; 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partie1', component: Partie1Component },
  { path: 'partie2', component: Partie2Component },
  { path: 'partie3', component: Partie3Component },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Partie1Component, 
    Partie2Component,
    Partie3Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    FormsModule
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
