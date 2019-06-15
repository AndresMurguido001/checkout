import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    animation,
    stagger,
    keyframes,
  } from '@angular/animations';

  export const orderSummaryAnimation = trigger("openClose", [
    state('open', style({
      height: '20rem',
      overflow: 'scroll',
    })),
    state('closed', style({
      height: '50px',
      overflow: "hidden"
    })),
    transition('open <=> closed', [
      animate("0.3s ease-out"),
      animateChild()
    ]),
  ])

  export const rotateBtnAnimation = trigger("upDown", [
      state('up', style({
          transform: 'rotate(180deg)'
        })
      ),
      state('down', style({
          transform: 'rotate(360deg)'
      })),
      transition("up => down", [
          animate('0.5s ease-in')
      ]),
  ])

 
export const nextLoginStep = trigger('formCompleted', [
  transition(":leave", [

    animate("0.8s ease-out", keyframes([
      style({ opacity: 1, transform: "rotate(0deg) translateY(0)" }),
      style({ transform: "rotate(30deg)", transformOrigin: "top left"}),
      style({ transform: "rotate(0) translateY(30rem)", transformOrigin: "center", opacity: 0 })
    ]))

  ])
])