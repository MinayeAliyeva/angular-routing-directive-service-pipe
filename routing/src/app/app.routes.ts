import { Route, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
export const homeRoute: Route = {
  path: '',
  component: Home,
};

export const routes: Routes = [
  homeRoute,
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'contact/:params',
    component: Contact,
  },
];
