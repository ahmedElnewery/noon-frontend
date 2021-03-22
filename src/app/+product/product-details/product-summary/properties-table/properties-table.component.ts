import { IProduct } from './../../../../+shared/interfaces/IProduct';
import { categeories } from './../../../../+shared/enums/allCategeory';
import { AllSubcategories } from './../../../../+shared/enums/allsubCategeory';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.scss']
})
export class PropertiesTableComponent implements OnInit {
@Input() product:IProduct;
allSubcategories= AllSubcategories;
allCategories =categeories;

  constructor() { }

  ngOnInit(): void {
  }

}
