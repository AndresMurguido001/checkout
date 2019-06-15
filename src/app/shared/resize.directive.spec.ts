import { ResizeDirective } from './resize.directive';
import { ElementRef } from '@angular/core';

describe('ResizeDirective', () => {
  it('should create an instance', () => {
    const directive = new ResizeDirective(new ElementRef(SVGPathElement));
    expect(directive).toBeTruthy();
  });
});
