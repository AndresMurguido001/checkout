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
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

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
  transition(":enter", [
    animate("0.5s ease-in-out", keyframes([
      style({ opacity: 0, transform: "translate(0, -30rem)" }),
      style({ opacity: 1, transform: "translate(0, 0)" })
    ]))
  ]),
  transition(":leave", [
    animate("0.85s ease-out", keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ display: "none" })
    ]))

  ])
])

export const substepAnimation = trigger('substepAnimation', [
  transition(":enter", [
    animate("0.5s ease-in-out", keyframes([
      style({ opacity: 0, transform: "translateX(-50rem)"}),
      style({ opacity: 1, transform: "translateX(0)"})
    ]))
  ]),
  transition(":leave", [
    animate("0.5s ease-in-out", keyframes([
      style({ opacity: 1, transform: "translateX(0)", position: "absolute" }),
      style({ opacity: 0, transform: "translateX(100rem)", position: "absolute" }),
    ]))
  ])
])

// export const formSectionSubstep = trigger('nextSubStep', [
//   transition("active", [
//     animate("0.5s ease-in-out", keyframes([
//       style({ opacity: 0, transform: "translate(0, -30rem)" }),
//       style({ opacity: 1, transform: "translate(0, 0)" })
//     ])),
//     transition("nextSubStep", [
//       animate("0.5s ease-in-out", keyframes([
//         // style({  })
//       ]))
//     ])
//   ])
// ])