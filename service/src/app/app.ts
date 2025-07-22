import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComp } from './a/a';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'service';
}
