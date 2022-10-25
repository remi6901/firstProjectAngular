import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor!:string;

  constructor() { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.backgroundColor = 'transparent';
  }

}
