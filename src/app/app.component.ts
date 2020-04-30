import { Component , OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {MessageService } from "./service";
import { TestService } from "../app/testService";
import { SubscriptionLike as ISubscription } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mani';
  
  sub: ISubscription;
  items: any =[];
constructor( private routes: Router , private ts :TestService){
  

}

ngOnInit(){
  //this.routes.navigate(['/thor/21'], { queryParams: { order: 'popular' } });

  this.sub = this.ts.output.subscribe(v => {
    if(v) {
     // alert(v);
     console.log(v);
      this.items =v ;
    }
  })
  // let newData = new ResultData();
  // //newData.name = "Angular 6 Subscription Test";
  // this.ts.send(newData);
}
broadcaseclk(){
  this.sub = this.ts.output.subscribe(v => {
    console.log(v);
    if(v) {
      //alert("sdfsd");
      console.log(v);
      this.items = v;
      console.log(this.items);
    }
  })

}
logout(){
 // alert("mani");
 this.ts.send([]);
// this.items = [];
 this.ts.output.subscribe(v => {
  if(v) {
    this.items = v;
  }
})
this.routes.navigate(['/login']);

}
ngdestroy(){
  alert("sdfsd");
  this.sub.unsubscribe();
}


}
