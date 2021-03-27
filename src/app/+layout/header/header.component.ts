import { SignInComponent } from 'src/app/+auth/sign-in/sign-in.component';
import { UserService } from './../../+shared/services/user.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { FilterService } from 'src/app/+shared/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 private isLoginsub :Subscription;
 isLogin:boolean =false
  allcategory: any[] = [];
  allSubctegory: any[] = [];
  isHover = false;
  categeories=["fashion","electronics","home","beauty&health"];
  AllSubcategories=[ "menWear",
  "womenWear",
   "kidWear",
    "mobiles",
    "labtops",
    "tv",
    "kitchen",
   "homeDecor",
   "furniture",
   "makeup",
    "skinCare",
    "hairCare",
  ];
  //productSubcategory:any[]=[];
  productSubcategory = ['Electronics', 'Mobiles', 'Fachion', 'Home', 'Beauty', 'Baby', 'Deals'];
  constructor(private filterService: FilterService, private router: Router,private userService:UserService) { }
  goToThisCategory(category) {

    this.router.navigate(['/allcategory', category])

  }
  goToFillter(subcategory) {
    this.router.navigate(['/filter', subcategory])
  }
  leaveList() {
    this.isHover = false;
  }
  onEnter(search){

    let matchingSearch;
  var filter1 =this.categeories.filter((item,index)=>{
   return item.toLocaleLowerCase().match(search.toString().toLocaleLowerCase());


  })
  if (filter1[0]!=null){
    console.log("cate search for " +filter1[0] )
    this.router.navigate([`/allcategory/${filter1[0]}`]);
  }
  else{
  var filter2=this.AllSubcategories.filter((item,index)=>{
  return item.toLocaleLowerCase().match(search.toString().toLocaleLowerCase());

})
if (filter2[0]!=null){
  console.log("subcate search for " +filter2[0] )
  this.router.navigate([`/filter/${filter2[0]}`]);
}else{
  console.log("not found")
  alert("not fonund");
}
  }
  }
  getSubcategory(cateid) {
    this.filterService.getAllSubcategoryByCateId(cateid).subscribe(
      data => {
        this.allSubctegory = data;
      },
      error => {
        console.log('error', error)
      }
    );
    this.isHover = true;
  }
  ngOnInit(): void {
  //   console.log(this.isLogin)
   this.isLoginsub= this.userService.getLoginListner().subscribe(isAuth=>{
    this.isLogin= isAuth
   })
    this.filterService.getAllCategory().subscribe(
      data => {
        //console.log("Success",data);
        this.allcategory = data;
        console.log(this.allcategory)
      },
      error => {
        console.log('error', error)
      }
    );


  }

ngOnDestroy(): void {
this.isLoginsub.unsubscribe()

}
logout(){
  this.userService.logOut()
}


}
