import { Component } from "@angular/core";

import { bounceOutRightAnimation, fadeInAnimation } from "./../animations";
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
  query,
  animateChild, group, stagger
} from "@angular/animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  animations: [
    trigger("todosAnimation", [
      transition(":enter", [
        group([
        query("h2", [
          style({
            transform: "translateY(-20px"
          }),
          animate(1000)
        ]),
        query('@todoAnimation', 
        stagger(200,animateChild()))
      ])
      ])
    ]),
    trigger("todoAnimation", [
      transition(":enter", [
        useAnimation(fadeInAnimation, {
          params: {
            duration: "500ms"
          }
        })
      ]),
      transition(":leave", [
        style({ backgroundColor: "red" }),
        animate(1000),
        useAnimation(bounceOutRightAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    "faire la vaisselle",
    "appeller papa",
    "s'inscrire au cours de yoga"
  ];

  animationStarted($event) {
    console.log($event);
  }
  animationDone($event) {
    console.log($event);
  }

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
