import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';


@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
