import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisplayMovie]'
})
export class DisplayMovieDirective {
  @HostBinding('style.color') color!:string;
  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.color = 'red'
  };

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    this.color = 'black'
  }

}
