import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ExamService } from '../../services/examService/exam.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListData } from '../../models/ListData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {


  dataModel: ListData;
  form = new FormGroup({});
  model: any = {};
  modelTable: any = {};
  filterTable: any = {};
  options: FormlyFormOptions = {};
  item: ListData[] = [];
  pageVariable: boolean = false;
  sub: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ExamService,
) {
    this.getData();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length === 0) {
      } else {
        if (params.pageVar == 'true') {
          this.editData(params);
        } else {
          this.addData(params);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  formDettaglio = new FormGroup({});
  fieldsTable: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'data',
          type: 'datatable',
          templateOptions: {
            columns: [
               { name: 'Action', prop: 'actions' },
              { name: 'ID', prop: 'id', },
              { name: 'Name', prop: 'Name' },
              { name: 'Surname', prop: 'Surname' },
              { name: 'Email', prop: 'Email' },
              { name: 'Ip Adress', prop: 'RoleId' }

            ],
            onClickAction: ($event) => {
              switch ($event.tipo) {
                case 'update': {
                  this.goToUpdateDataForm($event.data);
                  break;
                }
                case 'delete': {
                  this.deleteRow($event.data);
                  break;
                }
              }
            },
            limit: 5
          },
          fieldArray: {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {

                type: 'action',
                key: 'actions',
                templateOptions: {
                  onlyDelete: true,
                  onlyUpdate: true
                }
              },
              {
                type: 'input',
                key: 'id',
                templateOptions: {
                  type: 'text',
                },
              },
              {
                type: 'input',
                key: 'Name',
                templateOptions: {
                  type: 'text',
                },
              },
              {
                type: 'input',
                key: 'Surname',
                templateOptions: {
                  type: 'text',
                },
              },
              {
                type: 'input',
                key: 'Email',
                templateOptions: {
                  valueProp: 'gender',

                },
              },
              {
                type: 'input',
                key: 'RoleId',
                templateOptions: {
                  valueProp: 'birthdate',

                },
              },
              {
                type: 'input',
                key: 'RoleId',
                templateOptions: {
                  type: 'text',
                },
              },


            ]
          }
        }
      ]
    }
  ];


  getData() {
    this.service.getData().subscribe(
      result => {
        console.log('result here',result)
        this.modelTable = {
          data: result
        };
        this.filterTable = this.modelTable;
        console.log('this.modelTable',this.modelTable)
       //  this.toasterService.pop('success', 'Data loaded', '')     
      }, 
      error => console.log('error')
    )
  }

  goToNewDataForm() {
    const pageVar = false;
    this.router.navigate(['/module1/add', { newDataForm: pageVar }], { relativeTo: this.route });
  }

  goToUpdateDataForm(params: any) {
    const pageVar = true;
    params = { ...params, pageVar }
    this.router.navigate(['/module1/add', params], { relativeTo: this.route });

  }

  deleteRow(params) {
    this.service.deleteData(params.id).subscribe(
      (data) => {
        this.modelTable = {
          data: this.filterTable.data.filter(data => data.id !== params.id)
        };
        this.filterTable = this.modelTable;
      //  this.toasterService.pop('success', 'Data deleted', '')     
      },
     // error => this.toasterService.pop('error', 'error occured', '')
    );
  }

  addData(params) {
    const body = {
      Name: params.Name,
      Surname: params.Surname,
      Email: params.Email,
      RoleId: params.RoleId
    }
    this.service.addPost(body).subscribe(
      (res) => {
        this.filterTable.data.push(res)
        this.modelTable = { ...this.filterTable }
       // this.toasterService.pop('success', 'Data added', '')     
      },
    //  error => this.toasterService.pop('error', 'error occured', '')
    error => console.log('error')
      );
  }

  editData(params) {
    const idrow = params.id;
    const body = {
      id: params.id,
      Name: params.Name,
      Surname: params.Surname,
      Email: params.Email,
      RoleId: params.RoleId
    }
    this.service.updatePost(body).subscribe(
      (data) => {
        this.filterTable.data[params.id - 1] = data
        this.modelTable = { ...this.filterTable }
       // this.toasterService.pop('success', 'Data edited', '')     
      },
      error => console.log('error')
    );
  }
}