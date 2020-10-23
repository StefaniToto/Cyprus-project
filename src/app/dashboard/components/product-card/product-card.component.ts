import { Component, OnInit, Input } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product;
  @Input() nextProduct;
  @Input() disabled;
  

  constructor() { 
  }

  ngOnInit(): void {



}





}
