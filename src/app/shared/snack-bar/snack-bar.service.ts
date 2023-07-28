import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Snack} from "../../model/snack";
import {SnackBarComponent} from "./snack-bar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnack(s: Snack) {
    const d = (s.duration) ? s.duration : 1000;
    this._snackBar.openFromComponent(SnackBarComponent, {
      panelClass: s.type,
      duration: d,
      data: s
    });
  }
}
