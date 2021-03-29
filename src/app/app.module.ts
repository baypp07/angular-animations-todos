import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodosComponent } from "./todos/todos.component";
import { ZippyComponent } from "./zippy/zippy.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TodosComponent, ZippyComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}