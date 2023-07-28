import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  template: `
      <mat-toolbar color="primary">
          <button mat-icon-button (click)="menuClick.emit()">
              <mat-icon>menu</mat-icon>
          </button>
          <span>Fleet Managment</span>
        <span style="flex: 1 1 auto;"></span>
        <button mat-icon-button (click)="logout()">
          <mat-icon>logout</mat-icon>
        </button>
      </mat-toolbar>
  `,
  styles: []
})
export class ToolbarComponent {

  @Output() menuClick = new EventEmitter();

  constructor(private router:Router) {
  }

  logout(){
    this.router.navigateByUrl('login');
  }

}
