import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {routing} from './app.routing';
import {HomeComponent} from './pages/home.component';
import {HackathonComponent} from './pages/hackathon.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarComponent, CarouselComponent, HomeComponent, HackathonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
