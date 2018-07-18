import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { BioComponent } from '../pages/bio/bio.component';
import { ProjectDetailsComponent } from '../pages/project-details/project-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'about',
    component: BioComponent,
    data: { state: 'about' }
  },
  {
    path: 'work',
    component: ProjectDetailsComponent,
    data: { state: 'work' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
