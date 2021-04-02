import { Component } from "@angular/core";
import { keyframesanim } from "./../animations";

@Component({
  selector: "keyframes",
  templateUrl: "./keyframes.component.html",
  styleUrls: ["./keyframes.component.css"],
  animations: [keyframesanim]
})
export class keyframesComponent {
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
