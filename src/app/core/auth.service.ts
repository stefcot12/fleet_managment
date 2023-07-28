import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Auth} from "../model/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$ = new BehaviorSubject<Auth | null>(null)

  constructor() { }

  get ifLogged$() {
    return this.auth$
      .pipe(
        map(auth => !!auth)
      )
  }
}
