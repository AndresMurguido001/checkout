import { Directive, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Directive({
  selector: '[appResize]',
})
export class ResizeDirective implements OnInit {
  @HostListener("window:resize") onresize(){
    this.checkWindow();
  }

  checkWindow() {
    let path = this.el.nativeElement.querySelector('rect');
    if (path) {
      let pathSize = Math.round(path.getTotalLength() + 5);
      path.style.strokeDashoffset = pathSize;
      path.style.strokeDasharray = pathSize;

    }
  }

  constructor(private el: ElementRef) {
 }

 ngOnInit(): void {
   this.checkWindow();
 }

}
