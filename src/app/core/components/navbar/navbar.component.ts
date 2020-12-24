import { coerceStringArray } from '@angular/cdk/coercion';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {


  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;
  public userisLogged: boolean = false;


  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private service: AuthenticationService
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
    const role = localStorage.getItem('role');
    console.log('roleeee', role)
    if (role) {
      this.userisLogged = true;
    } else
      this.userisLogged = false;
  }

  logout() {
    this.service.logout()
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}

