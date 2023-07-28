import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar.component';
import {ToolbarComponent} from './components/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import { MenuComponent } from './components/menu.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    MenuComponent
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
  ]
})
export class CoreModule {
}
