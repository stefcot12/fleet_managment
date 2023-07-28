import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IfLoggedDirective} from "./directive/if-logged.directive";


@NgModule({
  declarations: [
    IfLoggedDirective
  ],
  exports: [
    IfLoggedDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
}
