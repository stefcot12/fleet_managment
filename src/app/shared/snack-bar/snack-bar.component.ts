import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {Snack} from "../../model/snack";

@Component({
  selector: 'app-snack-bar',
  template: `
      <div class="flex items-center">
          <div>
              <mat-icon *ngIf="data.icon" fontIcon="{{data.icon}}"></mat-icon>
          </div>
          <div>
              {{ data.message }}
          </div>
      </div>
  `,
  styles: []
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Snack) {
  }
}
