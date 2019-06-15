import { Component } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
	styleUrls: ['./form/styles/_form.scss','./app.component.scss'],
  animations: [
    trigger('pageAnimations', [
  transition(':enter', [
    query('circle', [
      style({opacity: 0 }),
      stagger(100, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1 }))
      ])
    ])
  ])
])
  ]
})
export class AppComponent {
  title = 'fastportClone';
}

