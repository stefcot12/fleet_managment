import {Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidebar',
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <app-menu></app-menu>
      </mat-drawer>
      <ng-content></ng-content>
    </mat-drawer-container>
  `,
  styles: [`
      .example-container {
          width: 100%;
          height: calc(100vh - 64px);
      }
  `
  ]
})
export class SidebarComponent implements OnChanges {
  @Input() toggleSidenav = false;
  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnChanges(changes: SimpleChanges) {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
