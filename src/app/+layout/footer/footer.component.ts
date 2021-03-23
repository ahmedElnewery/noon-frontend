import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  electronics = ['Mobiles', 'Laptops', 'Camera', 'TVs']
  fashion = ['Womens Fashions', 'Mens Fashions', 'Girls Fashions', 'Boys Fashions']
  home = ['Kitchen',  'Home Decor', 'Home Appliances', 'Tools Improvement']
  beauty = ['Make-Up', 'Hair Care', 'Skin Care']
  ngOnInit(): void {
  }

}
