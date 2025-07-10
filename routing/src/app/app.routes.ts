import { Route, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Layouts } from './layouts/layouts';
import { Login } from './login/login';
import { Products } from './products/products';
export const homeRoute: Route = {
  path: '',
  component: Home,
};

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component: Login,
  // },
  // {
  //   path: '',
  //   component: Layouts,
  //   children: [
  //     homeRoute,
  //     {
  //       path: 'about',
  //       component: About,
  //     },
  //     {
  //       path: 'contact',
  //       component: Contact,
  //     },
  //     {
  //       path: 'contact/:params',
  //       component: Contact,
  //     },
  //   ],
  // },
  {
    path: 'products',
    component: Products,
  },
];
