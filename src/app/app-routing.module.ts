import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {ContactMeComponent} from './pages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
