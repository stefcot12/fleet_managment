import { Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service';

@Directive({
  selector: '[appIfLogged]'
})
export class IfLoggedDirective {

  sub!: Subscription

  constructor(
    public authServ: AuthService,
    private el: ElementRef<HTMLElement>
  ) {
    this.sub = authServ.ifLogged$
      .subscribe(logged => {
        if (logged) {
          el.nativeElement.style.display = 'block'
        } else {
          el.nativeElement.style.display = 'none'
        }
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
