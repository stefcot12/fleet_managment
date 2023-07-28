import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<!--    <app-toolbar-->
<!--      *ngIf="ifLogged"-->
<!--      (menuClick)="toggleSideNav()"-->
<!--    />-->

<!--&lt;!&ndash;    <app-sidebar&ndash;&gt;-->
<!--&lt;!&ndash;      *ngIf="ifLogged"&ndash;&gt;-->
<!--&lt;!&ndash;      [toggleSidenav]=toggleSide&ndash;&gt;-->
<!--&lt;!&ndash;    />&ndash;&gt;-->

   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fleet-managment';
  toggleSide = false;
  ifLogged = false;

  toggleSideNav() {
    this.toggleSide = !this.toggleSide;
  }

}
