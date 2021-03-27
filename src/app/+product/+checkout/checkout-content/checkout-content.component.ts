import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.scss']
})
export class CheckoutContentComponent implements OnInit {

  tags = [
    { number: 1, name: 'Sign In' },
    { number: 2, name: 'Shipping address' },
    { number: 3, name: 'payment' },
  ]
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showSection(tagNumber: number) {
    console.warn(tagNumber);

    switch (tagNumber) {
      case 1:
        this.router.navigate(['sign-in'], {
          relativeTo: this.activeRoute,
        });
        break;

      case 2:
        this.router.navigate(['ship-address'], {
          relativeTo: this.activeRoute,
        });
        break;

      case 3:
        this.router.navigate(['payment'], {
          relativeTo: this.activeRoute,
        });
        break;

      case 4:
        this.router.navigate(['orders-list'], {
          relativeTo: this.activeRoute,
        });
        break;

      case 5:
        this.router.navigate(['sign-up'], {
          relativeTo: this.activeRoute,
        });
        break;

      default:
        this.router.navigate(['sign-up'], {
          relativeTo: this.activeRoute,
        });

    }
  }

}
