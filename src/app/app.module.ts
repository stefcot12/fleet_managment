import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { LoginLayoutComponent } from './features/login-layout/login-layout.component';
import { FirstComponent } from './features/first/first.component';
import { SecondComponent } from './features/second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    LoginLayoutComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
