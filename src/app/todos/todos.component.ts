import { Component } from "@angular/core";
import { fade } from "./../animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  animations: [fade]
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
