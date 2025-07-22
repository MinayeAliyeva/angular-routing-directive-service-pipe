import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {
  @Input('renklendir') color: string | undefined;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') method() {
    console.log(this.color);
    
    this.el.nativeElement.style = 'color:red';
    console.log('mouse');
  }
  @HostListener('mouseleave') method2() {
    this.el.nativeElement.style = 'color:black';
    console.log('mouse leave');
  }
}
