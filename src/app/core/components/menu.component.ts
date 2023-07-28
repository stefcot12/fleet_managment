import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  template: `
    <li>
      <button routerLink="/home/first">Scadenze</button>
    </li>
    <li>
      <button routerLink="/home/second">Second</button>
    </li>
  `,
  styles: []
})
export class MenuComponent {

  constructor(private router: Router) {
  }

}
