import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-dropdown',
  templateUrl: './quantity-dropdown.component.html',
  styleUrls: ['./quantity-dropdown.component.scss']
})
export class QuantityDropdownComponent implements OnInit {
  @Input () numberValue;
  constructor() {

  }

  ngOnInit(): void {
  }

}
