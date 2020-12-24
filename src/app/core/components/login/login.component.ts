import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSimple } from '../../models/UserSimple';
import { ToasterService } from 'angular2-toaster';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public fields: FormlyFieldConfig[];
  public model: any;
  loggedUser: UserSimple;
  private toasterService: ToasterService;
  error: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
     toasterService: ToasterService
  ) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.form = new FormGroup({});
    this.model = {};
    this.fields = [{
      key: 'username',
      type: 'input',
      templateOptions: {
        placeholder: 'Username',
        required: true,
        addonLeft: {
          class: 'icon-user',
        },
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        placeholder: 'Password',
        required: true,
        addonLeft: {
          class: 'icon-lock',
        },
      }
    }];
  }

  onSubmit(data) {
    this.loggedUser = {
      username: 'admin',
      pass: 'admin'
    };
    var key: string = 'token';

    console.log('data', data)

    this.authenticationService.login(data.form.value.username, data.form.value.password)
      .pipe(first())
      .subscribe(
        x => {
          console.log('loginnnnnnnnnnnn', x)
          // this.router.navigateByUrl('/guide');
          this.router.navigate(['/guide'], { relativeTo: this.route })    
          

        },
        error => {
          this.error = error;
          this.popToast();
        });



  }
  popToast() {
    this.toasterService.pop('error', 'Login Error!', 'Check credentials');
  }


}

