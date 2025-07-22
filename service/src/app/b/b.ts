import { Component, inject } from '@angular/core';
import { Example } from '../service/example';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class BComp {
  ex = inject(Example);
  // constructor(public ex: Example) {}
}
