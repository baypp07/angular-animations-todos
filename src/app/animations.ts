import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

export let fade = trigger("fade", [
  state("void", style({ opacity: 0 })),

  transition(":enter, :leave", [animate(1000)])
]);

// la meme chose que :
// animations: [
//   trigger("fade", [
//     state('void', style({ opacity:0})),
//     transition("void => *", [
//       style({ backgroundColor: "yellow", opacity: 0 }),
//       animate(2000, style({ backgroundColor: "white", opacity: 1 }))
//     ]),

//     transition("* => void", [animate(2000, style({ opacity: 0 }))])
//   ])
// ]

export let slide = trigger("slide", [
  transition(":enter", [
    style({ transform: "translateX(-10px" }),
    animate(500)
  ]),

  transition(":leave", [
    animate(
      "500ms cubic-bezier(.61, .29, .07, 1.02)",
      style({ transform: "translateX(-100%" })
    )
  ])
]);
