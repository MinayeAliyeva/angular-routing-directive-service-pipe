import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: ` <nav>
      <a routerLink="/home">Home</a> || <a routerLink="/about">About</a> ||
      <a routerLink="/contact">Contact</a>
    </nav>
    <router-outlet> </router-outlet>`,
  styleUrl: './app.css',
})
export class App {
  protected title = 'routing';
}
