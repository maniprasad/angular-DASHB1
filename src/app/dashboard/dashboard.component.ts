import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';
import {productDirective } from "../directive";
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { description} from "../thor/thorcomponent";
// import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { TestService } from "../testService";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  items: Object;
  receivedmessage:string;
  firstname:string;
  thorData: string;
  name:Object = {};
  arr :any =[];
  cart:any;
  //newData:any = new ResultData();
  constructor(private httpClient: HttpClient , private ts: TestService) { }

  ngOnInit() {
    
    console.log(this.firstname);
    let path = "../../assets/data.json";
this.httpClient.get(path).subscribe((data)=>{
  console.log(data);
  this.items = data;
  });

console.log(name);
 // this.newData.name = this.name;
 
//  this.arr.push(name);
//  console.log(this.arr);
//   this.ts.send(this.arr);
  
  }
  changetext(){

 //this.newData.name = this.name;
  this.ts.send(this.name);
  }

dbclick( event , data){
if(event.checked)
{
    this.arr.push(data);
    this.ts.send(this.arr);
}else{
  let itemlist  = this.arr.filter((element , index) => {
  if(element != data){
     return element;
  }
  });
  this.arr= itemlist;
  this.ts.send(itemlist);
}
  }
  

  teri(){
alert("teri")
  }

  getMessage(msg: string){
    alert("mani");

this.thorData = msg; 
 }

}
