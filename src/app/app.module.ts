import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BioComponent } from './pages/bio/bio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MovingLetterDirective } from './moving-letter.directive';
import { MovingLetterComponent } from './ui/moving-letter/moving-letter.component';

import { NgInviewModule } from 'angular-inport';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    ProjectDetailsComponent,
    HeaderComponent,
    FooterComponent,
    MovingLetterDirective,
    MovingLetterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgInviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
