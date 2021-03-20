import { IProduct } from '../../../+shared/interfaces/IProduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/+shared/services/product.service';

@Component({
  selector: 'app-product-tech-devices',
  templateUrl: './product-tech-devices.component.html',
  styleUrls: ['./product-tech-devices.component.scss']
})
export class ProductTechDevicesComponent implements OnInit {

  constructor(private productServ: ProductService) { }

  techDevicesProductList: IProduct[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.productServ.getHomeProduct().subscribe(
      data => this.techDevicesProductList = data,
      err => this.errorMessage = err
    );

    setTimeout(() => {
      console.warn(this.techDevicesProductList);
    }, 5000)
  }

}
