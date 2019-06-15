import { Directive, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Directive({
  selector: '[appResize]',
})
export class ResizeDirective implements OnInit {
  @HostListener("window:resize") onresize(){
    this.checkWindow();
  }

  checkWindow() {
    let path = this.el.nativeElement.querySelector('path');
    let pathSize = path.getTotalLength();
    path.style.strokeDashoffset = pathSize;
    path.style.strokeDasharray = pathSize;
  }

  constructor(private el: ElementRef) {
 }

 ngOnInit(): void {
   this.checkWindow();
 }

}
