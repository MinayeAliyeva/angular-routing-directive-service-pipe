import { Component } from '@angular/core';
import { BComp } from '../b/b';
import { FormsModule } from '@angular/forms';
import { Example } from '../service/example';

@Component({
  selector: 'app-a',
  imports: [BComp, FormsModule],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class AComp {
  constructor(public ex: Example) {}
}
