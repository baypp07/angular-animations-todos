import { Component } from "@angular/core";

import { bounceOutRightAnimation } from "./../animations";
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation
} from "@angular/animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  animations: [
        trigger("todoAnimation", [
      transition(":enter", [style({ opacity: 0 }), animate(2000)]),
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

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
