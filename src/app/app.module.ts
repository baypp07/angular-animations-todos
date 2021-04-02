import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodosComponent } from "./todos/todos.component";
import { ZippyComponent } from "./zippy/zippy.component";
import { SlideComponent } from "./slide/slide.component";
import { KeyframesComponent } from "./keyframes/keyframes.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodosComponent,
    ZippyComponent,
    SlideComponent,
    KeyframesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
