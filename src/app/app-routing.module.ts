import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from './todos/todos.component';
import {SlideComponent} from './slide/slide.component';
import {KeyframesComponent} from './keyframes/keyframes.component';
import {ZippyComponent} from './zippy/zippy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'slide', component: SlideComponent},
  {path: 'keyframes', component: KeyframesComponent},
  {path: 'zippy', component: ZippyComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }