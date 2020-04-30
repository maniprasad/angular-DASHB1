import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';
import {productDirective } from "../directive";
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class logincomponent implements OnInit {
    //control: FormControl;
    login:any={};
    formGroup1: FormGroup;
  username;
  isRememberMe;
  
  constructor(private httpClient: HttpClient , private formBuilder: FormBuilder , public routes : Router) { 
  //  this.control = fb.control({value: 'my val', disabled: true})

  }


ngOnInit(){
  this.formGroup1 = this.formBuilder.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required],
  });
}
submit(){
alert("sdfsd");
console.log(this.formGroup1);
if(this.login.username == "mani" && this.login.password == "prasad"){
  this.routes.navigate(['/home']);
}
else{
  this.routes.navigate(['/login']);
}
}

}
