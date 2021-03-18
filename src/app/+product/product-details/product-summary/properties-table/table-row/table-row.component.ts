import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
@Input() options;
keyValues;
constructor() {

}

ngOnInit(): void {
  this.keyValues = Object.entries(this.options)

  }

}
