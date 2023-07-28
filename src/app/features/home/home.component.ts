import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-toolbar
      (menuClick)="toggleSide()">
    </app-toolbar>
    <app-sidebar [toggleSidenav]="toggle">
      <router-outlet></router-outlet>
    </app-sidebar>

  `,
  styles: [
  ]
})
export class HomeComponent {
  toggle = false;

  toggleSide(){
    this.toggle = !this.toggle;
  }

}
