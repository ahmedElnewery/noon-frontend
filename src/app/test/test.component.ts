import { Component, OnInit } from '@angular/core';
import { TestController } from 'src/@core/APIs/testController';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  posts = [];

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
    this.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.posts = data;
    })  
  }
  
  public sendGetRequest(){
      const url = TestController.GetAll;
      return this.httpClient.get(url);
    }
}
