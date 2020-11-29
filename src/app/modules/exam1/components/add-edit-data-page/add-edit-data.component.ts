import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListData } from '../../models/ListData';

@Component({
  selector: 'add-edit-data',
  templateUrl: './add-edit-data.component.html'

})
export class AddNewDataComponent implements OnInit, OnDestroy, AfterViewInit {

  dataModel: any;
  public form: FormGroup;
  public fields: FormlyFieldConfig[];
  public model: any;
  sub: any;
  pageVar: boolean = false;
  par: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef) { }


  ngAfterViewInit() {
    this.sub = this.route.params.subscribe(params => {
      this.par = params;
      this.pageVar = params.pageVar;
      if (params.pageVar) {
        console.log('is true, get data');
        this.putData(params);
        this.cdRef.detectChanges();
      }
      else {
        this.cdRef.detectChanges();
        console.log('is false, add data')
      }
    });
  }

  ngOnInit() {

    this.form = new FormGroup({});
    this.model = {};
    this.fields = [{
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          key: 'Name',
          type: 'input',
          templateOptions: {
            placeholder: 'Name',
            required: true,
          },
        },

        {
          className: 'col-sm-6',
          key: 'Surname',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'Surname',
            required: true,

          }
        },
        {
          className: 'col-sm-6',
          key: 'Email',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'Email',
            required: true,

          }
        },
        {
          className: 'col-sm-6',
          key: 'RoleId',
          type: 'input',
          templateOptions: {
            type: 'text',
            placeholder: 'IP',
            required: true,

          }
        },
      ],
    }]
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  putData(params) {
    this.form.get('Name').setValue(params.Name),
      this.form.get('Surname').setValue(params.Surname),
      this.form.get('RoleId').setValue(params.RoleId),
      this.form.get('Email').setValue(params.Email)
  }



  onSubmit() {

    this.dataModel = {
      Name: this.form.get('Name').value,
      Surname: this.form.get('Surname').value,
      RoleId: this.form.get('RoleId').value,
      Email: this.form.get('Email').value,
      pageVar: false
    }
    this.router.navigate(['/module1/module1', this.dataModel]);

  }


  update() {

    this.dataModel = {
      id: this.par.id,
      Name: this.form.get('Name').value,
      Surname: this.form.get('Surname').value,
      RoleId: this.form.get('RoleId').value,
      Email: this.form.get('Email').value,
      pageVar: true
    }
    this.router.navigate(['/module1/module1', this.dataModel]);

  }

}
