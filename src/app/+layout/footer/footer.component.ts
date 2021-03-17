import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  electronics = ['Mobiles', 'Tablets', 'Laptops', 'Home App', 'Camera', 'TVs', 'Headphones', 'Video Games']
  fashion = ['Womens Fashions', 'Mens Fashions', 'Girls Fashions', 'Boys Fashions', 'Mens Watches', 'Womens Watches', 'Eyewear', 'Bags']
  home = ['Kitchen', 'Bedding', 'Bath', 'Home Decor', 'Home Appliances', 'Tools Improvement', 'Patio & Garden', 'Home Storage']
  beauty = ['make-Up', 'make-Up', 'make-Up', 'make-Up', 'make-Up', 'make-Up', 'make-Up', 'make-Up']
  kids = ['Toys & Games', 'Toys & Games', 'Toys & Games', 'Toys & Games', 'Toys & Games', 'Toys & Games', 'Toys & Games', 'Toys & Games']
  topBrands = ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple']
  ngOnInit(): void {
  }

}
