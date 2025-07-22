import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Renklendir } from './renklendir';
import { Validation } from './validation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Renklendir, Validation],
  styleUrls: ['./app.css'],
  // template: '<h1  renklendir="green">Directive</h1>',
  template: `<form type="text">
    <input autocomplete="off" id="name" validate required minlength="3" />
    <div></div>
    <button type="submit">Send</button>
  </form>`,
})
export class App {
  protected title = 'directive';
}
