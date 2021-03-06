import { OrderService } from './../../../../+shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/+shared/interfaces/IOrder';

@Component({
  selector: 'app-chekcout-orders',
  templateUrl: './chekcout-orders.component.html',
  styleUrls: ['./chekcout-orders.component.scss']
})
export class ChekcoutOrdersComponent implements OnInit {

  tableHeaders = ['order ID', 'client name', 'shipping address', 'date', 'leve aT door', 'Get it together', 'statues', 'total Price']
  constructor(private orderServ: OrderService) { }

  //ordersList: IOrder[] = [];
  ordersList: any[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.orderServ.getAllOrders().subscribe(
      data => this.ordersList = data,
      err => this.errorMessage = err
    )
  }

  deleteOrder(orderID) {
    console.warn(orderID);
    return this.orderServ.removeOrder(orderID).subscribe(
      () => {
        console.warn('item deleted');
        this.ordersList = this.ordersList.filter(ele => ele._id != orderID);
      },
      err => console.warn(err)
    );

  }

}
