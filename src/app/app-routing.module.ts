import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {ServicesComponent} from './services/services.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {NewsComponent} from './news/news.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
