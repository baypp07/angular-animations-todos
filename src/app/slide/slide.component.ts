import { Component } from "@angular/core";
import { slide } from "./../animations";


@Component({
  selector: "slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.css"],
  animations: [slide

  ]
})
export class SlideComponent {
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
