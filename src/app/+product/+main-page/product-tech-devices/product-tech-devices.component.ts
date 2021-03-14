import { IProduct } from '../../../+shared/interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductHotDealsService } from 'src/app/+shared/services/product-hot-deals.service';

@Component({
  selector: 'app-product-tech-devices',
  templateUrl: './product-tech-devices.component.html',
  styleUrls: ['./product-tech-devices.component.scss']
})
export class ProductTechDevicesComponent implements OnInit {

  constructor(private productServ: ProductHotDealsService, private activeRoute: ActivatedRoute) { }

  techDevicesProductList: IProduct[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.productServ.getProduct().subscribe(
      data => this.techDevicesProductList = data,
      err => this.errorMessage = err
    );
  }

}
