import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FieldType } from '@ngx-formly/core';
import { SelectOption } from '../../models/select-option';


@Component({
  selector: 'app-formly-select',
  templateUrl: './formly-select.component.html',
  styleUrls: ['./formly-select.component.scss'],
})
export class FormlySelectComponent extends FieldType implements OnInit {
  @Input() public placeholder = '';
  @Input() public label = '';
  public _options: Array<SelectOption> = [];

  @Input() public value;
  public selectedOptions = [];
  @Output() public selectChanged = new EventEmitter();
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'value',
    textField: 'title',
    allowSearchFilter: true
  }
  @Output() filterChanged = new EventEmitter();
  isMultiSelect = false;
  filterterm = '';
  constructor() {
    super();

  }

  ngOnInit(): void {
    this.isMultiSelect = this.field.templateOptions.showMultiValue;
    this.dropdownSettings.singleSelection= !this.field.templateOptions.showMultiValue;
  }



  onSelect(event) {
    this.selectChanged.emit(event);
    this.field.templateOptions.onChangeValue(event);
  }

  onDeSelect(event) {
    this.selectChanged.emit(event);
    this.field.templateOptions.onChangeValue(event);
  }

  changeFilter(event) {
    if (this.field.templateOptions.onChangeFilter) {
      this.field.templateOptions.onChangeFilter(event);
    }

  }

}

