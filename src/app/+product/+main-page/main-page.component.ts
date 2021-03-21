import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  momImgs = [
    { src: '../../../assets/Img/test/en_cat-01.png' },
    { src: '../../../assets/Img/test/en_cat-02.png' },
    { src: '../../../assets/Img/test/en_cat-03.png' },
    { src: '../../../assets/Img/test/en_cat-04.png' },
    { src: '../../../assets/Img/test/en_cat-05.png' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
